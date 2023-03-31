import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <p style={{ textDecoration: "underline", color: "red", fontSize: "24px", fontWeight: "bold" }}>Question No.2 Props vs state</p>
<h4 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}>
  answer: Props are like instructions given by a teacher to a student. When a teacher gives instructions to a student, the student has to follow them. Similarly, when a component in React receives props, it has to follow those instructions and use them to render something.
  <br />
  State is like the feelings of a person. Just like how a person's feelings can change over time, the state of a component can change over time. When the state of a component changes, it can trigger a re-render, just like how a person's mood can change their behavior.
  <br />

</h4>

{/* question 02 */}

<p style={{ textDecoration: "underline", color: "red", fontSize: "24px", fontWeight: "bold" }}>Question No.2 How does useState work?</p>
<h4 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}>
  answer: useState is a special tool in React that helps us save data in our app. Imagine we have a box, and we want to put some toys in it. We can use useState to create a new box, and then put toys inside it. <br />
  Every time we want to add or take away toys, we can use useState to do that. It's like having a magical toy box that we can always change and update whenever we want!
  
</h4>



{/* question 02 */}

{/* question 03 */}

<p style={{ textDecoration: "underline", color: "red", fontSize: "24px", fontWeight: "bold" }}>Question No.3 Purpose of useEffect other than fetching data.?</p>
<h4 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}>
  answer: The useEffect hook in React is used to perform side effects in a functional component. Side effects refer to any actions that affect things outside the scope of the current function, such as manipulating the DOM, setting timers or intervals, subscribing to events, and more.

In addition to fetching data, useEffect can be used to perform a variety of other tasks. For example, it can be used to update the title of a page based on some state, to change the class or style of an element, to set up event listeners or subscriptions, to handle authentication or authorization, and so on.
  
</h4>




{/* question 03 */}
{/* question 04 */}

<p style={{ textDecoration: "underline", color: "red", fontSize: "24px", fontWeight: "bold" }}>Question No.4 How Does React work?</p>
<h4 style={{ fontWeight: "bold", fontSize: "1.2rem", color: "green" }}>
  answer: React is a JavaScript library that helps developers build user interfaces for web applications. It works by allowing developers to break down the user interface into reusable components. These components can be used to build complex interfaces, and React handles updating the parts of the interface that have changed. This makes it easier to build and maintain large web applications. React also uses a virtual DOM (Document Object Model) to improve performance by minimizing the number of changes that need to be made to the actual DOM. Overall, React simplifies the process of building user interfaces for web applications.
  
</h4>
{/* question 04 */}











      </div>
    </footer>
  );
};

export default Footer;
