import { Component, OnInit } from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent{
  num:number=0;
  title:string="Customer list";
  customers!:Customer[];
  show:boolean=true;
  buttonName :string ="Show";
  color:string='';
  //property binding
  isDisabled:boolean=false;
  ngOnInit(){
    this.customers =[{id:1,name:"leela",email:"leela@gmail.com",mobileNumber:"9704428707"},
    {id:1,name:"leela",email:"leela@gmail.com",mobileNumber:"9704428707"},
    {id:1,name:"leela",email:"leela@gmail.com",mobileNumber:"9704428707"},
    {id:1,name:"leela",email:"leela@gmail.com",mobileNumber:"9704428707"}];
  }
showTable(){
  this.show = !this.show;
  if(this.show)
  {
  this.buttonName='hide';
  }
  else{
    this.buttonName='show';
  }
    }
      }



  


