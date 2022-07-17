import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UiService {
	private showAddTicket: boolean = false;
	private subject = new Subject<any>();

	constructor() { }

	// call on click
	toggleAddTicket() {
		// console.log('toggleAddTicket');

		this.showAddTicket = !this.showAddTicket;
		this.subject.next(this.showAddTicket);
	}

	// to do when clicked subscribe to this
	onToggle(): Observable<any> {
		return this.subject.asObservable();
	}
}
