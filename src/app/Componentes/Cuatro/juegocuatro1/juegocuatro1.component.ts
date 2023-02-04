import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegocuatro1',
  templateUrl: './juegocuatro1.component.html',
  styleUrls: ['./juegocuatro1.component.css']
})
export class Juegocuatro1Component {
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
     this.router.navigate(['Juegocuatro2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegocuatro1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
