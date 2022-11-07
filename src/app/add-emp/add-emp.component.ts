import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private empsr:EmployeeService,private log:Router) { }

  ngOnInit(): void {
    console.log(this.empsr.userId);
    console.log(this.empsr.userNmae);
    console.log(this.empsr.stundetlist);

    let username = localStorage.getItem('username');

    console.log(username);
    if(username == null || username == ''){
      this.log.navigateByUrl('/Login')
    }
  }
  empData(empForm:any){

  console.log(empForm.value)
  }
}
