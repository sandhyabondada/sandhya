import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { VisitReviewComponent } from '../sub-component/visit-review/visit-review.component';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrls: ['./rough.component.scss']
})
export class RoughComponent {

  constructor(private api:ApiService){}

  public items!: string[];
  public payorplan=true;
  public payload=false;
  public VisitReview=false;
  public ingredient: any=2;
  public checked: boolean = false;
  public isDropdownOpen = false;
  public cncot=false;
  public resetData=false;
  public loginfailed=false;
  public payorplanserviceForm=false
  public SandataPayorPlan=false
  public SanDataPayorPlanServiceFlag=true;
  public SanDataPayorPlanServiceFlagDetails=false;
  public PayorPlanServiceFlag=true;
  public PayorPlanServiceFlagData=false;
  
  public payorPlanServiceList:any=[];
  public payorPlanList:any=[];
  public planName:any;
  public payorCode=''
  public privateDuty='';
  public planCode=''
  public lowerBound: number = 1;
  public upperBound: number = 18;
  public payorPlanItem:any;
  public editFlag:boolean=true;
  public editFormMapFlag:boolean=false;
  public editPayorPlanServiceFlag:boolean=true;
  public editSandataServiceFlag:boolean=true;
  public editPayorPlanServiceSite:any;
  public editSandataServiceSite:any;
  public activeIndex:any;
  public UserOfficeList:any;

  public Qualifyed: any;
  public serviceList: any;
  public active: any=2;
  public name: any='';
  public serviceCategory: any;
  public Qualification: any;
  public serviceObj: any={};
  public formMapping:any = false
  public service:any =false;
  public qualifications:any = true;
  public index: number = 0;
  public tabFlag:any='';
  public perPage = 10;
  public totalCount = 1000;
  public qualificationList:any=[];
  public serviceName:any;

  ngOnInit() {

    this.getPayorPlanList();
    this. getUserOfficeList();
    // this.getPayorPlanServiceList();
    this.items = Array.from({ length: 30 }).map((_, i) => `Item #${i}`);
    this.payorPlanItem = {
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

  public onClick(item:any){
    this.payorplan=false;
    this.payload=true;
    this.payorPlanItem = item;
    this.editPayorPlanServiceFlag = true;
    this.editSandataServiceFlag = true;
    this.editPayorPlanServiceSite = null;
    this.editSandataServiceSite = null;
    this.activeIndex=0
  }

  public cancel(){
    this.payorplan=true;
    this.payload=false;
  }

  public toggleDropdown() {
     this.isDropdownOpen = !this.isDropdownOpen;
   }

  public getPayorPlanServiceList(){
  
    let object={
      "payorPlanId":this.payorPlanItem?.id,
      "officeId":this.UserOfficeList?.id,
      "lowerBound":this.lowerBound,
      "upperBound":this.upperBound
    }
    this.api.getPayorPlanServiceList(JSON.stringify(object)).subscribe(
      result=>{
        console.log(result);
        this.payorPlanServiceList=result;
      }
    )
  }

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
     this.api.getPayorPlanList(JSON.stringify(obj)).subscribe(res => {
       this.payorPlanList = res;
     })
  }

  public getUserOfficeList()  {
     this.api.getUserOfficeList().subscribe(res => {
      console.log(res);
    
    
     this.UserOfficeList = res.map((x:any) => {
      return { id: x.id, name: x.name + " (" + x.code + ')', code: x.code }
    })
   })
 }

  public OnClick(){
    this.cncot=true;
 }

  public OnSubmit(){
    this. VisitReview=true;
 }

  public onsubmit(){
    this.VisitReview=false;
 }
  
 public PayorPlanService(flag: any){
   if(flag=='payorplanserviceForm'){
    this.UserOfficeList(this.payorplanserviceForm)
    this.payorplanserviceForm=true;
    }else if(flag=='editSandataServiceFlag'){
    this.UserOfficeList()
    this.SandataPayorPlan=false;
  }
}

public nextPage() {
  this.lowerBound = this.lowerBound + this.perPage;
  this.upperBound = this.upperBound + this.perPage;
  this.getPayorPlanList()
}

public previousPage() {
  this.lowerBound = this.lowerBound - this.perPage;
  this.upperBound = this.upperBound - this.perPage;
  this.getPayorPlanList()
}

public pageReset() {
  this.lowerBound = 1;
  this.upperBound = this.perPage;
}

public onClicked(){
  this. PayorPlanServiceFlagData=true;
  this.PayorPlanServiceFlag=false;
}

public PayPlan(){
   this. PayorPlanServiceFlag=true;
   this. PayorPlanServiceFlagData=false;
   this. SanDataPayorPlanServiceFlag=true;
   this. SanDataPayorPlanServiceFlagDetails=false;
}

public SanDataPayorPlanService(){
  this. SanDataPayorPlanServiceFlag=false;
  this. SanDataPayorPlanServiceFlagDetails=true;
}

// openModalWithClass(item) {
//   this.modalRef = this.modalService.show(
//     VisitReviewComponent,
//     Object.assign({}, { class: 'preferrence-dcs ',initialState:{payorId:item.id} })
//   );
//   console.log(item)
// }

public Ok(){
   this.resetData=false;
}
public Reset(){
  this.resetData=true;
}

}


interface Item {
  payorCode: number;
  planCode: string;
  plan: string;
  fromDateString: string;
  toDateString: string;
}
