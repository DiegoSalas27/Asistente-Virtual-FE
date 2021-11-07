import { goto } from '$app/navigation';
import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserAttribute,
	CognitoUserPool,
	CognitoUserSession
} from 'amazon-cognito-identity-js';
import type { Writable } from 'svelte/store';
import type { User } from './types';

const POOL_DATA = {
	UserPoolId: 'us-east-1_OQyt7WBdH',
	ClientId: '25g8shd9obvo0ro9v546udt0a1'
};

const userPool = new CognitoUserPool(POOL_DATA);

function signUp(
	username: string,
	password: string,
	familyname = 'admin',
	name = 'admin',
	codigo_essalud = 'admin'
) {
	const user = {
		username,
		familyname,
		name,
		codigo_essalud,
		password
	};

	const attrList: CognitoUserAttribute[] = [];

	const familyNameAttribute = {
		Name: 'family_name',
		Value: user.familyname
	};

	const nameAttribute = {
		Name: 'name',
		Value: user.name
	};

	const codigoEssaludAttribute = {
		Name: 'custom:codigo_essalud',
		Value: user.codigo_essalud
	};

	attrList.push(new CognitoUserAttribute(familyNameAttribute));
	attrList.push(new CognitoUserAttribute(nameAttribute));
	attrList.push(new CognitoUserAttribute(codigoEssaludAttribute));

	userPool.signUp(user.username, user.password, attrList, null, (err, result) => {
		if (err) {
			console.log('Error', err);
			return;
		}

		// confirm user
		goto('/admin/dashboard', { replaceState: true });
	});
}

async function signIn(username: string, password: string, userStore: Writable<Partial<User>>): Promise<void> {
	const authData = {
		Username: username,
		Password: password
	};

	const authDetails = new AuthenticationDetails(authData);
	const userData = {
		Username: username,
		Pool: userPool
	};
	const cognitoUser = new CognitoUser(userData);

	cognitoUser.authenticateUser(authDetails, {
		async onSuccess(result: CognitoUserSession) {
			console.log(result);
			const attributes = await isAuthenticated();

			if (attributes) {
				const user: Partial<User> = {};
				attributes.forEach((attr, i) => {
					if (i >= 1) {
						const key = attributes[i].Name;
						const value = attributes[i].Value;
						user[key] = value;
					}
				});
				userStore.set(user);
			} 
			goto('/admin/dashboard', { replaceState: true });
		},
		onFailure(err) {
			console.log('Error', err);
		}
	});
}

function getAuthenticatedUser(): CognitoUser {
	return userPool.getCurrentUser();
}

function logout() {
	getAuthenticatedUser().signOut(); // deletes auth tokens for you
	goto('/auth/login', { replaceState: true });
}

async function isAuthenticated(): Promise<CognitoUserAttribute[]> {
	const user = getAuthenticatedUser();
	if (!user) return null;
	return new Promise(function (resolve, reject) {
		user.getSession((err, session) => {
			if (err) {
				reject(err)
				console.log('Error', err);
			} else {
				if (session.isValid()) {
					user.getUserAttributes(function (err, attributes) {
						if (err) {
							console.log('Error', err);
							reject(err)
						} else {
							resolve(attributes)
						}
					});
				} else {
					resolve(null);
				}
			}
		});
	});
}

// exposing our auth object
export { signUp, signIn, logout, isAuthenticated };
