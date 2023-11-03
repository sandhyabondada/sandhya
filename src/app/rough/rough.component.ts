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
public upperBound: number = 10;
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

items!: string[];

public serviceObj: any={};
  public Qualifyed: any;
  public serviceList: any;

  public active: any=2;
  public name: any='';

  public serviceCategory: any;
  public Qualification: any;
  
 
  public formMapping:any = false
  public service:any =false;
  public qualifications:any = true;
  public index: number = 0;
  public tabFlag:any='';
  public perPage = 10;
  public totalCount = 1000;
  public qualificationList:any=[];
  public serviceName:any;

public nextPage() {
  this.lowerBound = this.lowerBound + this.perPage;
  this.upperBound = this.upperBound + this.perPage;
  this.getPayorPlanList()
  console.log(this.lowerBound,this.upperBound);

}
public previousPage() {
  this.lowerBound = this.lowerBound - this.perPage;
  this.upperBound = this.upperBound - this.perPage;
  this.getPayorPlanList()
  console.log(this.lowerBound,this.upperBound);
}
public pageReset() {
  this.lowerBound = 1;
  this.upperBound = this.perPage;
  console.log(this.lowerBound,this.upperBound);
}





}
interface Item {
  payorCode: number;
  planCode: string;
  plan: string;
  fromDateString: string;
  toDateString: string;
}
