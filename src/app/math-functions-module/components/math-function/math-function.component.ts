import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathFunctionsService } from '../../services/math-functions.service';

@Component({
  selector: 'app-math-function',
  templateUrl: './math-function.component.html',
  styleUrls: ['./math-function.component.scss'],
})
export class MathFunctionComponent {
  @Input() mathFunction!: string;
  public formGroup!: FormGroup;
  public result: string = '';
  public isSelectVisible!: boolean;

  constructor(private mathFunctionsService: MathFunctionsService) {}

  ngOnInit(): void {
    this.isSelectVisible =
      this.mathFunction !== 'mathIntSqrt' &&
      this.mathFunction !== 'mathFibonacci';
    if (this.mathFunction === 'mathPow') {
      this.formGroup = new FormGroup({
        number: new FormControl(''),
        degree: new FormControl(''),
        method: new FormControl(''),
      });
    } else if (this.mathFunction === 'mathFactorial') {
      this.formGroup = new FormGroup({
        number: new FormControl(''),
        method: new FormControl(''),
      });
    } else {
      this.formGroup = new FormGroup({
        number: new FormControl(''),
      });
    }
  }

  calculate(): void {
    switch (this.mathFunction) {
      case 'mathPow':
        this.formGroup.value.method === 'Iterations'
          ? (this.result = String(
              this.mathFunctionsService.powIterations(
                this.formGroup.value.number,
                this.formGroup.value.degree
              )
            ))
          : (this.result = String(
              this.mathFunctionsService.powRecursive(
                this.formGroup.value.number,
                this.formGroup.value.degree
              )
            ));
        break;
      case 'mathFactorial':
        this.formGroup.value.method === 'Iterations'
          ? (this.result = String(
              this.mathFunctionsService.factorialIterations(
                this.formGroup.value.number
              )
            ))
          : (this.result = String(
              this.mathFunctionsService.factorialRecursive(
                this.formGroup.value.number
              )
            ));
        break;
      case 'mathFibonacci':
        this.result = String(
          this.mathFunctionsService.fibonacci(this.formGroup.value.number)
        );
        break;
      case 'mathIntSqrt':
        this.result = String(
          this.mathFunctionsService.intSqrt(this.formGroup.value.number)
        );
        break;
    }
  }
}
