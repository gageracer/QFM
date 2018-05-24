import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  isMessageCollapsed1 = true;
  isMessageCollapsed2 = true;
  isMessageCollapsed3 = true;
  isSMessageCollapsed1 = true;
  isSMessageCollapsed2 = true;
  isSMessageCollapsed3 = true;

  constructor() { }

  ngOnInit() {
  }

}
