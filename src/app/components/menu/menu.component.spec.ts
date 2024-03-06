import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { DataService } from 'src/app/services/data.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [ReactiveFormsModule],
      providers: [DataService]
    }).compileComponents();

    dataService = TestBed.inject(DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update products when a category is selected', () => {
    component.menuForm.get('category')?.setValue('TestCategory');

    expect(component.products).toEqual(['MockProduct1', 'MockProduct2', 'MockProduct3']);
  });

  it('should update sales data when a product is selected', () => {
    spyOn(component as any, 'updateSalesData').and.callThrough();

    component.menuForm.get('category')?.setValue('TestCategory');

    component.menuForm.get('product')?.setValue('TestProduct');

    expect((component as any).updateSalesData).toHaveBeenCalled();
  });
});
