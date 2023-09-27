import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'paytech-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: string = 'button';
	@Output() buttonClick = new EventEmitter();
	@Input() isDisabled = false;

	constructor() {}

	onClick() {
		this.buttonClick.emit();
	}
}
