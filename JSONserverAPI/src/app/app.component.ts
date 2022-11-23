import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent onInit {
  title = 'JSONserverAPI';
  constructor(private rs: RestService){}
  columns = ["ID","Name","Department","Role"];

  index = ["ID","Name","Department","Role"];

  users : Users[]=[];
  ngOnInit():void{
    this.rs.getUsers().subscribe(
      (response)=>
      {
        this.users=response;
      },
      (error)=>
      {
        console.log("Error: "+error);
      }
    )

  }
}
