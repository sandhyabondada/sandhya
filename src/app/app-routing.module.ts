import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocLoginComponent } from './component/poc-login/poc-login.component';
import { MaintenanceComponent } from './component/maintenance/maintenance.component';
import { PayorPlanserviceComponent } from './sub-component/payor-planservice/payor-planservice.component';
import { SandatapayorComponent } from './sub-component/sandatapayor/sandatapayor.component';
import { EditPayorplanComponent } from './sub-component/edit-payorplan/edit-payorplan.component';
import { RoughComponent } from './rough/rough.component';


const routes: Routes = [
  {path:'',redirectTo:"poclogin",pathMatch:'full'},
  {path:'poclogin',component:PocLoginComponent},
  {path:'login',component:RoughComponent,
  children: [
    // { path: 'editplan', component: EditPayorplanComponent },
    // { path: 'payorplanservice', component: PayorPlanserviceComponent },
    // { path: 'sandatapayor', component: SandatapayorComponent },
    // { path: 'editpayorplan', component: EditPayorplanComponent },
  ]
    },
  {path:'logout',component:PocLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
