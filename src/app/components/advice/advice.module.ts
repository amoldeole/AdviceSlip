import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdviceListComponent } from "../advice-list/advice-list.component";
import { AdviceRoutingModule } from "./advice-routing.module";
import { AdviceComponent } from "./advice.component";

@NgModule({
  declarations: [
    AdviceComponent,
    AdviceListComponent
  ],
  imports:[AdviceRoutingModule, CommonModule, FormsModule],
  exports: [
    AdviceComponent,
    AdviceListComponent
  ]
})
export class AdviceModule { }
