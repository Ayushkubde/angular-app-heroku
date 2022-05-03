import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Products } from './modals/products';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  //instance of the object for trigerring and listening something
  subject = new Subject();
  constructor() { }

  sendMsg(product) {
    //trigerring an event   
    this.subject.next(product);
  }
  getMsg() {
    return this.subject.asObservable();
  }


}
