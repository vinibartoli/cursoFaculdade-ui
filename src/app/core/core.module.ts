import { NgModule } from "@angular/core";
import { PrimengModule } from "../primeng.module";
import { NavbarComponent } from "./layout/navbar/navbar.component";


@NgModule({
  declarations: [NavbarComponent],
  imports: [PrimengModule],
  providers: [],
  exports: [NavbarComponent]
})

export class CoreModule {}
