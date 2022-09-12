import { Component } from '@angular/core';

import { AppstateService } from '../services/appstate.service';

import { SolanaMobileWallet } from 'solana-mobile-wallet-capacitor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public appState: AppstateService) {}

  authorize(ev) {
    SolanaMobileWallet.userConfirmation({ authorized: ev });
  }

}
