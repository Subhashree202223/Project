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
   header:any=["Unit","Employee","Work","Salary-Status","Attendance"];
   rows:any=[
       {
         "Unit":"Guwahati",
         "Employee":"Ravi Takur",
         "Work":"Site Manager",
         "Salary-Status":"Received",
         "Attendance":"98%"
       },
       {
         "Unit":"Chennai",
         "Employee":"Ganesh Murugan",
         "Work":"Reporting Manager",
         "Salary-Status":"Received",
         "Attendance":"78%"
       },{
         "Unit":"Guwahati",
         "Employee":"Thilak Mehta",
         "Work":"Logistics",
         "Salary-Status":"Not Received",
         "Attendance":"55%"
       },{
         "Unit":"Chennai",
         "Employee":"Fazil Hassan",
         "Work":"Product Development",
         "Salary-Status":"Not Received",
         "Attendance":"87%"
       },{
         "Unit":"Guwahati",
         "Employee":"Arjun Rao",
         "Work":"Site Manager",
         "Salary-Status":"Received",
         "Attendance":"90%"
       },
       {
         "Unit":"Chennai",
         "Employee":"Ram Raghuvardhan",
         "Work":"Business Developer",
         "Salary-Status":"Not Received",
         "Attendance":"68%"
       },{
         "Unit":"Chennai",
         "Employee":"Harish Kumar",
         "Work":"Site Manager",
         "Salary-Status":"Received",
         "Attendance":"80%"
       }
     ];
    // @ViewChild('pdfTable')
    // pdfTable!: ElementRef;

    saveas() {
      alert("Downloading this report as PDF");}
    loadbargraph(){
      alert("Yes");
    }
    // const pdfTable = this.pdfTable.nativeElement;
    // var html = htmlToPdfmake(pdfTable.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download();

    }
