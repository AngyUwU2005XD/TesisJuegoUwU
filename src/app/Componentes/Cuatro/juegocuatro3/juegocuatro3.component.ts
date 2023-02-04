import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocuatro3',
  templateUrl: './juegocuatro3.component.html',
  styleUrls: ['./juegocuatro3.component.css']
})
export class Juegocuatro3Component {
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
     this.router.navigate(['Juegocuatro2']);
  }
}
