import { Component, OnInit } from '@angular/core';

import { Ticket, TicketPaginated } from 'src/app/interfaces/Ticket.interface';
import { TICKETS } from 'src/app/data/mock-data';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
	tickets: Ticket[] = TICKETS.tickets;

	constructor() { }

	ngOnInit(): void {
	}

}
