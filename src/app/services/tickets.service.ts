import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Ticket, TicketPaginated } from '../interfaces/Ticket.interface';
import { TICKETS } from '../data/mock-data';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

const ticketsData: Ticket[] = TICKETS.tickets!;

@Injectable({
	providedIn: 'root'
})
export class TicketService {



	constructor() { }

	// TODO from backend

	getTicketsBeta(): Ticket[] {
		return ticketsData;
		// const tickets = of(ticketsData);
		// return tickets;
	}
	getTicketsObs(): Observable<Ticket[]> {
		const tickets = of(ticketsData);
		return tickets;
	}

	// getTickets(): Observable<TicketPaginated[]> {
	// 	return this.http.get<TicketPaginated[]>(this.apiUrl);
	// }

}
