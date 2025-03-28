// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends Vehicle {
  // Declare properties of the Car class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight, topSpeed);

    // Initialize properties of the Car class
    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel(16, "DefaultBrand"));
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the wheels
    console.log(
      `Wheels: ${this.wheels
        .map((wheel, index) => `Wheel ${index + 1}: ${wheel.size}" with ${wheel.brand} tire`)
        .join(", ")}`
    );
  }
}

// Export the Car class as the default export
export default Car;
