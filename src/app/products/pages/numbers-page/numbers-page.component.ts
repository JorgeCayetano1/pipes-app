import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css',
})
export class NumbersPageComponent {
  public totalSells: number = 123456.789;
  public percent: number = 0.487;
}
