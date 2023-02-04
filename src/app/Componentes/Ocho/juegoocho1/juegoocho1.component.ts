import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoocho1',
  templateUrl: './juegoocho1.component.html',
  styleUrls: ['./juegoocho1.component.css']
})
export class Juegoocho1Component {
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
     this.router.navigate(['Juegoocho2']);
  }
  Juegodos1()
  {
     this.router.navigate(['Juegoocho1']);
  }
  correcto1()
  {
    localStorage.setItem('correcto', this.correcto);
  }
}
