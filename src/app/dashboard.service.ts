import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getTeamMembersSummary():any
  {
    var TeamMembersSummary= [
      {Region: "East", TeamMembersCount:20, TemporarilyUnavailableMembers:11},
      {Region: "WEST", TeamMembersCount:11, TemporarilyUnavailableMembers:4},
      {Region: "North", TeamMembersCount:55, TemporarilyUnavailableMembers:55},
      {Region: "South", TeamMembersCount:99, TemporarilyUnavailableMembers:100}
  ];
  return TeamMembersSummary;
  }
}
