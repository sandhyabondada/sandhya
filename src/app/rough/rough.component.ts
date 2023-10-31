import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrls: ['./rough.component.scss']
})
export class RoughComponent {

constructor(private api:ApiService){}

  payorplan=true;
  payload=false;
  onClick(){
    this.payorplan=false;
    this.payload=true;
  
  }

  cancel(){
    this.payorplan=true;
    this.payload=false;
  }



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
  
      this.getPayorPlanList();
    
  }


  public payorPlanList:any=[];
public planName:any;
public payorCode=''
public privateDuty='';
public planCode=''

public lowerBound: number = 1;
public upperBound: number = 20;
  public getPayorPlanList() {
   
     let obj = { 
      "id": "", 
      "plan": this.planName, 
      "planCode": this.planCode, 
      "payorCode": this.payorCode, 
      "privateDuty":this.privateDuty, 
      "lowerBound": this.lowerBound, 
      "upperBound": this.upperBound 
    }
     console.log(obj);

     this.api.getPayorPlanList(JSON.stringify(obj)).subscribe(res => {
       this.payorPlanList = res;
   console.log(res);
   
     })
   }


options: any[] = [

  { label: 'Form 1', value: 'Form1' },
  { label: 'Form 2', value: 'Form2' },
  { label: 'Form 3', value: 'Form3' }
];

selectedOption: string = ''; // Initially, no form is selected


cncot=false;
OnClick(){
  this.cncot=true;
}



VisitReview=false;
OnSubmit(){
 this. VisitReview=true;
}
onsubmit(){
  this.VisitReview=false;
}












}
