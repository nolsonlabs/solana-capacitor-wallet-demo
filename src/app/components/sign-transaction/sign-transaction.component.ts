import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SolanaMobileWallet } from 'solana-mobile-wallet-capacitor';

@Component({
  selector: 'app-sign-transaction',
  templateUrl: './sign-transaction.component.html',
  styleUrls: ['./sign-transaction.component.scss'],
})
export class SignTransactionComponent {

  @Input() request;

  @Output() authorizationClick = new EventEmitter<boolean>();

  authorize(ev) {
    this.authorizationClick.emit(ev);
  }
}
