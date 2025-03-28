// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Motorbike class
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

    // Initialize the wheels property
    this.wheels = wheels.length === 2 ? wheels : Array(2).fill(new Wheel(17, "DefaultBrand"));
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Log additional details specific to the Motorbike
    console.log(
      `Wheels: ${this.wheels
        .map((wheel, index) => `Wheel ${index + 1}: ${wheel.size}" with ${wheel.brand} tire`)
        .join(", ")}`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
