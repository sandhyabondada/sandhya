import { Component } from '@angular/core';

@Component({
  selector: 'app-rough2',
  templateUrl: './rough2.component.html',
  styleUrls: ['./rough2.component.scss']
})
export class Rough2Component {
  ingredient!: string;
  checked: boolean = false;

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  payorplan=true;
  payload=false;
  onClick(){
    this.payorplan=false;
    this.payload=true;
  
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










     this.items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 1' },
      { id: 8, name: 'Item 2' },
      { id: 9, name: 'Item 3' },
      { id: 10, name: 'Item 4' },
      { id: 11, name: 'Item 5' },
      { id: 12, name: 'Item 6' },
      // Add more items here
    ];
    this.totalItems = this.items.length;
  
    this.updatePageNumbers();
    this.updatePage();
 }




options: any[] = [

 { label: 'Form 1', value: 'Form1' },
 { label: 'Form 2', value: 'Form2' },
 { label: 'Form 3', value: 'Form3' }
];

selectedOption: string = ''; // Initially, no form is selected


selectedForm: string = 'Form1';





















items: Item[] = [];
pagedItems: Item[] = [];
pageSize = 5; // Change this to your desired page size
totalItems = 0;
currentPage = 1;
pageNumbers: number[] = [];

constructor() {}



updatePageNumbers(): void {
  this.pageNumbers = [];
  const pageCount = Math.ceil(this.totalItems / this.pageSize);
  for (let i = 1; i <= pageCount; i++) {
    this.pageNumbers.push(i);
  }
}

onPageChange(): void {
  this.updatePage();
}

nextPage(): void {
  if (this.currentPage < this.pageNumbers.length) {
    this.currentPage++;
    this.updatePage();
  }
}

previousPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePage();
  }
}

updatePage(): void {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.pagedItems = this.items.slice(startIndex, startIndex + this.pageSize);
}










}

interface Item {
id: number;
name: string;
}

