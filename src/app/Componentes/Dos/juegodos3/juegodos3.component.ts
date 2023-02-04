import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegodos3',
  templateUrl: './juegodos3.component.html',
  styleUrls: ['./juegodos3.component.css']
})
export class Juegodos3Component {
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
