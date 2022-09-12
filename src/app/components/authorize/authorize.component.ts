import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
})
export class AuthorizeComponent {

  @Input() request;
  @Output() authorizationClick = new EventEmitter<boolean>();

  authorize(ev) {
    this.authorizationClick.emit(ev);

  }

}
