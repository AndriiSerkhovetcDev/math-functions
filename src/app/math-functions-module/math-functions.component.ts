import { Component } from '@angular/core';
import { mathComponents } from './constants/math-function-module-constants';
import { MathFunctionInterface } from './interfaces/math-functions-module-interfaces';

@Component({
  selector: 'app-math-functions',
  templateUrl: './math-functions.component.html',
  styleUrls: ['./math-functions.component.scss'],
})
export class MathFunctionsComponent {
  public elementsArray: MathFunctionInterface[] = mathComponents;
}
