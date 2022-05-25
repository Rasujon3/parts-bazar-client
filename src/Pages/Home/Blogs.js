import React from "react";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-primary  text-xl font-bold uppercase text-center my-2">
        Question & Answer
      </h3>

      {/*  1 */}
      <div
        tabIndex="0"
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        {/* Question 1 */}
        <div className="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div className="collapse-content">
          <ul className="list-decimal">
            <li className="ml-6">
              Keeping component state local where necessary.
            </li>
            <li className="ml-6">
              Memoizing React components to prevent unnecessary re-renders.
            </li>
            <li className="ml-6">
              Code-splitting in React using dynamic import().
            </li>
            <li className="ml-6">Windowing or list virtualization in React.</li>
            <li className="ml-6">Lazy loading images in React.</li>
          </ul>
        </div>
      </div>

      {/* 2 */}
      <div
        tabIndex="0"
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2"
      >
        {/* Question 2 */}
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <ul className="list-decimal">
            <li className="ml-6">Local state.</li>
            <li className="ml-6">Global state.</li>
            <li className="ml-6">Server state.</li>
            <li className="ml-6">URL state.</li>
          </ul>
        </div>
      </div>

      {/*  3 */}
      <div
        tabIndex="0"
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2"
      >
        {/* Question 1 */}
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div
        tabIndex="0"
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2"
      >
        {/* Question 4 */}
        <div className="collapse-title text-xl font-medium">
          Why you do not set the state directly in React?
        </div>
        <div className="collapse-content">
          <p>
            React will then look at the virtual DOM, it also has a copy of the
            old virtual DOM, that is why we shouldn't update the state directly,
            so we can have two different object references in memory, we have
            the old virtual DOM as well as the new virtual DOM.
          </p>
        </div>
      </div>

      {/* 6 */}
      <div
        tabIndex="0"
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-2"
      >
        {/* Question 6 */}
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div className="collapse-content">
          <ul className="list-disc">
            <li className="ml-6">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff.
            </li>
            <li className="ml-6">
              One of the benefits of unit tests is that they isolate a function,
              class or method and only test that piece of code. Higher quality
              individual components create overall system resiliency. Thus, the
              result is reliable code. Unit tests also change the nature of the
              debugging process.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
