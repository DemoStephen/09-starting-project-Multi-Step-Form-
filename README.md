# Multi Step Form

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
    -[DeskTop View](#desktop-view)
    -[Mobile View](#mobile-view)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

#### DeskTop View

![](./src/styles/desktop-design-step-1.jpg step-1)
![](./src/styles/desktop-design-step-2-monthly.jpg step-2)
![](./src/styles/desktop-design-step-3-monthly.jpg step-3)
![](./src/styles/desktop-design-step-4-monthly.jpg step-4)
![](./src/styles/desktop-design-step-5.jpg step-5)

#### Mobile View

![](./src/styles/mobile-design-step-1.jpg step-1)
![](./src/styles/mobile-design-step-2-monthly.jpg step-2)
![](./src/styles/mobile-design-step-3-monthly.jpg step-3)
![](./src/styles/mobile-design-step-4-monthly.jpg step-4)
![](./src/styles/mobile-design-step-5.jpg step-5)

### Links

- Solution URL: [codewithstephen.com/multistepform](https://github.com/demostephen/09-starting-project(multi-step-form))
- Live Site URL: [codewithstephen.com/multistepform](https://github.io/09-starting-project(multi-step-form))

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- CSS

### What I learned

```jsx
import "./App.css";
import Form from "./src/components/Form";
import SideBar from ".src/components/Sidebar";
import ThankYou from ".src/components/ThankYou";
export default function App() {
  return (
    <>
      <main className="d-flex">
        <SideBar />
        <section className="section">
          <Form />
          <ThankYou />
        </section>
      </main>
    </>
  );
}
```

## Author

- Website - [codewithstephen.com](https://www.codewithstephen.com)
- Frontend Mentor - [@codewithstephen](https://www.frontendmentor.io/profile/codewithstephen)
- Twitter - [@codewithstephen](https://www.twitter.com/codewithstephen)
