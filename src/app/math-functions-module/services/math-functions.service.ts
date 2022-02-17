import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathFunctionsService {
  constructor() {}

  public factorialIterations(number: number): number | undefined {
    try {
      if (number < 0) throw 'Numbers must be positive!';
      let result: number = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    } catch (error) {
      return undefined;
    }
  }

  public factorialRecursive(number: number, i: number = 1): number | undefined {
    try {
      if (number < 0) throw 'Numbers must be positive!';
      let result: number | undefined = i;
      if (number > i) {
        let factorial: number | undefined = this.factorialRecursive(
          number,
          i + 1
        );
        factorial ? (result *= factorial) : (result = factorial);
      }
      return result;
    } catch (error) {
      return undefined;
    }
  }

  public powIterations(number: number, degree: number): number {
    if (number === 0) return 0;
    if (degree === 0) return 1;
    let result = 1;
    if (degree > 0) {
      for (let i = 0; i < degree; i++) {
        result *= number;
      }
    } else {
      for (let i = 0; i < degree * -1; i++) {
        result /= number;
      }
    }
    return result;
  }

  public powRecursive(number: number, degree: number, i: number = 1): number {
    if (number === 0) return 0;
    if (degree === 0) return 1;
    let result = number;
    if (degree > 0 && degree > i) {
      result *= this.powRecursive(number, degree, i + 1);
    }
    if (degree < 0 && degree * -1 > i) {
      result *= this.powRecursive(number, degree, i + 1);
    }
    return result;
  }

  public fibonacci(number: number): number | undefined {
    try {
      if (number < 0) throw 'Number must be positive';
      if (number === 0 || number === 1) return 1;
      let first = 1,
        second = 1;
      for (let i = 3; i <= number; i++) {
        [first, second] = [second, first + second];
      }
      return second;
    } catch (error) {
      return undefined;
    }
  }

  public intSqrt(number: number): number | undefined {
    try {
      if (number < 0) throw 'Number must be positive';
      let m = Math.floor(number / 4);
      if (m === 0) return 1;
      let i = this.intSqrt(m);
      if (i && 4 * i * i <= number && (2 * i + 1) * (2 * i + 1) > number) {
        return 2 * i;
      }
      return i ? 2 * i + 1 : undefined;
    } catch (error) {
      return undefined;
    }
  }
}
