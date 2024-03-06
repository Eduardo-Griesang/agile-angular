import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the chart with sample data', () => {
    const chartElement = de.query(By.css('jqxChart'));
    expect(chartElement).toBeTruthy();

    expect(component.sampleData).toEqual([
      { Day: 'January', Sales: 10 },
      { Day: 'February', Sales: 15 },
      { Day: 'March', Sales: 10 },
      { Day: 'April', Sales: 20 },
    ]);
  });

});
