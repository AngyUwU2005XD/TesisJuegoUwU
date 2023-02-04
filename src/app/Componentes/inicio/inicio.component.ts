import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  implements OnInit
{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router){}
  menu()
  {
     this.router.navigate(['menu']);
  }
}
