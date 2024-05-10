import { Component } from '@angular/core';
import { FakeauthService } from '../../../shared/service/fakeauth.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class Demo1Component {

  suisJeConnecte! : boolean
  fg! : FormGroup
  getArray() : FormArray{
    return this.fg.get('listeseries') as FormArray
  }


  constructor(private _fakeAuth : FakeauthService, private _builder : FormBuilder ){

    this.suisJeConnecte = _fakeAuth.isConnected

    this.fg = _builder.group({
      nom : [null,[Validators.required]],
      datenaissance : [null,[Validators.min(13),Validators.required]],
      listeseries : this.getArray().push(new FormControl(null,[Validators.required]))
    })

  }
  onSubmit(){
    console.log(this.fg.value)
  }




  

}
