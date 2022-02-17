import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathFunctionsRoutingModule } from './math-functions-router.module';
import { MathFunctionComponent } from './components/math-function/math-function.component';
import { MathFunctionsComponent } from './math-functions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MathFunctionsService } from './services/math-functions.service';

@NgModule({
  declarations: [MathFunctionComponent, MathFunctionsComponent],
  imports: [CommonModule, MathFunctionsRoutingModule, ReactiveFormsModule],
  providers: [MathFunctionsService],
  exports: [MathFunctionsComponent],
})
export class MathFunctionsModule {}
