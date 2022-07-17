import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';

import {
  INewTicket,
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
  showAddTicket: boolean;
  subscription: Subscription;

  constructor(
    private ticketService: TicketService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTicket = value));
  }

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
    ticket.isCompleted = !ticket.isCompleted;
    this.ticketService.updateTicketComplete(ticket).subscribe(() => {
      // TODO log
      console.log(`Status updated ${ticket}`);
    });
  }

  addTicket(newTicket: INewTicket) {
    console.log(newTicket);
    this.ticketService.addTicket(newTicket).subscribe((t) => {
      // add new ticket to list
      // TODO how???
      // this.tickets.push(t)
    });
  }

  toggleAddTicket() {
    this.uiService.toggleAddTicket();
  }
}
