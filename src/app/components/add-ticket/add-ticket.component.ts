import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';
import { INewTicket, ITicket } from 'src/app/interfaces/Ticket.interface';

@Component({
	selector: 'app-add-ticket',
	templateUrl: './add-ticket.component.html',
	styleUrls: ['./add-ticket.component.css'],
})
export class AddTicketComponent implements OnInit {
	// TODO interface ITicket["description"] ? ITicket ?
	@Output() onAddTicket: EventEmitter<INewTicket> = new EventEmitter();
	description: string;
	showAddTicket: boolean;
	subscription: Subscription;

	constructor(private uiService: UiService) {
		this.subscription = this.uiService
			.onToggle()
			.subscribe((value) => (this.showAddTicket = value));
	}

	ngOnInit(): void { }

	onSubmit() {
		if (!this.description) {
			alert('Please add a description');
			return;
		}

		const newTicket: INewTicket = {
			description: this.description,
		};
		// TODO fix emit
		this.onAddTicket.emit(newTicket);

		this.description = '';
	}
}
