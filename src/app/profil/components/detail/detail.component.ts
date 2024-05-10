import { Component } from '@angular/core';
import { FakeauthService } from '../../../shared/service/fakeauth.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  suisJeConnecte! : boolean
  fg! : FormGroup
  listeSeriesArray : AbstractControl[] | null = null


  constructor(private _fakeAuth : FakeauthService, private _builder : FormBuilder ){
    
    this.suisJeConnecte = this._fakeAuth.isConnected
    
    this.fg = this._builder.group({
      nom : [null,[Validators.required]],
      datenaissance : [null,[Validators.min(13),Validators.required]],
      listeseries : this._builder.array([new FormControl(null,[Validators.required])])
    })

    this.listeSeriesArray = this.fg.get('listeseries')?.controls || null
  }
  // getArray() : FormArray{
  //   return this.fg.get('listeseries') as FormArray
  // }
  onSubmit(){
    console.log(this.fg.value)
  }
}
