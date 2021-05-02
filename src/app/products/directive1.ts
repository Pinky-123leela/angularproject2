import {OnInit, Input, Directive, ElementRef} from "@angular/core";
@Directive({
    selector:'[dir1]'
})
export class Directive1 implements OnInit{
    @Input() dir1:string=""
    constructor(private ref:ElementRef){}
    ngOnInit(): void{
        this.ref.nativeElement.classList.add(this.dir1);
    }
}