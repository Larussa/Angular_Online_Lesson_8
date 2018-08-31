import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mydate'
})

export class myDatePipe implements PipeTransform {
  transform (value: any, locale?: any, format?: any): any {
    let date = new Date(value).toLocaleString(
      locale, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  hour: '2-digit', minute: '2-digit'});
    return date;
  }
}
