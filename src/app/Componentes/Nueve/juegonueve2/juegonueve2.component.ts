import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegonueve2',
  templateUrl: './juegonueve2.component.html',
  styleUrls: ['./juegonueve2.component.css']
})
export class Juegonueve2Component {
  constructor(private router: Router){}
  correcto: any;
  ngOnInit():void{
    this.correcto;
  }
  menu()
  {
     this.router.navigate(['menu']);
  }
  Juegouno3()
  {
     this.router.navigate(['Juegonueve3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegonueve1']);
  }
}
