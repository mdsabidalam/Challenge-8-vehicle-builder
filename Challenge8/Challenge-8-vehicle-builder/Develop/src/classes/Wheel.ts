// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Getter method for the diameter property
  get size(): number {
    return this.diameter;
  }

  // Getter method for the tireBrand property
  get brand(): string {
    return this.tireBrand;
  }

  // Setter method for the diameter property
  set size(diameter: number) {
    if (diameter > 0) {
      this.diameter = diameter;
    } else {
      throw new Error("Diameter must be a positive number.");
    }
  }

  // Setter method for the tireBrand property
  set brand(tireBrand: string) {
    if (tireBrand.trim().length > 0) {
      this.tireBrand = tireBrand;
    } else {
      throw new Error("Tire brand cannot be empty.");
    }
  }
}

// Export the Wheel class
export default Wheel;
