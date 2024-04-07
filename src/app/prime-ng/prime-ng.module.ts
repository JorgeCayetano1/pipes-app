import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
  ],
})
export class PrimeNgModule {}
