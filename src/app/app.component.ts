import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

import { SolanaMobileWallet } from 'solana-mobile-wallet-capacitor';

import { AppstateService } from './services/appstate.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public appState: AppstateService,
    private ngZone: NgZone,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if (this.platform.is('capacitor')) {
        const urlOpen = await App.getLaunchUrl();

        if(!urlOpen || !urlOpen.url) { return; };


        SolanaMobileWallet.addListener('incomingRequest', (notification) => {
          // Include in Angular change detection context
          this.ngZone.run(() => {
            // Authorize request
            if (notification.requestType === 'AuthorizeDapp') {
                this.appState.request$.next(notification);
            }

            // Sign Payloads
            if (notification.requestType === 'SignPayloads') {
              this.appState.request$.next(notification);
            }

            // Sign & Send transactions
            if (notification.requestType === 'SignAndSendTransactions') {
              this.appState.request$.next(notification);
            }
        });
        });
        SolanaMobileWallet.processLaunch({ uri: urlOpen.url });
      }
  });
}

}
