import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
	@Output() onPageAdd: EventEmitter<IPaginateMetadata> = new EventEmitter();
	@Output() onPageSubtract: EventEmitter<IPaginateMetadata> = new EventEmitter();
  tickets: ITicket[] = [];
  paginationInfo: IPaginateMetadata;
  paginatedTickets: ITicketPaginated;
  showAddTicket: boolean;
  subscription: Subscription;

	faAngleLeft = faAngleLeft
	faAngleRight = faAngleRight

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

	// TODO pagination
	pageSubtract(){
		this.onPageSubtract.emit()
		console.log('Page -1');

	}

	// TODO pagination
	pageAdd(){
		this.onPageAdd.emit()
		console.log('Page +1');

	}

  deleteTicket(ticket: ITicket) {
    this.ticketService.deleteTicket(ticket).subscribe(() => {
      this.tickets = this.tickets.filter((t) => t._id !== ticket._id);
    });
  }

  toggleStatus(ticket: ITicket) {
    ticket.isCompleted = !ticket.isCompleted;
    this.ticketService.updateTicketComplete(ticket).subscribe(() => {
      console.log(`Status updated ${ticket}`);
    });
  }

  addTicket(newTicket: INewTicket) {
    console.log(newTicket);
    this.ticketService.addTicket(newTicket).subscribe((t) => {
      // add new ticket to list
      // TODO how??? get created ticket back from response
      // this.tickets.push(t)
    });
  }

  toggleAddTicket() {
    this.uiService.toggleAddTicket();
  }
}
