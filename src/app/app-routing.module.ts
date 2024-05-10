import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './profil/components/demo/demo.component';
import { Demo1Component } from './profil/components/demo1/details.component';
import { ConnexionComponent } from './profil/components/connexion/connexion.component';
import { DetailComponent } from './profil/components/detail/detail.component';


const routes: Routes = [
  {path : "Demo",component : DemoComponent,children : [{path : "connexion", component : ConnexionComponent},
                                                       {path : "detail",component : DetailComponent}
  ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
