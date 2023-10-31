import { Component } from '@angular/core';

@Component({
  selector: 'app-sandatapayor',
  templateUrl: './sandatapayor.component.html',
  styleUrls: ['./sandatapayor.component.scss']
})
export class SandatapayorComponent {
  countries: any[] | undefined;

  selectedCountry: any | undefined;

  ngOnInit() {
      this.countries = [
          { name: 'CN COT AAA(72084)' },
          { name: 'CN COT ADOPTION SUBSIDY(720)' },
          { name: 'CN COT NARBHA(72087)'},
          { name: 'CN COTTONWOOD DDD(72013)' },
          { name: 'CN COTTONWOOD EVERCARE(72)' },
          { name: 'Germany' },
          { name: 'India'},
          { name: 'Japan' },
          { name: 'Spain' },
          { name: 'United States' }
      ];
  }
}
