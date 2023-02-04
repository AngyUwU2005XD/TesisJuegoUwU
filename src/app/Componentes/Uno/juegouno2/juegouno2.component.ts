import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegouno2',
  templateUrl: './juegouno2.component.html',
  styleUrls: ['./juegouno2.component.css']
})
export class Juegouno2Component {
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
     this.router.navigate(['Juegouno3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegouno1']);
  }
}
