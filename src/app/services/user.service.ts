import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser, IUserLogin, IUserRegisterReq, IUserRegisterRes } from '../interfaces/User.interface';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private urlHost = `http://localhost:3000`;
	constructor(private http: HttpClient) { }

	// TODO
	registerUser(user: IUserRegisterReq): Observable<IUserRegisterRes> {
		const url = `${this.urlHost}/users`;
		return this.http.post<IUser>(url, { username: user.username, password: user.password });
	}

	// TODO interface/observable?
	loginUser(user: IUser): Observable<IUserLogin> {
		const url = `${this.urlHost}/users/login/`;
		// HTTP call,
		return this.http.post<IUser>(url, { user })
		// then handle the reception of the token, subscribe?
	}

	logoutUser() { }
}
