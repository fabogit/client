import { Component, OnInit } from '@angular/core';

import {
  IPaginateMetadata,
  ITicket,
  ITicketPaginated,
} from 'src/app/interfaces/Ticket.interface';
import { TicketService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  tickets: ITicket[] = [];
  paginationInfo: IPaginateMetadata;
  paginatedTickets: ITicketPaginated;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    // this.tickets = this.ticketService.getTicketsBeta()
    // this.ticketService.getTicketsObs().subscribe((tickets) => this.tickets = tickets);
    this.ticketService.getTickets().subscribe((pagTickets) => {
      // set data
			this.paginatedTickets = pagTickets;
      this.tickets = pagTickets.tickets;
      this.paginationInfo = pagTickets.pagination;
    });
  }

  deleteTicket(ticket: ITicket) {
    this.ticketService.deleteTicket(ticket).subscribe(() => {
      this.tickets = this.tickets.filter((t) => t._id !== ticket._id);
    });
  }

	toggleStatus(ticket: ITicket) {
    ticket.isCompleted = !ticket.isCompleted
		this.ticketService.updateTicketComplete(ticket).subscribe(
			()=>{
				// TODO log
				console.log(`Status updated ${ticket}`);
			}
		)
  }
}
