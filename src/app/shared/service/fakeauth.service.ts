import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected : boolean = false

  constructor() { }
  login(){
    this.isConnected = true
  }
  logout(){
    this.isConnected = false
  }
}
