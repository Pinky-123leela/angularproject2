import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'counter',
    template: `<div>
    <p>
    Count is {{count}}
    </p>
    <button (click)="increment()">Click here</button>
    
    
    </div>`
})
export class CounterComponent{
    @Input() count:number=0;
    @Output() countChnage:EventEmitter<number> =new EventEmitter

    increment(){
        this.count++;
        this.countChnage.emit(this.count);

    }


}