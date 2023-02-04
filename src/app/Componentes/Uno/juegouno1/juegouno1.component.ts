import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegouno1',
  templateUrl: './juegouno1.component.html',
  styleUrls: ['./juegouno1.component.css']
})
export class Juegouno1Component {
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
     this.router.navigate(['Juegouno2']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegouno1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
