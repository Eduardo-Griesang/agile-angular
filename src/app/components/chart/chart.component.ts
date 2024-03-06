import { Component } from '@angular/core';
@Component({
    selector: 'chart-root',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']

})
export class ChartComponent {
    sampleData: any[] = [
        { Day: 'Janeiro', Swimming: 10 },
        { Day: 'Tuesday', Swimming: 15 },
        { Day: 'Wednesday', Swimming: 10 },
        { Day: 'Thursday', Swimming: 20 },
        { Day: 'Friday', Swimming: 20 },
        { Day: 'Saturday', Swimming: 20 },
        { Day: 'Sunday', Swimming: 30 }
    ];
    padding: any = { left: 10, top: 10, right: 15, bottom: 10 };
    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Day',
        unitInterval: 1,
        tickMarks: { visible: true, interval: 1 },
        gridLinesInterval: { visible: true, interval: 1 },
        valuesOnTicks: false,
        padding: { bottom: 10 }
    };
    valueAxis: any =
    {
        unitInterval: 10,
        minValue: 0,
        maxValue: 50,
        title: { text: 'Vendas' },
        labels: { horizontalAlignment: 'right' }
    };
    seriesGroups: any[] =
    [
        {
            type: 'line',
            series:
            [
                {
                    dataField: 'Swimming',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                }
            ]
        }
    ];
}