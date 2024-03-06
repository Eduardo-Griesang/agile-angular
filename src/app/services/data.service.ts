import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getCategories(level: number, category?: string, product?: string): Observable<string[]> {
    switch (level) {
      case 1:
        return of(['Computers Parts', 'Monitors', 'Peripherals']);
      case 2:
        switch (category) {
          case 'Computers Parts':
            return of(['CPU', 'Graphics Card', 'RAM']);
          case 'Monitors':
            return of(['1080p 144Hz', '1080p 60Hz', '1440p 60Hz']);
          case 'Peripherals':
            return of(['Keyboard', 'Mouse', 'Headset']);
          default:
            return of([]);
        }
      case 3:
        switch (product) {
          case 'CPU':
            return of(['Intel', 'AMD', 'Qualcomm']);
          case 'Graphics Card':
            return of(['Nvidia', 'AMD', 'Asus']);
          case 'RAM':
            return of(['HyperX', 'Corsair', 'Gigabyte']);
          case '1080p 144Hz':
          case '1080p 60Hz':
          case '1440p 60Hz':
            return of(['Asus', 'AOC', 'Samsung']);
          case 'Keyboard':
          case 'Mouse':
          case 'Headset':
            return of(['Asus', 'Corsair', 'HyperX']);
          default:
            return of([]);
        }
      default:
        return of([]);
    }
  }
}
