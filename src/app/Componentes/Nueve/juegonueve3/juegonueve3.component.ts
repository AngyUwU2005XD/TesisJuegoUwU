import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegonueve3',
  templateUrl: './juegonueve3.component.html',
  styleUrls: ['./juegonueve3.component.css']
})
export class Juegonueve3Component {
  constructor(private router: Router){}
  correcto: any;
  ngOnInit():void{
    this.correcto;
  }
  menu()
  {
     this.router.navigate(['menu']);
  }
  Juegotres2()
  {
     this.router.navigate(['Juegonueve2']);
  }
}
