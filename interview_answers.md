# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A stateful component can hold onto data that other components on the application can access. In a stateful component, state can be created, read, deleted, and updated. When the state updates, it re-renders again. State is passed a props throughout components, meaning that when state is changed, the props will change too - this is what makes a React app "reactive". "non visual logic"
A functional component is a stateless component; it is often used to render data into ui.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount function is called during the Mounting/Birthing phase, invoked only once after render and is used fro async data
    componentWillUpdate is called during the Updating/Growth phase, any change to state/props causes re-rendering triggers update


3. Define stateful logic.
Any code that uses state. Stateful logic provides behind the scene functionality or non-visual logic that can manipulate state.

4. What are the three step of creating a successful test? What is done in each phase?
Act -> render component
Arrange -> mimic user event/behavior or extract specific elements
Assert -> verify that expected response exists (or intentionally doesn't exist💁‍♀️‍)