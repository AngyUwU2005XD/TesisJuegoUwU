import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegodos2',
  templateUrl: './juegodos2.component.html',
  styleUrls: ['./juegodos2.component.css']
})
export class Juegodos2Component {
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
     this.router.navigate(['Juegodos3']);
  }
  Juegouno1()
  {
     this.router.navigate(['Juegodos1']);
  }
}
