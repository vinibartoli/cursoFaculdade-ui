import { NgModule } from "@angular/core";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports:[
    TableModule,
    ButtonModule,
    SidebarModule
  ]
})

export class PrimengModule {}
