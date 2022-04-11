## Brief

### How to use the lesson sample code

There are two folders prepared for the lesson. 
- [Instructor's folder](./lesson-sample-code/instructor-demo-code)
- [Learners' folder](./lesson-sample-code/learners-practice-code)

Instructor to use the code provided for demonstration during the I DO segment. Learners will use the java file provided in the respective folder for practice during the WE DO segment.

### Any other announcements to instructors or learners

Instructors are to code from scratch. You may use the sample code in this repository as reference along the way.

---

## Part 1 - Create React App & Explore the project structure

Instructor to create a react app using [this](https://reactjs.org/docs/create-a-new-react-app.html) method.

Open terminal on VS Code.
Enter ```npx create-react-app my-first-app```

A project will be generated. Take the students for a tour to explain how JSX is being rendered into a DOM element.

Remember to perform ```npm run start``` to lift the app up. As you go through the remaining parts, let the app perform hot reload.

Clean up the folder directory by removing the following files:
- reportWebVitals.js
- setupTests.js
- App.test.js

Remove the code that relates to these files in ```index.js```.

---

## Part 2 - Demonstrate of JSX and Creation of To-do App

To accomplish this part, instructor should demonstrate using the following JSX to create a functional component. Edit ```App.js``` to accommodate the following JSXes.

```<h1>``` (Big title "Todo App")
```<ul>``` and ```<li>``` (List the tasks)
```<input type='checkbox'>``` (At the end of each task as done indicator)

---

## Part 3 - Demonstrating Fragments

This will be a simple demonstration of using <> and </> fragment. Fragments are used to group elements together in a parent node. Note how React would return errors if two parent nodes are used without fragments.

---

## Part 4 - Applying CSS

CSS can be applied to our App.js using a css file. All the selectors that work with plain HTML also can apply to JSX. Feel free to try to style the various elements using the App.css file.