import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: unknown, args: 'commaSeparated' | 'dashSeparated' | undefined ): unknown {
    if (value){
      if(args){
        if(args === 'commaSeparated'){
          return this.separateByCommas(value as string)
        }
        else if(args === 'dashSeparated'){
          return this.separateByDashs(value as string)
        }
        else return value
      } 
      else{
        return value
      };
    } else return '---'
  }

  separateByCommas(value: number | string){
    if(!value) return null
    let separated = ''
    let chars : string[] = value?.toString().split('');
    let rem = 3 - chars.length%3;
    for(let i = 0 ; i < chars.length ; i++){
      if((i+rem)%3 === 0 && i != 0){
        separated = separated + ','
      }
      separated = separated + chars[i]
    }
    return separated
  }

  separateByDashs(value: number | string){
    if(!value) return null
    let separated = ''
    let chars : string[] = value?.toString().split('');
    for(let i = 0 ; i < chars.length ; i++){
      if(i%3 === 0 && i != 0){
        separated = separated + '-'
      }
      separated = separated + chars[i]
    }
    return separated
  }

}
