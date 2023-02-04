import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocuatro2',
  templateUrl: './juegocuatro2.component.html',
  styleUrls: ['./juegocuatro2.component.css']
})
export class Juegocuatro2Component {
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
     this.router.navigate(['Juegocuatro3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegocuatro1']);
  }
}
