import { Component, OnInit, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../Types/user';

const genderType = {
  0: 'Hombre',
  1: 'Mujer'
};

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.data.gender = genderType[this.data.gender];
  }

}
