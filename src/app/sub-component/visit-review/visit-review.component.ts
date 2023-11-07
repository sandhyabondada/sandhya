import { Component, Renderer2 } from '@angular/core';

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



  constructor(private renderer: Renderer2) { }

  openModal() {
    const modal = document.getElementById('myModal');
    this.renderer.addClass(modal, 'show');
  }
}
