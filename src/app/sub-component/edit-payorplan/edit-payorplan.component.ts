import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-payorplan',
  templateUrl: './edit-payorplan.component.html',
  styleUrls: ['./edit-payorplan.component.scss']
})
export class EditPayorplanComponent {
  value: string | undefined;
  date: Date | undefined;

  checked: boolean = false;


}
