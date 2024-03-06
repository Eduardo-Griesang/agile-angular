// data.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Modify the method signature to accept three arguments
  getCategories(level: number, category1Value?: string, category2Value?: string): Observable<string[]> {
    switch (level) {
      case 1:
        return of(['Category1-A', 'Category1-B', 'Category1-C']);
      case 2:
        // Assume you need to provide different options based on category 1 selection
        const options2 = category1Value ? this.getCategory2Options(category1Value) : [];
        return of(options2);
      case 3:
        // Assume you need to provide different options based on category 2 selection
        const options3 = category2Value ? this.getCategory3Options(category2Value) : [];
        return of(options3);
      default:
        return of([]);
    }
  }

  // ... (other methods)

  private getCategory2Options(category1Value: string): string[] {
    // Provide mock options based on category1Value
    // Adjust this logic based on your specific requirements
    switch (category1Value) {
      case 'Category1-A':
        return ['Category2-A1', 'Category2-A2', 'Category2-A3'];
      case 'Category1-B':
        return ['Category2-B1', 'Category2-B2', 'Category2-B3'];
      case 'Category1-C':
        return ['Category2-C1', 'Category2-C2', 'Category2-C3'];
      default:
        return [];
    }
  }

  private getCategory3Options(category2Value: string): string[] {
    // Provide mock options based on category2Value
    // Adjust this logic based on your specific requirements
    switch (category2Value) {
      case 'Category2-A1':
        return ['Category3-A1', 'Category3-A2', 'Category3-A3'];
      case 'Category2-B1':
        return ['Category3-B1', 'Category3-B2', 'Category3-B3'];
      case 'Category2-C1':
        return ['Category3-C1', 'Category3-C2', 'Category3-C3'];
      default:
        return [];
    }
  }
}
