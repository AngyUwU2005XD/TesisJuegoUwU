import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegotres2',
  templateUrl: './juegotres2.component.html',
  styleUrls: ['./juegotres2.component.css']
})
export class Juegotres2Component {
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
     this.router.navigate(['Juegotres3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegotres1']);
  }
}
