import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-message',
  templateUrl: './sign-message.component.html',
  styleUrls: ['./sign-message.component.scss'],
})
export class SignMessageComponent {

  @Input() request;

  @Output() authorizationClick = new EventEmitter<boolean>();

  authorize(ev) {
    this.authorizationClick.emit(ev);
  }
}
