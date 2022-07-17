import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ITicket, ITicketPaginated } from '../interfaces/Ticket.interface';

const TOKEN_ADMIN: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmNkYTI0NzFkNTVkMDkxNmZjODQ2MjMiLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU4MDU2NTI3fQ.HHgs_Pnaj-W4BUb7agWdAQZ75PMjt3kbVeAzHX-qZ7s`
const TOKEN_USER1: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmNkYTIzZDFkNTVkMDkxNmZjODQ2MjAiLCJ1c2VybmFtZSI6InVzZXIxIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1ODA1Njk3MX0.WEbOtBj4Ye2a-i8u8SpidxKvkxJmSYQfOuBRt7Op7IY`

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${TOKEN_ADMIN}`
	})
};

@Injectable({
	providedIn: 'root'
})
export class TicketService {
	private urlHost = `http://localhost:3000`;
	private apiEndPoint = `tickets`;

	constructor(private http: HttpClient) { }

	// TODO from backend
	// getTicketsObs(): Observable<Ticket[]> {
	// 	const tickets = of(ticketsData);
	// 	return tickets;
	// }

	// getTicketsObs(): Observable<Ticket[]> {
	// 	const tickets = of(ticketsData);
	// 	return tickets;
	// }

	getTickets(): Observable<ITicketPaginated> {
		const url = `${this.urlHost}/${this.apiEndPoint}/?page=1&limit=20`;
		// TODO request body
		return this.http.get<ITicketPaginated>(url, httpOptions);
	}

	deleteTicket(ticket: ITicket): Observable<ITicket> {
		const url = `${this.urlHost}/${this.apiEndPoint}/${ticket._id}`;
		return this.http.delete<ITicket>(url, httpOptions);
	}

	updateTicketComplete(ticket: ITicket): Observable<ITicket> {
		const url = `${this.urlHost}/${this.apiEndPoint}/${ticket._id}`;
		// TODO request body
		return this.http.put<ITicket>(url, {isCompleted: ticket.isCompleted}, httpOptions);
	}


}
