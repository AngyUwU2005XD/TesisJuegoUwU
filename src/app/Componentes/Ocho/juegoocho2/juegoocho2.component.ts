import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoocho2',
  templateUrl: './juegoocho2.component.html',
  styleUrls: ['./juegoocho2.component.css']
})
export class Juegoocho2Component {
  constructor(private router: Router){}
  correcto: any;
  ngOnInit():void{
    this.correcto;
  }
  menu()
  {
     this.router.navigate(['menu']);
  }
  Juegouno3()
  {
     this.router.navigate(['Juegoocho3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegoocho1']);
  }
}
