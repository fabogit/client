import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
	@Input() btnText: string;
	@Input() color: string;
	@Output() btnClick = new EventEmitter()

	constructor() { }

	ngOnInit(): void {
	}

	onClick() {
		// console.log(text);
		this.btnClick.emit()
	}

}