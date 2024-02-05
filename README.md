# React Unit Testing

In the dynamic world of web development, writing comprehensive tests is crucial for maintaining code quality and catching potential issues early in the development process. This guide walks you through various testing scenarios, from the basics of writing your first test to more advanced topics like testing with mock data, handling user interactions, and validating API calls.

Navigate through the sections below to gain insights and hands-on experience in each testing aspect. Let's make testing an integral part of your React development workflow and build applications that stand the test of time!

## Table of Contents

- [React Unit Testing](#react-unit-testing)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Understanding Test Structure](#understanding-test-structure)
  - [What to Test](#what-to-test)
  - [What Not to Test](#what-not-to-test)
  - [1. Writing Your First Test for a React App](#1-writing-your-first-test-for-a-react-app)
  - [2. Testing With Mock Data in React](#2-testing-with-mock-data-in-react)
  - [3. Testing With Mock Data Covering All Branches in React](#3-testing-with-mock-data-covering-all-branches-in-react)
  - [4. Testing User Interactions in React](#4-testing-user-interactions-in-react)
  - [5. Testing a Function Call on Click of an Element](#5-testing-a-function-call-on-click-of-an-element)
  - [6. Querying Input Fields and Buttons](#6-querying-input-fields-and-buttons)
  - [7. Testing State Updates in React](#7-testing-state-updates-in-react)
  - [8. Testing a State Change on Click of a Button](#8-testing-a-state-change-on-click-of-a-button)
  - [9. Testing if an Element Was Added to a List](#9-testing-if-an-element-was-added-to-a-list)
  - [10. Testing if an Element Was Removed From a List](#10-testing-if-an-element-was-removed-from-a-list)
  - [11. Testing API Calls in React](#11-testing-api-calls-in-react)
  - [Setting Up Vite Project](#setting-up-vite-project)
  - [Writing First Test](#writing-first-test)
  - [Project Test Structure:](#project-test-structure)
  - [Writing the Test](#writing-the-test)
  - [Understanding the Test](#understanding-the-test)

## Introduction

As you embark on the journey of building a dynamic and reliable website, the importance of ensuring your code's correctness cannot be overstated. Unit tests are a fundamental tool in your arsenal for achieving this, allowing you to verify that individual components of your code function as expected.

In this comprehensive guide, we will explore the world of unit testing in React. We will walk through the process step by step, providing practical examples to demystify the concepts.This guide aims to make the testing process accessible and informative.

**Prerequisites:** Before diving in, make sure you have a basic understanding of React. If you're new to React, the official documentation is an excellent resource to get you started.

## Understanding Test Structure

Unit testing in React follows a structured process to ensure comprehensive coverage. Each test generally involves the following steps:

1. **Render the component:** Set up the component for testing by rendering it in a controlled environment.
2. **Simulate user interactions:** Mimic user actions, such as clicks or inputs, to trigger specific events within the component.
3. **Write an assertion:** Define expectations about the component's behavior and outcomes.

## What to Test

Your unit tests should cover a range of scenarios to ensure robust functionality:

- **Props Rendering:** Verify if a component renders correctly with or without props.
- **State Changes:** Examine how a component behaves when its internal state changes.
- **User Interactions:** Test how a component responds to user interactions, such as button clicks or form submissions.

## What Not to Test

While thorough testing is crucial, there are certain aspects you need not focus on:

- **Actual Implementation:** Instead of testing the intricate details of a function's implementation, concentrate on verifying if the component behaves correctly.

  _Example:_ If you're implementing a button click to sort an array, test if the function is called and if state changes are rendered correctly, rather than testing the sorting algorithm itself.

- **Third-Party Libraries:** If your project utilizes third-party libraries like Material UI, there's no need to test their functionality. These libraries are assumed to be well-tested.

## 1. Writing Your First Test for a React App

- Explanation on setting up a testing environment and writing a basic test for a React component.

## 2. Testing With Mock Data in React

- Guide on utilizing mock data to simulate various scenarios during testing.

## 3. Testing With Mock Data Covering All Branches in React

- Advanced techniques to test React components with mock data, covering all possible code branches.

## 4. Testing User Interactions in React

- Demonstrates how to write tests for user interactions like clicks, input changes, etc.

## 5. Testing a Function Call on Click of an Element

- Step-by-step instructions on testing a function call triggered by clicking an element.

## 6. Querying Input Fields and Buttons

- Guide on querying and testing React input fields and buttons.

## 7. Testing State Updates in React

- Explains how to write tests to ensure proper state updates in React components.

## 8. Testing a State Change on Click of a Button

- Detailed instructions on testing state changes when a button is clicked.

## 9. Testing if an Element Was Added to a List

- Guides you through testing scenarios to confirm whether an element was successfully added to a list.

## 10. Testing if an Element Was Removed From a List

- Demonstrates the process of testing if an element was correctly removed from a list.

## 11. Testing API Calls in React

- Explains strategies for testing API calls in React applications.

## Setting Up Vite Project

Let's kick start the testing journey by preparing Vite project:

1. **Create the app:** Use `create-vite` or `vite create` to initialize your project.
2. **Install dependencies:** Add the necessary testing libraries to your project.

   ```json
   "devDependencies": {
    "@babel/preset-env": "^7.23.9",
    "@babel/preset-react": "^7.23.3",
    "@testing-library/jest-dom": "^6.4.1",
    "@testing-library/react": "^14.2.1",
   }
   ```

   _Note:_ By default, Create Vite App projects don't come with tests, but adding testing support is crucial for ensuring the reliability of your React components.

3. **Configure setup files:** Ensure your `setupTests.js` file includes the necessary imports:

   ```javascript
   import "@testing-library/jest-dom";
   import "@testing-library/jest-dom/extend-expect";
   ```

4. **Modify scripts:** Adjust your `package.json` scripts for testing purposes.

   ```json
   "scripts": {
   "dev": "vite",
   "build": "vite build",
   "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
   "preview": "vite preview",
   "test": "jest",
   "test:watch": "jest --watchAll"
   }
   ```

   This configuration runs tests in watch mode and displays coverage. You can customize the coverage threshold in the `jest` configuration.

   ```json
   "jest": {
       "coverageThreshold": {
           "global": {
               "lines": 80
           }
       }
   }
   ```

Your project is now set up for testing. Let's dive into writing your first basic test in the following sections.

## Writing First Test

_Proceed to the subsequent sections in this guide for practical examples and a step-by-step approach to writing unit tests in React._

## Project Test Structure:

Create a ` __tests__` folder anywhere inside your `src` folder. Inside this folder, create a test file with a `.test.js` or .`test.jsx `extension. The test runner will automatically detect and execute these files.

## Writing the Test

Create a test file, for example, `FirstTest.test.jsx` inside the `__tests__` folder:

```javascript
// __tests__/FirstTest.test.jsx

// Tests for the FirstTest component

import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";

// Test Case: "Example 1 renders successfully"
test("Example 1 renders successfully", () => {
  // Step 1: Render the component
  render(<FirstTest />);

  // Step 2: Query for the h2 element
  const element = screen.getByText(/first test/i);

  // Step 3: Assert that the element is in the document
  expect(element).toBeInTheDocument();
});
```

## Understanding the Test

1. **_Import Required Methods_**:

   Import the `render` and `screen` methods from `@testing-library/react`.

2. **_Write the Test_**:
   Use the `test()` method to define an individual test. Provide a test name and a callback function.

3. **_Render the Component_**:

   Inside the test callback, use the `render` method to render the `FirstTest `component.

4. **_Query for an Element_**:

   Use the `screen` object to query for an element in the rendered component. In this example, we are querying for an h2 element containing the text "first test" (case-insensitive).

5. **_Assertion_**:

   Use the `expect` method to assert that the queried element is in the document. In this case, we expect the h2 element to be present.

   **Running the Test**

   Execute your test suite using your preferred test runner (often integrated with your build tool, like Jest). The test should pass if the h2 element is successfully rendered.
