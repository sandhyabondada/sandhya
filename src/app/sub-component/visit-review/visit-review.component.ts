import { Component } from '@angular/core';

@Component({
  selector: 'app-visit-review',
  templateUrl: './visit-review.component.html',
  styleUrls: ['./visit-review.component.scss']
})
export class VisitReviewComponent {
  cities: any[] | undefined;

  selectedCity: any | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'Yes' },
          { name: 'No' },
         
      ];
  }
}
