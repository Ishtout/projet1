import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() listeLien! : Link[]
  
  showChildren(index : number){
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }
}
