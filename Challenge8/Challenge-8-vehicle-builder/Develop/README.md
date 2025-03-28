# Challenge-8-Vehicle-Builder

## Description
The **Challenge-8-Vehicle-Builder** is a command-line application that allows users to create, manage, and interact with different types of vehicles, including cars, trucks, and motorbikes. Users can perform various actions on the vehicles, such as starting, accelerating, towing (for trucks), and performing wheelies (for motorbikes).

## Features
- Create vehicles of type **Car**, **Truck**, or **Motorbike**.
- Perform actions such as:
  - Start, stop, accelerate, decelerate, and reverse vehicles.
  - Turn vehicles left or right.
  - Tow other vehicles (for trucks).
  - Perform wheelies (for motorbikes).
- View detailed information about each vehicle, including wheels and towing capacity (if applicable).
- Interactive CLI using **Inquirer.js** for a user-friendly experience.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Challenge-8-Vehicle-Builder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Challenge-8-Vehicle-Builder
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Run the application:
   ```bash
   node app.js
   ```
2. Follow the interactive prompts to create and manage vehicles.

## Classes and Structure
- **Vehicle**: Base class for all vehicles.
- **Car**: Represents a car with specific attributes and methods.
- **Truck**: Represents a truck with towing capabilities.
- **Motorbike**: Represents a motorbike with the ability to perform wheelies.

## Example Scenarios
- Create a truck and tow another vehicle.
- Start a motorbike and perform a wheelie.
- Accelerate a car and turn it left.

## Dependencies
- **Inquirer.js**: For interactive CLI prompts.
- **Node.js**: Runtime environment.

## License
[MIT License](LICENSE)

