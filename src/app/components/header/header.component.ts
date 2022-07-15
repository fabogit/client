import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

	register() {
		console.log('register');
	}

	login() {
		console.log('log in');
	}
	logout() {
		console.log('log out');
	}

	showTickets(){
		console.log('tickets');
	}
}
