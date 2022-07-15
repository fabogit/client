import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Ticket, TicketPaginated } from '../interfaces/Ticket.interface';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class TicketService {

	private apiUrl = 'http://localhost:3000/tickets'

	constructor(private http: HttpClient) { }

	// TODO from backend
	getTasks(): Observable<TicketPaginated[]>{
		return this.http.get<TicketPaginated[]>(this.apiUrl)
	}

	deleteTicket(ticket: Ticket): Observable<Ticket> {
		const url = `${this.apiUrl}/${ticket._id}`;
		return this.http.delete<Ticket>(url);
	}

	updateTicketStatus(ticket: Ticket): Observable<Ticket> {
		const url = `${this.apiUrl}/${ticket._id}`;
		return this.http.put<Ticket>(url, ticket, httpOptions);
	}
}
