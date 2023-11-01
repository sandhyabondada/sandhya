import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-rough2',
  templateUrl: './rough2.component.html',
  styleUrls: ['./rough2.component.scss']
})
export class Rough2Component {
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

   this.getPayorPlanList();
   this.items = Array.from({ length: 30 }).map((_, i) => `Item #${i}`);
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

selectedOption: string = '';


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




items!: string[];

}
interface Item {
  payorCode: number;
  planCode: string;
  plan: string;
  fromDateString: string;
  toDateString: string;
}

