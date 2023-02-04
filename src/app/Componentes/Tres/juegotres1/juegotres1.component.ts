import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegotres1',
  templateUrl: './juegotres1.component.html',
  styleUrls: ['./juegotres1.component.css']
})
export class Juegotres1Component {
  constructor(private router: Router){}
  correcto: any;
  ngOnInit():void{
    this.correcto;
  }
  menu()
  {
     this.router.navigate(['menu']);
  }
  Juegodos2()
  {
     this.router.navigate(['Juegotres2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegotres1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
