import {Component} from "@angular/core";
import {Product} from './Product';

@Component({
  selector:"prod-list",
  templateUrl:'./product-list.component.html'
})
export class  ProductListComponent{
  //property binding
  num:number=0;
  title:string="Product list";
  products!:Product[];
  show:boolean=true;
  buttonName :string ="Show";
  color:string='';
  //property binding
  isDisabled:boolean=false;
  ngOnInit(){
    this.products =[{id:1,description:"books",cost:40,stock:50},
    {id:1,description:"books",cost:40,stock:50},
    {id:1,description:"books",cost:40,stock:50},
    {id:1,description:"books",cost:40,stock:50}];
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



  
