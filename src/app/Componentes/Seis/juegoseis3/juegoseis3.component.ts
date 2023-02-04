import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoseis3',
  templateUrl: './juegoseis3.component.html',
  styleUrls: ['./juegoseis3.component.css']
})
export class Juegoseis3Component {
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
     this.router.navigate(['Juegoseis2']);
  }
}
