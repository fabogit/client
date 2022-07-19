export interface IUser {
	username: string;
	password: string;
}

export interface IUserLogin {
	message: string;
	accessToken: string;
}

export interface IUserRegister {
	message: string;
	user: string;
}