export interface IUser {
	username: string;
	password: string;
	isAdmin?: boolean;
}

export interface IUserLogin {
	message: string;
	accessToken: string;
}

export interface IUserRegisterReq {
	username: string;
	password: string;
	isAdmin?: boolean;
}

export interface IUserRegisterRes {
	userId: string;
	username: string;
	isAdmin: boolean;
}
