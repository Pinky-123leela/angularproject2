import { Directive, ElementRef, HostListener, Renderer2} from "@angular/core";
@Directive({
    selector:"[dir3]"

})

export class Directive3{
    private selected=false
    constructor(private el:ElementRef,private renderer:Renderer2){}
    ngOnInit(){}
    @HostListener('click')
    private onClick(){
        this.selected=!this.selected
        if(this.selected)
        {
            this.el.nativeElement.classList.add('toggle')
        }
        else{
            this.el.nativeElement.classList.remove('toggle')
        }
    }
}