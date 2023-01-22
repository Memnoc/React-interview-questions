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

Q. *Describe the data flow in React*
A. The data flow in React is unidirectional, meaning it goes from top to bottom, but not the other way around. The basic way in which we pass data from parent to child is with props. However, we can and should avoids props drilling by using other techniques, such as hooks.
B. As an expansion to the first question, global state, redux and context are all things you can mention.

Q. *How would you delay an API call until the component is mounted?*
A. The traditional in a class component is exploiting the component life cycles, specifically, ```componentDidMount()```. This is a good chance to talk about components lifecycle and flex a bit there.
B. Because now the most accepted way is using functional components, you can talk about hooks, particularly, ```useEffect()```

Q. *Should you use ternary or the && operator to conditionally render a component?*
A. You should use ternaries. The && operator produces falsy results and this could be causing rendering issues, such as rendering 0 on the page. (dig more into this)

