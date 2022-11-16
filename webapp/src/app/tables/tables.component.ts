import { Component, OnInit } from '@angular/core';
//import { employee1Data } from './employee1.json';

interface employee {  
    id: Number;  
    name: String;  
    email: String;  
    gender: String;
    department: String;  
}  

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee =
  [  
  {  
    "id": 2401,  
    "name": "Aadithya Chathuri",  
    "email": "aadhi.thya@gmail.com",  
    "gender": "Male",
    "department": "Design"
  },  
    {  
    "id": 2602,  
    "name": "Bala Subramanian",  
    "email": "bala32@gmail.com",  
    "gender": "Male",
    "department": "AI"
  },  
    {  
    "id": 2403,  
    "name": "Dhanur Ram",  
    "email": "dhan6@gmail.com",  
    "gender": "Male",
    "department": "Design"
  },  
    {  
    "id": 2604,  
    "name": "Hitari Mina",  
    "email": "hitari@gmail.com",  
    "gender": "Female",
    "department": "AI"
  },  
    {  
    "id": 2505,  
    "name": "Viruksha Tanur",  
    "email": "viru34551@gmail.com",  
    "gender": "Female",
    "department": "Design"
  }
  ];
}
