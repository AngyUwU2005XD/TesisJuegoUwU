import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegosiete3',
  templateUrl: './juegosiete3.component.html',
  styleUrls: ['./juegosiete3.component.css']
})
export class Juegosiete3Component {
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
     this.router.navigate(['Juegosiete2']);
  }
}
