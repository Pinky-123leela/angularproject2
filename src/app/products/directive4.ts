import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";
 
@Directive({
 
    selector:'[dir4]'
})
 
export class Directive4{
 
    @Input() toolTip!:string;
 
    elTootip:any
 
    constructor(private el:ElementRef,private renderer:Renderer2){}
    
    @HostListener('mouseenter')
    public onMouseEnter(){
        if(!this.elTootip){this.showHint()}
 
    }
    @HostListener('mouseleave')
    public onMouseLeave(){
        if(this.elTootip){this.removeHint()}
 
    }
    showHint(){
 
        this.elTootip =this.renderer.createElement('span')
        const text =  this.renderer.createText(this.toolTip)
        this.renderer.appendChild(this.elTootip,text)
      
         this.renderer.appendChild(document.body,this.elTootip)
         this.renderer.addClass(this.elTootip,'tooltip1')
 
         let hostPos = this.el.nativeElement.getBoundingClientRect()
         let tooltipPos = this.elTootip.getBoundingClientRect()
 
         let top=hostPos.bottom+10
         let left = hostPos.left
 
         this.renderer.setStyle(this.elTootip,'top',`${top}px`)
         console.log(top+""+left)
         this.renderer.setStyle(this.elTootip,'left',`${left}px`)
 
    }
 
    removeHint(){
        this.renderer.removeClass(this.elTootip,'tooltip1')
        this.renderer.removeChild(document.body,this.elTootip)
        this.elTootip = null
    }
 
}