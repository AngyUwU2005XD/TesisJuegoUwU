import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegotres3',
  templateUrl: './juegotres3.component.html',
  styleUrls: ['./juegotres3.component.css']
})
export class Juegotres3Component {
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
     this.router.navigate(['Juegotres2']);
  }
}
