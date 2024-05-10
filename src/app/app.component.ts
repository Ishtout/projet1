import { Component } from '@angular/core';
import { Link } from './shared/models/link.model';
import { FakeauthService } from './shared/service/fakeauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projet1';
  LienDeLapp : Link[] = [
    {url : 'Demo',name : 'Profil',children : [{url : 'Demo/connexion',name : 'Connexion au profil'},
                                              {url : 'Demo/detail',name : 'Detail profil'}
    ]}


    
  ]
}
