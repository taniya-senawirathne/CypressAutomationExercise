# CypressAutomationExercise

💠 Automated tests using Cypress with JavaScript for an E-commerce website

This project is a sample Cypress automation suite for testing basic e-commerce functionalities on the Automation Practice website.

## Test Scenarios

The automation suite covers the following scenarios:

1. Visit the Homepage
   Navigate to the homepage of the Automation Practice website.
2. Search for a Product
   Use the search functionality to find a specific product, e.g., "Printed Dress."
3. Add the Product to the Cart
   Click on the product from the search results.
   Add the product to the shopping cart.
4. Proceed to Checkout
   Click on the "Proceed to checkout" button from the cart.

## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or later)
- [npm](https://www.npmjs.com/get-npm)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/taniya-senawirathne/CypressAutomationExercise.git


```

### 2. Install Dependencies

Navigate to the project directory and install the necessary packages:

```bash
npm install

```

### 3. Available Scripts

The following scripts are available in the package.json file:

- Open Cypress Test Runner:

```bash
  npm run cy:open
```

- Run Tests Headlessly:

```bash
  npm run test
```

- Run Tests in Chrome:

```bash
  npm run browser:chrome
```

### 4. Test Reports

The project is configured with Mocha Awesome reporter. After test execution, the report will be generated under cypress/reports.

- Viewing the Report
  Navigate to the ./cypress/reports directory.
  Copy the path of the report file and open it in an external browser to view the test result
