import { Component, OnInit } from '@angular/core';
import { RegisterationService } from '../services/registeration.service';
import { DisplayService } from '../services/display.service';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  private employeeName : string
  constructor(
    private displyService: DisplayService,
    private regService: RegisterationService,
    
  ) { }

  ngOnInit() {
    this.regService.getEmployeeDetail().subscribe(message => this.employeeName = message)
  }
  public showEmpList : boolean = false;
  public empModel : RegisterModel

  
  showList() {
    this.displyService.showList().subscribe(
      (response) => {
        console.log("succsess list", response);
        this.empModel = response;
        this.showEmpList = true;
      }
    )
    console.log ("name - "+ this.employeeName);
  }
}
