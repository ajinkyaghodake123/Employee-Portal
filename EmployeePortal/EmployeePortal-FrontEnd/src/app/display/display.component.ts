import { Component, OnInit } from '@angular/core';
import { RegisterationService } from '../services/registeration.service';
import { DisplayService } from '../services/display.service';
import { RegisterModel } from '../models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  private employeeName : string;
  public showFlag: boolean = true;
  public showEmpList : boolean = false;
  public empModel : RegisterModel
  constructor(
    private displyService: DisplayService,
    private regService: RegisterationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.regService.getEmployeeDetail().subscribe(message => this.employeeName = message)
  }
  

  
  showList() {
    this.displyService.showList().subscribe(
      (response) => {
        console.log("succsess list", response);
        this.empModel = response;
        this.showEmpList = true;
        this.showFlag = false;
      }
    )
    console.log ("name - "+ this.employeeName);
  }

  back() {
    this.router.navigate(['']);
  }
}
