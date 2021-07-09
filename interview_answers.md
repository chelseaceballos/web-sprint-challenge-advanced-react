# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A stateful component is a component level storage object that holds onto data that other components might need access to. This state being passed into multiple levels is what makes React reactive.
A functional component is what it sounds like, it is used for functionality and not necessarily carry state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
ComponentWillMount will be called after the render and is only invoked once in the lifecycle and is used for async data. During the birthing/ mounting phase
ComponentWillUpdate is called in the growth/ updating phase. Updates are caused by changes to props or state causing a "re-rendering" of a component(s).

3. Define stateful logic.
Stateful logic is code that uses state. Non-visual logic that manipulates state in a component (behind the scene functionality)

4. What are the three step of creating a successful test? What is done in each phase?
The Three stages are
    // Arrange- render the component successfully ex. render(<App />)

    // Act, lay out the actions you want to test. Does the user fill out a form for example? use userEvent.type/click

    // Assert - verify using "expect" that what you are testing is or is not on page.
