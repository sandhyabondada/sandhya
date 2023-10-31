import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  ingredient!: string;
   checked: boolean = false;

   isDropdownOpen = false;

   toggleDropdown() {
     this.isDropdownOpen = !this.isDropdownOpen;
   }



   countriess: any[] | undefined;

   selectedCountrys: any | undefined;

   

   
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
      this.countriess = [
          
      ];
  }






  first1: number = 0;

  rows1: number = 10;

  first2: number = 0;

  rows2: number = 10;

  first3: number = 0;

  rows3: number = 10;

  totalRecords: number = 120;

  options = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 120, value: 120 }
  ];

 



  
}
