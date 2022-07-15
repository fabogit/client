import { Component, OnInit } from '@angular/core';

import { Ticket, TicketPaginated } from 'src/app/interfaces/Ticket.interface';
import { TicketService } from 'src/app/services/tickets.service';


@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
	tickets: Ticket[] = [];

	constructor(private ticketService: TicketService) { }

	ngOnInit(): void {
		// this.tickets = this.ticketService.getTicketsBeta()
		this.ticketService.getTicketsObs().subscribe((tickets) => this.tickets = tickets);
	}

}
