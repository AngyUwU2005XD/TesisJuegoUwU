import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegonueve1',
  templateUrl: './juegonueve1.component.html',
  styleUrls: ['./juegonueve1.component.css']
})
export class Juegonueve1Component {
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
     this.router.navigate(['Juegonueve2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegonueve1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
