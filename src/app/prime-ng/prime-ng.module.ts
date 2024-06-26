import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
// import { MenuModule } from 'primeng/menu';

@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
