import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [],
})
export class BasicsPageComponent {
  public nameLower: string = 'jorge';
  public nameUpper: string = 'JORGE';
  public fullName: string = 'jOrGe CaYeTaNo';

  public customDate: Date = new Date(); // Current date
}
