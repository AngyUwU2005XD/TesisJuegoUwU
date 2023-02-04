import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegosiete1',
  templateUrl: './juegosiete1.component.html',
  styleUrls: ['./juegosiete1.component.css']
})
export class Juegosiete1Component {
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
     this.router.navigate(['Juegosiete2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegosiete1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
