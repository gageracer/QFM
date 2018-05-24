import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = false;
  isChangePassCollapsed = true;
  constructor(config: NgbDropdownConfig) {
    config.autoClose = false;
   }

  ngOnInit() {
  }

}
