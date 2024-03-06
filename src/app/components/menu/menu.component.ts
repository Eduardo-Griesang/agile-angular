import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DataService] // Provide the data service
})
export class MenuComponent implements OnInit {
  menuForm!: FormGroup;
  category1Options!: string[];
  category2Options!: string[];
  category3Options!: string[];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.menuForm = this.fb.group({
      category1: '',
      category2: '',
      category3: ''
    });
  }

  ngOnInit(): void {
    this.dataService.getCategories(1).subscribe(categories => {
      this.category1Options = categories;
    });

    this.menuForm.get('category1')!.valueChanges.subscribe(value => {
      if (value) {
        this.dataService.getCategories(2, value).subscribe(categories => {
          this.category2Options = categories;
        });
      }
    });

    this.menuForm.get('category2')!.valueChanges.subscribe(value => {
      const category1Value = this.menuForm.get('category1')!.value;
      if (value && category1Value) {
        // Pass both category1Value and value as arguments
        this.dataService.getCategories(3, category1Value, value).subscribe(categories => {
          this.category3Options = categories;
        });
      }
    });
  }

  onSubmit() {
    const category3Value = this.menuForm.get('category3')!.value;
    console.log(`Selected category 3: ${category3Value}`);
    // Fetch sales data based on the selected category3Value
  }
}
