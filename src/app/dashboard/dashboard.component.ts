import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    Designation: String;
    Username: String;
    NoOfTeamMembers: Number;
    TotalCostOfAllProjects: Number;
    PendingTasks: Number;
    UpComingProjects: Number;
    ProjectCost: Number;
    CurrentExpenditure: Number;
    AvailableFunds: Number;

  constructor() { }

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "My Twin Flame";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

  }

}
