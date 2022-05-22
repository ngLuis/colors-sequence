import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSequencePickerComponent } from './components/color-sequence-picker/color-sequence-picker.component';

const routes: Routes = [
  {
    path: '', component: ColorSequencePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
