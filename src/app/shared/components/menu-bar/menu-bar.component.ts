import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: ``,
})
export class MenuBarComponent implements OnInit {
  public MenuBarItems: MenuItem[] | undefined;

  ngOnInit() {
    this.MenuBarItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No common',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Other elements',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
