import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  globalVariable: string = 'Initial Value'; // Initialize the global variable

  // Methods to get and set the global variable
  getGlobalVariable() {
    return this.globalVariable;
  }

  setGlobalVariable(newValue: string) {
    this.globalVariable = newValue;
  }
}
