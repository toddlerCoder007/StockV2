# 2.1 Introduction to React JS

## Preparation

Fork and clone the lesson repo from GitHub.  

## Part 1 - Create React App

[Create React App Reference](https://reactjs.org/docs/create-a-new-react-app.html)

Open terminal on VS Code and enter the following command: 
```
npx create-react-app my-app
```

A React project will be generated in the `my-app` folder. Take a look at how JSX is being rendered into DOM element.

Change to the app folder:
```
cd my-app
```
Start the app:
```
npm start
```
Once the React app has compiled succesfully, the server will be up and you can view the app in your browser at `http://localhost:3000`. From this point onwards, the app automatically reload whenever you save any new changes to your source code. 

While the server is running, port:3000 will be reserved until you 'kill' the server by  CTRL-C. If you start another React app server with `npm start`, you will be asked to choose a different port number.

Clean up the project folder by removing the following files:
```
src/reportWebVitals.js
src/setupTests.js
src/App.test.js
src/logo.svg
```
Remove all code that refers to the above files in `index.js` and `App.js`.

Remove all JSX code in between the `<div>` elements in `App.js`.

```js
// App.js

import './App.css';
function App() {
  return (
    <div className="App">
      Insert your own JSX code here...
    </div>
  );
}

export default App;
```

Save all files and run `npm start` to make sure the template works and you're good to go!

### Activity (5 mins)

Modify `App.js` to include a short profile about yourself (3 to 5 sentences about yourself and your aspirations)

## Part 2 - JSX Demo (To Do List)

To accomplish this part, instructor should demonstrate using the following JSX to create a functional component. Edit `App.js` to accommodate the following JSX code.

```html
  <h1>                      // Big title "Todo App"
  <div></div>               // List item
  <input type='checkbox'>   // Check box for each task
  <label>                   // Task label
```
### Demo

Create a `MyComponent` component and import into `App.js`

> Instructors may refer to `code/my-app/src/MyComponent.js` for code sample

### Activity (10 mins)

Create a `TodoItem` component in the `./src` folder and import it into `App.js`. Use the JSX learned in this section to create the component.

> Instructors may refer to `code/my-app/src/App.js` for code sample

## Part 3 - JSX Rules and Features

### Fragments 

This will be a simple demonstration of using `<>` and `</>` fragment. Fragments are used to group elements together in a parent node. Note how React would return errors if two parent nodes are used without fragments. Normally, we would use `<div></div>` tags for JSX fragments.

### *camelCase* Code Style

JSX is converted into native JavaScript (JS) and attributes written in JSX that will become keys in JS objects. As JS has limitation on variable names, e.g. they cannot contain dashes or reserved words. HTML attributes needs to be adapted to work around these limitations: 
- HTML `class` attribute shall be `className`, to avoid clashing with reserved JS `class` keyword.
- Dashes shall be removed and replaced with an initial capital, e.g. `background-color` shall be `backgroundColor`.

### Self-closing Tags

Not really a JSX rule, but self-closing tags are quite commonly used when inserting components with no content in React. It's basically a short-hand way of writing the closing tag, for example:
```html
<MyComponent></MyComponent>

//...is the same as ...

<MyComponent />
```

### Embedding JS Expressions

In JSX, you can combine standard HTML syntax with JS, by enclosing the JS code within curly braces `{}`. 

Here's an example of using JS to do some calculations:

```js
...
return (
  <div>
    <p>Here's a math expression: 23 * 78 is {23 * 78}</p>
  </div>
);

```
### Activity (10 mins)

1. Create a `MyExpressions` component and import into `App.js` (see above for a recap).
2. Use embedded JS to code the following expressions in your return JSX statement:
   - A math operation, e.g. +, -, * or /
   - A math library function, e.g. Math.sqrt()
   - Conditional/ternary operator
   - Looping with array methods, e.g. array.map(), array.forEach()

> Instructors may refer to `code/my-app/src/MyExpressions.js` for code sample
 
## Part 4 - Applying CSS

There are many ways to apply CSS to your React app:
- Global `App.css` stylesheet in `App.js`
- Inline styling per element
- CSS objects, e.g. define a styleObject and apply `style={styleObject}` on element
- CSS module stylesheets (see next below)

All the selectors that work with plain HTML also can apply to JSX. Feel free to try to style the various elements using the App.css file. Remember to Use camelCase when naming React styles.

### Using CSS Modules

Create a CSS module file with a `.module.css` extension, e.g. `MyComponent.module.css`. Write regular CSS in your `.module.css` file.
```css
.bodyText {
  color: blue;
  background-color: yellow;
  padding: 20px;
  border: 5px solid fuchsia;
}
```
Import the CSS module file into your component:

```js
  // In MyComponent.js file
   
  import styles from './MyComponent.module.css'
  function MyComponent() {
    return (
      <>
         <div className={styles.bodyText}>Using CSS Modules (component.module.css).</div>
      </>
    )
  }
```
> Instructors may refer to `code/my-app/src/MyComponent.module.css` for code sample

CSS code inside a module is available only to the component that imports it, therefore there is no risk global name conflicts.

### Activity (5 mins)

Add styling to `Todo.js` and `App.js` using CSS Modules.

> Instructors may refer to `code/my-app/src/` for code samples
