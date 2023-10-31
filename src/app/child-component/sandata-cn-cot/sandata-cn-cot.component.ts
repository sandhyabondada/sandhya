import { Component } from '@angular/core';

@Component({
  selector: 'app-sandata-cn-cot',
  templateUrl: './sandata-cn-cot.component.html',
  styleUrls: ['./sandata-cn-cot.component.scss']
})
export class SandataCnCotComponent {
  countries: any[] | undefined;

  selectedCountry: any | undefined;

  ngOnInit() {
      this.countries = [
         
      ];
  }
}
