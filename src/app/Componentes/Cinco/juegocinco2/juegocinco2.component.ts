import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocinco2',
  templateUrl: './juegocinco2.component.html',
  styleUrls: ['./juegocinco2.component.css']
})
export class Juegocinco2Component {
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
     this.router.navigate(['Juegocinco3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegocinco1']);
  }
}
