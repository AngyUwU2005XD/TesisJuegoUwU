import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegosiete2',
  templateUrl: './juegosiete2.component.html',
  styleUrls: ['./juegosiete2.component.css']
})
export class Juegosiete2Component {
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
     this.router.navigate(['Juegosiete3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegosiete1']);
  }
}
