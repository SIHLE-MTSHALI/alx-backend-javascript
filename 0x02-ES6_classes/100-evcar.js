#!/usr/bin/node

import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = super.cloneCar();
    clonedCar._range = undefined;
    return clonedCar;
  }
}

export default EVCar;
