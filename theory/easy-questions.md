### Easy questions 

Q. *What is JSX ?*
A - basic: it is a XML-like syntax that allows you to render elements in the DOM while also writing your JavaScript code
A - advanced: it is syntactic sugar over ```React.createElement ()```

Q. *Why is it className and not class?*
A. Because class is a reserved word in JavaScript. It would cause a conflict to use it in React.
Q. *Why would it cause a conflict?*
A. Because React code is compiled down to JavaScript code and so the compiler would think you are trying to create a class and not style an element
Q. *And how does the code get "compiled down" to JavaScript?*
A. Typically, Babel is taking care of tarnspiling the code into JavaScript - if not Babel, a similar tool will accomplish the task

Q. Describe the data flow in React
A. The data flow in React is unidirectional, meaning it goes from top to bottom, but not the other way around.
