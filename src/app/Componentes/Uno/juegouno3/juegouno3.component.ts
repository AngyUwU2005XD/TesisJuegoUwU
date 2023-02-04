import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegouno3',
  templateUrl: './juegouno3.component.html',
  styleUrls: ['./juegouno3.component.css']
})
export class Juegouno3Component {
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
}
