import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @Input() selectedCategory: string | undefined;
  @Input() selectedProduct: string | undefined;
  @Input() selectedBrand: string | undefined;

  sampleData: any[] = [
    { Day: 'January', Sales: 10 },
    { Day: 'February', Sales: 15 },
    { Day: 'March', Sales: 10 },
    { Day: 'April', Sales: 20 }
  ];


  updateChartData(): void {
    this.sampleData = [
      { Day: 'January', Sales: 10 },
      { Day: 'February', Sales: 15 },
      { Day: 'March', Sales: 10 },
      { Day: 'April', Sales: 20 }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory'] || changes['selectedProduct'] || changes['selectedBrand']) {
      this.updateChartData();
    }
  }
}
