import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mySum',
  pure: false
})

export class mySummaPipe implements PipeTransform {
  transform(value: number[]) {
    let sum = 0;
    value.forEach(el => {
      sum += el;
    });
    return sum;
  }
}
