import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
 
    name:"tempConverter"
})
 
export class TempCToFPipe implements PipeTransform{
    transform(value: number, unit:string) {
 
        if(value && !isNaN(value)){
            if(unit === 'C')
               { var temp = (value - 32)/1.8
                return temp;
               }
            else if(unit === 'F'){
                var temp =  (value*1.8) + 32
                return temp;
            }
             
        }
        return;
        
    }


 
}