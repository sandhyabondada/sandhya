import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  ingredient!: string;
   checked: boolean = false;

   isDropdownOpen = false;

   toggleDropdown() {
     this.isDropdownOpen = !this.isDropdownOpen;
   }
}
