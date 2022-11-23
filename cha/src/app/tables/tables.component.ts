import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public show:boolean = true;
  public buttonName:any = 'v';

  headers:any=["ID","Name","Department","Role"];
  rows:any=[
      {
        "ID":"1",
        "Name":"Anuraag",
        "Department":"Design",
        "Role":"Manager"
      },
      {
        "ID":"2",
        "Name":"Bala",
        "Department":"Management",
        "Role":"CMO"
      },
      {
        "ID":"3",
        "Name":"Eliza",
        "Department":"Marketing",
        "Role":"Manager"
      },
      {
        "ID":"4",
        "Name":"Himawari",
        "Department":"Technology",
        "Role":"CTO"
      },
      {
        "ID":"5",
        "Name":"Lily",
        "Department":"HR",
        "Role":"CEO"
      },
      {
        "ID":"6",
        "Name":"Linda Maque",
        "Department":"HR",
        "Role":"Intern"
      },
      {
        "ID":"7",
        "Name":"Mukesh",
        "Department":"Technology",
        "Role":"Senior Manager"
      },
      {
        "ID":"8",
        "Name":"Nikilesh",
        "Department":"Logistics",
        "Role":"Manager"
      },
      {
        "ID":"9",
        "Name":"Nandha",
        "Department":"Product Management",
        "Role":"Intern"
      },
      {
        "ID":"10",
        "Name":"Pramothini",
        "Department":"Law and order",
        "Role":"Attorney"
      },
      {
        "ID":"11",
        "Name":"Ramon",
        "Department":"HR",
        "Role":"Employee"
      },
      {
        "ID":"12",
        "Name":"Sanchez",
        "Department":"Marketing",
        "Role":"Employee"
      },
      {
        "ID":"13",
        "Name":"Taekay",
        "Department":"Technology",
        "Role":"Trainer"
      },
      {
        "ID":"14",
        "Name":"Vasuthosh",
        "Department":"Logistics",
        "Role":"Employee"
      },
      {
        "ID":"15",
        "Name":"Yashodha",
        "Department":"Design",
        "Role":"Employee"
      }
    ];
  header4:any=["Task-ID","Task","Department","In Charge"];
  row4:any=[
      {
        "Task-ID":"14231",
        "Task":"New Module Launch",
        "Department":"Product",
        "In Charge":"Ashik Tripati - WFM"
      },
      {
        "Task-ID":"25213",
        "Task":"Project Completion Procedure",
        "Department":"Management",
        "In Charge":"Franzis - Ruby"
      },
      {
        "Task-ID":"50223",
        "Task":"Investor Meet",
        "Department":"Business Development",
        "In Charge":"Vinzero - CEO"
      }
    ];
  header1:any=["tID","Task","Status","Deadline"];
  row1:any=[
  {
    "tID":"3012",
    "Task":"Plan designing for Ramco Constructions",
    "Status":"On-Going",
    "Deadline":"30-nov-22"
  },
  {
    "tID":"3418",
    "Task":"Report generation for LT groups",
    "Status":"On-Going",
    "Deadline":"25-nov-22"
  },
  {
    "tID":"12209",
    "Task":"Brand merch launching at Ahemdabad",
    "Status":"Not Done(expected done by 1-dec-22)",
    "Deadline":"20-nov-22"
  },
  {
    "tID":"878",
    "Task":"Plan designing for Ramco Constructions",
    "Status":"On-Going",
    "Deadline":"30-nov-22"
  },
  {
    "tID":"2213",
    "Task":"Distribution of sample forms to managers",
    "Status":"Done",
    "Deadline":"22-nov-22"
  },
  {
    "tID":"54760",
    "Task":"Intern hiring",
    "Status":"On-Going",
    "Deadline":"30-dec-22"
  },
  {
    "tID":"7122",
    "Task":"Building data collection",
    "Status":"Not Done(expected done by 15-dec-22)",
    "Deadline":"10-nov-22"
  }
  ];

    header2:any=["Client","Location","Delivery","Rating"];
  row2:any=[
  {
    "Client":"EHV",
    "Location":"Chennai",
    "Delivery":"Given",
    "Rating":"4.5"
  },
  {
    "Client":"Trikaal",
    "Location":"Pune",
    "Delivery":"Given",
    "Rating":"4"
  },
  {
    "Client":"Praj",
    "Location":"Dharabi",
    "Delivery":"Yet to Deliver",
    "Rating":"N/A"
  },
  {
    "Client":"Suntech",
    "Location":"Coimbatore",
    "Delivery":"Yet to Deliver",
    "Rating":"N/A"
  },
  {
    "Client":"SKCL",
    "Location":"Ahemdabad",
    "Delivery":"Given",
    "Rating":"4.6"
  },
  {
    "Client":"SACPL",
    "Location":"Vishakapatnam",
    "Delivery":"Given",
    "Rating":"4.5"
  }
  ];
  header3:any=["Constructions","Location","Approach","Need"];
  row3:any=[
  {
    "Constructions":"Ruby",
    "Location":"Chennai",
    "Approach":"Done",
    "Need":"Employee task assignment"
  },
  {
    "Constructions":"Traco",
    "Location":"Manglore",
    "Approach":"Yet to approach",
    "Need":"Workflow Management software"
  },
  {
    "Constructions":"Casa Grand",
    "Location":"Chennai",
    "Approach":"Done",
    "Need":"Product Management report"
  },
  {
    "Constructions":"Navins",
    "Location":"Chennai",
    "Approach":"Yet to approach",
    "Need":"Workflow Management software"
  },
 {
    "Constructions":"Shubham",
    "Location":"Noida",
    "Approach":"On-Going",
    "Need":"Workflow Management, Product Management"
  },
  {
    "Constructions":"SCC",
    "Location":"Ahemdabad",
    "Approach":"Yet to approach",
    "Need":"Product Management report"
  },



  ]

}
