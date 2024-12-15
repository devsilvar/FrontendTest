# Multi-Step Form Wizard React App.

A React application that implements a multi-step form wizard using the Formik library for form management and validation, along with other utilities like Axios for HTTP requests and React Icons for icons.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Components](#components)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Getting Started

To get started with the app, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

   ```

2. Navigate to the project directory::
   ```bash
   npm install
   ```

# or

yarn install

3. Install dependencies::

   ```bash
   cd FrontendTest

   ```

4. Start the app:
   ```bash
   npm run dev
   ```

# or

yarn start

Open your browser and navigate to http://localhost:5173.

## Features

- Multi-step form wizard with navigation between steps
- Form validation using Formik and Yup
- Conditional rendering of form steps based on the current step
- Submit button only visible on the last step
- User input management using useReducer
- CSS transitions for a smooth user experience

## Components

- **FormWizard**: The main component that renders the form wizard and handles navigation between steps.
- **StepOne**, **StepTwo**, **StepThree**: Individual form step components that contain the form fields for each step.
- **Formik**: Used for form management and validation.

## Dependencies

- `react`: ^17.0.2
- `formik`: ^2.2.9 - Form management and validation
- `yup`: ^0.32.9 - Schema builder for value parsing and validation
- `axios`: ^0.24.0 - Promise-based HTTP client for making API requests
- `react-icons`: ^4.3.1 - Include popular icons in your React projects
- `bootstrap`: ^5.1.3 - Front-end framework for responsive, mobile-first projects

.
├── src
│ ├── components
│ │ ├── FormWizard.tsx
│ │ ├── StepOne.tsx
│ │ ├── StepTwo.tsx
│ │ ├── StepThree.tsx
│ ├── context
│ │ ├── TodoContext.tsx
│ ├── App.tsx
│ ├── index.tsx
├── package.json
├── README.md
