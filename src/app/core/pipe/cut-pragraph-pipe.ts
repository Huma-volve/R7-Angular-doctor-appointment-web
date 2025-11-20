import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutPragraph'
})
export class CutPragraphPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.slice(0,42);
  }

}
