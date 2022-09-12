import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  public request$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

}
