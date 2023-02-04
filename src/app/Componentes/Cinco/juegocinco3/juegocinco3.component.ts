import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocinco3',
  templateUrl: './juegocinco3.component.html',
  styleUrls: ['./juegocinco3.component.css']
})
export class Juegocinco3Component {
  constructor(private router: Router){}
  correcto: any;
  ngOnInit():void{
    this.correcto;
  }
  menu()
  {
     this.router.navigate(['menu']);
  }
  Juegouno2()
  {
     this.router.navigate(['Juegocinco2']);
  }
}
