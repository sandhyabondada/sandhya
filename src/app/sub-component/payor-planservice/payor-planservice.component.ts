import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-payor-planservice',
  templateUrl: './payor-planservice.component.html',
  styleUrls: ['./payor-planservice.component.scss']
})
export class PayorPlanserviceComponent {


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
