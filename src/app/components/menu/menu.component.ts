import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [DataService]
})
export class MenuComponent implements OnInit {
  menuForm!: FormGroup;
  categories!: string[];
  products!: string[];
  brands!: string[];

  selectedCategory: string | undefined;
  selectedProduct: string | undefined;
  selectedBrand: string | undefined;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.menuForm = this.fb.group({
      category: '',
      product: '',
      brand: ''
    });
  }

  ngOnInit(): void {
    this.dataService.getCategories(1).subscribe(categories => {
      this.categories = categories;
    });

    this.menuForm.get('category')!.valueChanges.subscribe(category => {
      if (category) {
        this.selectedCategory = category;
        this.dataService.getCategories(2, category).subscribe(products => {
          this.products = products;
          this.selectedProduct = undefined;
        });
      }
    });

    this.menuForm.get('product')!.valueChanges.subscribe(product => {
      const selectedCategory = this.menuForm.get('category')!.value;
      if (product && selectedCategory) {
        this.selectedProduct = product;
        this.dataService.getCategories(3, selectedCategory, product).subscribe(brands => {
          this.brands = brands;
        });
      }
    });

    this.menuForm.get('brand')!.valueChanges.subscribe(brand => {
      this.selectedBrand = brand;
    });
  }
}
