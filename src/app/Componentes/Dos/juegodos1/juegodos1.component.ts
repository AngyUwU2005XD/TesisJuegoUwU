import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegodos1',
  templateUrl: './juegodos1.component.html',
  styleUrls: ['./juegodos1.component.css']
})
export class Juegodos1Component {
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
     this.router.navigate(['Juegodos2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegodos1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
