import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  isAlumniMentorCollapsed = true;
  isSeniorMentorCollapsed = true;
  isMatchCollapsed = true;
  isSeniorMenteeCollapsed = true;
  isUMatchSMenteeCollapsed = true;
  isUMatchAlumniCollapsed = true;
  isUMatchFreshmenCollapsed = true;
  isUMatchSMentorCollapsed = true;
  constructor() { }

  ngOnInit() {
  }


}
