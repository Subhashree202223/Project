import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
// import * as pdfMake from "pdfmake/build/pdfmake";  
// import * as pdffonts from "pdfmake/build/vfs_fonts";  
// declare var require: any;
// const htmlToPdfmake = require("html-to-pdfmake");
// (<any>pdfMake).vfs = pdffonts.pdfMake.vfs;

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  constructor() { }
  // public sidebarShow: boolean = true;
  // public bName:any = 'X';
   ngOnInit(): void {
   }

    // @ViewChild('pdfTable')
    // pdfTable!: ElementRef;
  
    public saveas() {
      alert("Hi");
    // const pdfTable = this.pdfTable.nativeElement;
    // var html = htmlToPdfmake(pdfTable.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download(); 
     
    }
  }