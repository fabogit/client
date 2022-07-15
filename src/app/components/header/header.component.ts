import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	in = 'loggin user in';
	out = 'loggin user out';

  constructor() { }

  ngOnInit(): void {
  }

	login() {
		console.log(this.in);
	}
	logout() {
		console.log(this.out);
	}
}
