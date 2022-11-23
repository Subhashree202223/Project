import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-report',
  templateUrl: './existing-report.component.html',
  styleUrls: ['./existing-report.component.css']
})
export class ExistingReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    public saveas() {
      alert("Hi");

    }
  }
