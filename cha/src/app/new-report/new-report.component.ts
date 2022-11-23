import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdffonts from "pdfmake/build/vfs_fonts";
// declare var require: any;
// const htmlToPdfmake = require("html-to-pdfmake");
// (<any>pdfMake).vfs = pdffonts.pdfMake.vfs;
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {
  @ViewChild('content',{static:false}) el!: ElementRef
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


      saveas(){
        let data = document.getElementById("content")
        this.generatePDF(data);
      }

      generatePDF(data) {
        // let pdf = new jsPDF()
        let pdf = new jsPDF('l','mm',[900, 1300]);
        pdf.html(this.el.nativeElement, {callback:(pdf) => {
          pdf.save("sampleReport.pdf");}})
        // html2canvas(data).then(canvas => {
        //   let imgWidth = 1000;
        //   let imgHeight = (canvas.height * imgWidth/canvas.width)
          // const contentDataURL = canvas.toDataURL('image/png')

          // var position = 10;
          // pdf.addImage(contentDataURL.'PNG',0,position,imgWidth,imgHeight);
          // pdf.save('Report.pdf');

        // })
      }
    }
    // const pdfTable = this.pdfTable.nativeElement;
    // var html = htmlToPdfmake(pdfTable.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download();
