export interface User {
	name: string;
	family_name: string;
	'custom:codigo_essalud': string;
}

export interface AuthOptions {
  signUp: (username: string, password: string, familyname?: string, name?: string, codigo_essalud?: string) => void;
  signIn: (username: string, password: string) => void;
  logout?: () => void;
  isAuthenticated?: () => boolean;
}