import {Directive,ViewContainerRef,TemplateRef,Input} from '@angular/core'
@Directive({
 
    selector:'[dir2]'
})
 
export class Directive2{
 
   _dir2!: boolean
   
    constructor(private _viewContainer:ViewContainerRef,
    private templateRef:TemplateRef<any>){}
 
   @Input()
   set dir2(condition: boolean){
 
      this._dir2 = condition;
      this._updateView();
   }
 
   _updateView(){
    
    if(this._dir2)
    this._viewContainer.createEmbeddedView(this.templateRef)
    else
    this._viewContainer.clear()
 
   }
}