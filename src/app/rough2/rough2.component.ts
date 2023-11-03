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
  onClick(item:any){
    this.payorplan=false;
    this.payload=true;

    this.payorPlanItem = item;
    this.editPayorPlanServiceFlag = true;
    this.editSandataServiceFlag = true;
    this.editPayorPlanServiceSite = null;
    this.editSandataServiceSite = null;
    this.activeIndex=0
    // console.log(item,this.payorPlanItem);
  
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


   loginfailed=false;




   countriess: any[] | undefined;
   selectedCountrys: any | undefined;

   

   
  countries: any[] | undefined;
  selectedCountry: any | undefined;

  ngOnInit() {

   this.getPayorPlanList();
   this. getUserOfficeList()
   this.items = Array.from({ length: 30 }).map((_, i) => `Item #${i}`);

   this.payorPlanItem =
   {
     id: null,
     clientClassId:null,
     clientClassList:'',
     clientTypeList:'',
     description:'',
     fromDateString:'',
     payorCode:null,
     payorId:null,
     plan:'',
     planCode:null,
     privateDuty:null,
     toDateString:'',
   }
  }


public payorPlanList:any=[];
public planName:any;
public payorCode=''
public privateDuty='';
public planCode=''
public lowerBound: number = 1;
public upperBound: number = 20;
public payorPlanItem:any;
public editFlag:boolean=true;
public editFormMapFlag:boolean=false;
public editPayorPlanServiceFlag:boolean=true;
public editSandataServiceFlag:boolean=true;
public editPayorPlanServiceSite:any;
public editSandataServiceSite:any;
public activeIndex:any;


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
    //  console.log(obj);

     this.api.getPayorPlanList(JSON.stringify(obj)).subscribe(res => {
       this.payorPlanList = res;
        // console.log(res);
   
     })
   }

   public UserOfficeList:any;
      public getUserOfficeList()  {
         this.api.getUserOfficeList().subscribe(res => {
         this.UserOfficeList = res;
   console.log(res);

})
  }


// options: any[] = [

//   { label: 'Form 1', value: 'Form1' },
//   { label: 'Form 2', value: 'Form2' },
//   { label: 'Form 3', value: 'Form3' }
// ];

// selectedOption: string = '';


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


payorplanserviceForm=false
SandataPayorPlan=false
PayorPlanService(flag: any){
  if(flag=='payorplanserviceForm'){
    this.UserOfficeList(this.payorplanserviceForm)
    this.payorplanserviceForm=true;
  }else if(flag=='editSandataServiceFlag'){
    this.UserOfficeList()
    this.SandataPayorPlan=false;
  }

}




}




interface Item {
  payorCode: number;
  planCode: string;
  plan: string;
  fromDateString: string;
  toDateString: string;
}

