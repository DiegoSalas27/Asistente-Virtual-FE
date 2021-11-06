import { goto } from '$app/navigation';
import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserAttribute,
	CognitoUserPool,
	CognitoUserSession
} from 'amazon-cognito-identity-js';

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

function signIn(username: string, password: string): void {
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
		onSuccess(result: CognitoUserSession) {
			console.log(result);
			goto('/admin/dashboard', { replaceState: true });
		},
		onFailure(err) {
			console.log('Error', err);
		}
	});
};



// exposing our auth object
export { signUp, signIn };
