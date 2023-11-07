import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {

  selectedCategory: any = null;

  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' }
  ];

  ngOnInit() {
      this.selectedCategory = this.categories[1];
  }

}
  

