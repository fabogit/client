import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ITicket } from 'src/app/interfaces/Ticket.interface';

@Component({
	selector: 'app-ticket-item',
	templateUrl: './ticket-item.component.html',
	styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {
	@Input() ticket: ITicket;
	@Output() onDeleteTicket: EventEmitter<ITicket> = new EventEmitter();
	@Output() onToggleCompleted: EventEmitter<ITicket> = new EventEmitter();
	faTimes = faTimes;

	constructor() { }

	ngOnInit(): void {
	}

	onDelete(ticket: ITicket) {
		this.onDeleteTicket.emit(ticket)
		// TODO log
		console.log(`delete ${ticket._id}`);
	}

	// TODO log
	onToggle(ticket: ITicket) {
		this.onToggleCompleted.emit(ticket)
		console.log(`status ${ticket.isCompleted}`);
	}
}
