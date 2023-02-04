import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoseis2',
  templateUrl: './juegoseis2.component.html',
  styleUrls: ['./juegoseis2.component.css']
})
export class Juegoseis2Component {
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
     this.router.navigate(['Juegoseis3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegoseis1']);
  }
}
