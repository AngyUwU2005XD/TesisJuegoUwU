import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoseis1',
  templateUrl: './juegoseis1.component.html',
  styleUrls: ['./juegoseis1.component.css']
})
export class Juegoseis1Component {
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
     this.router.navigate(['Juegoseis2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegoseis1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
