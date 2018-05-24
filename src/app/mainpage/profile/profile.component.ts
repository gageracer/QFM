import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  /*public parent: string;
  Puser: User;
  Manager = new User('Yaşar', 'Şahin', 1, '1234', 'yguneri@mail.com');
  Alumni = new User('Sami', 'Şen', 2, '1234', 'samisen@mail.com');
  Smentee = new User('Alperen', 'Saylam', 4, '1234', 'alpsaylam@mail.com');
  Smentor = new User('Can', 'Aygın', 3, '1234', 'canliheyecanlin@mail.com');
  Smentoree = new User('Solid', 'Snake', 5, '1234', 'snaaaaake@mail.com');*/
  constructor() { }

  ngOnInit() {
    /*this.parent = String(window.location.pathname);*/
  }

/*   if (parent = '/QFM/manager') {
    this.Puser = this.Manager;
    }
  if (parent = '/QFM/alumni') {
      this.Puser = this.Alumni;
    }
  if (parent = '/QFM/smentee') {
      this.Puser = this.Smentee;
    }
  if (parent = '/QFM/smentor') {
      this.Puser = this.Smentor;
    }
  if (parent = '/QFM/smentoree') {
      this.Puser = this.Smentoree;
    } */

}
