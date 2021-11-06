export interface User {
	id: number;
	username: string;
	email: string;
	provider: string;
	confirmed: boolean;
	blocked: boolean;
	role: any;
	created_at: string;
	updated_at: string;
	posts: any[];
}

export interface AuthOptions {
  signUp: (username: string, password: string, familyname?: string, name?: string, codigo_essalud?: string) => void;
  signIn: (username: string, password: string) => void;
  logout?: () => void;
  isAuthenticated?: () => boolean;
}