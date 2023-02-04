import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegoocho3',
  templateUrl: './juegoocho3.component.html',
  styleUrls: ['./juegoocho3.component.css']
})
export class Juegoocho3Component {
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
     this.router.navigate(['Juegoocho2']);
  }
}
