import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocinco1',
  templateUrl: './juegocinco1.component.html',
  styleUrls: ['./juegocinco1.component.css']
})
export class Juegocinco1Component {
  constructor(private router: Router){}
  correcto: any;
  ngOnInit():void{
    this.correcto;
  }
  menu()
  {
     this.router.navigate(['menu']);
  }
  Juegodos2()
  {
     this.router.navigate(['Juegocinco2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegocinco1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
