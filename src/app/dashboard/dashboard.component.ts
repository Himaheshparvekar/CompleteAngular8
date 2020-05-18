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

    Clients:string[];
    Projects: string[];
    Years:number[]=[]
    TeamMemberSummary=[];
    TeamMembers=[];




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

    this.Clients=[
      "Mahesh pvt ltd",
      "Umesh pvt ltd",
      "Tanishka pvt ltd"
    ];
    this.Projects=[
                  "Angular Project","Core Project","Node Project","Mongo Project"];

    for(var i = 2010 ; i<=2020; i++)
    {
      this.Years.push(i);
    }


    this.TeamMemberSummary= [
    {Region: "East", TeamMembersCount:20, TemporaryUnavailableMembers:11},
    {Region: "WEST", TeamMembersCount:11, TemporaryUnavailableMembers:4},
    {Region: "North", TeamMembersCount:55, TemporaryUnavailableMembers:55},
    {Region: "South", TeamMembersCount:99, TemporaryUnavailableMembers:100}
]
    

this.TeamMembers=[
{Region:"East" , Members:[
{ID:1 , Name: "Ford" ,Status:"Available"},
{ID:1 , Name: "Toyota" ,Status:"Available"},
{ID:1 , Name: "Fiat" ,Status:"UnAvailable"}
]   },

{Region:"West" , Members:[
  {ID:1 , Name: "Maruti" ,Status:"Available"},
  {ID:1 , Name: "Padmini" ,Status:"Available"},
  {ID:1 , Name: "Mahindra" ,Status:"UnAvailable"}
  ]},

  {Region:"South" , Members:[
    {ID:1 , Name: "Lamborgini" ,Status:"Available"},
    {ID:1 , Name: "Skoda" ,Status:"Available"},
    {ID:1 , Name: "Opel" ,Status:"UnAvailable"}
    ]},

    {Region:"North" , Members:[
      {ID:1 , Name: "BMW" ,Status:"Available"},
      {ID:1 , Name: "Mercedez" ,Status:"Available"}     
      ]}

];
  }

  onProjectChanged($event)
  {
    console.log($event.target.innerHTML);
    if($event.target.innerHTML=="Core Project")
    {
      this.ProjectCost = 50;
      this.CurrentExpenditure = 50;
      this.AvailableFunds = 5000000;
    }

    if($event.target.innerHTML=="Angular Project")
    {
      this.ProjectCost = 10;
      this.CurrentExpenditure = 10;
      this.AvailableFunds = 888888888;
    }



    else if($event.target.innerHTML=="Node Project")
    {
      this.ProjectCost = 100;
      this.CurrentExpenditure = 100;
      this.AvailableFunds = 1000000;
    }

    else if($event.target.innerHTML=="Mongo Project")
    {
      this.ProjectCost = 900;
      this.CurrentExpenditure = 900;
      this.AvailableFunds = 900000;
    }


  }

}
