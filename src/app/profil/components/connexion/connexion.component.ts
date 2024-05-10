import { Component } from '@angular/core';
import { FakeauthService } from '../../../shared/service/fakeauth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  suisJeConnecte! : boolean


  constructor(private _fakeAuth : FakeauthService)
  {
    this.suisJeConnecte = _fakeAuth.isConnected
  }

  meConnecter(){
    this._fakeAuth.login()
    this.suisJeConnecte = this._fakeAuth.isConnected
  }
  meDeconnecter(){
    this._fakeAuth.logout()
    this.suisJeConnecte = this._fakeAuth.isConnected
  }
}
