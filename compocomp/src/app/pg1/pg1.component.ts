import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.component.html',
  styleUrls: ['./pg1.component.css']
})
export class Pg1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
