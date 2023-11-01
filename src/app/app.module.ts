import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { TreeSelectModule } from 'primeng/treeselect';
import { PaginatorModule } from 'primeng/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocLoginComponent } from './component/poc-login/poc-login.component';
import { MaintenanceComponent } from './component/maintenance/maintenance.component';
import { EditPayorplanComponent } from './sub-component/edit-payorplan/edit-payorplan.component';
import { PayorPlanserviceComponent } from './sub-component/payor-planservice/payor-planservice.component';
import { SandatapayorComponent } from './sub-component/sandatapayor/sandatapayor.component';
import { CnCotComponent } from './child-component/cn-cot/cn-cot.component';
import { SandataCnCotComponent } from './child-component/sandata-cn-cot/sandata-cn-cot.component';
import { VisitReviewComponent } from './sub-component/visit-review/visit-review.component';
import { TestingComponent } from './testing/testing.component';
import { RoughComponent } from './rough/rough.component';
import { Rough2Component } from './rough2/rough2.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
     PocLoginComponent,
     MaintenanceComponent,
     EditPayorplanComponent,
     PayorPlanserviceComponent,
     SandatapayorComponent,
     CnCotComponent,
     SandataCnCotComponent,
     VisitReviewComponent,
     TestingComponent,
     RoughComponent,
     Rough2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PasswordModule ,
    DropdownModule,
    RadioButtonModule,
    InputSwitchModule,
    CalendarModule,
    BrowserAnimationsModule,
    TabViewModule,
    TreeSelectModule,
    PaginatorModule,
    
    BsDatepickerModule.forRoot()

  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
