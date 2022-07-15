import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Ticket } from 'src/app/interfaces/Ticket.interface';

@Component({
	selector: 'app-ticket-item',
	templateUrl: './ticket-item.component.html',
	styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {
	faTimes = faTimes;
	@Input() ticket: Ticket;

	constructor() { }

	ngOnInit(): void {
	}

}
