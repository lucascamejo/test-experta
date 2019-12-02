import { Component, OnInit } from '@angular/core';
import { User } from '../Types/user';
import { UserService } from '../user.service';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = new Array();  
  message: any;

  constructor(private service: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listUsers();
  }

  public listUsers() {
    this.service.getUsersService().subscribe((data: any[])=>{
      this.users = data;
      this.message = data !== null ? 'Agregado correctamente ...' : 'No se pudo agregar el usuario ...';
    })  

    //let resp = this.service.getUsersService();
    //this.message = 'Añadido correctamente!'
    //resp.subscribe((data)=>this.message=data); 
    //resp.subscribe((data) =>{ {this.users} = data});
  }  

  public deleteUser(user: User) {
    this.service.deleteUsersService(user).subscribe( (data: any[]) => {
      this.users = data;
    })
  }

  public showUser(user: User) {
    this.dialog.open(DialogComponent, {data: user});
  }

}


