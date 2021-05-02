import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTitle=true
  title = 'OnlinePizza';
  Celsius:number=0
  Farenheit:number=0
  productname = 'keyboard'
  email:string=""

  display(){
    console.log("hello")
  }
}
