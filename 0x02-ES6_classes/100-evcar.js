#!/usr/bin/node
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = range;
  }

  cloneCar() {
    const newCar = new Car();
    for (const prop of Object.getOwnPropertyNames(this)) {
      if (prop !== '_range') {
        newCar[prop] = this[prop];
      }
    }
    return newCar;
  }
}

