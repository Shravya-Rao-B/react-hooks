### What are React hooks
Hooks is a special function that lets us hook into React features
Allows us to use React features without class
eg.State of component
Hooks don't work inside a class

### WHy Hooks?
1. Understand this keyword in class component
2. Learn to bind event handlers in class component
3. Classes don't minify well
4. To share a stateful logic in a better way
5. All the related code can be placed together. In the class based component, we need to write code as per the structure of lifecycle hooks. Becuase of staeful logic cannot break components intpo smaller ones.
for eg: Data Fetching : in ComponentDidMount and ComponentDidUpdate
        Event Listeners: in CopmonentDidmount and componentWillMount
Two unrelated code of fetching and eventListening happpens in same ComponentDidMount lifecycle hook
6. Previously could not use stateful logic inside functional component. Now with hooks we can use. 
7. Hooks are totally optional. We can continue to use class components.
8. We can have one React project with both hooks and class components.

### When and how to use hooks
#### Only call at the top level
Don't call hooks inside loops, conditions and nested functions
#### Only call hooks from React functions
Call them within React functional components and not just any regular Javascript functions

### useState setter hook will not automatically merge the object properties
In a class component implementation, setState will automatically merge the objects
In hooks this needs to be handled manually by using spread operator.

### Why UseEffect
Before useEffect we performed side effects in React life cycle method componentDidMount() and componentDidUpdate().

side effect 1: If we need update the document title to the current cunter value.
for initial render, document is clicked 0 times 
componentDidMount(){
        document.title = `you clicked title ${this.state.count} times`;
}
When count value increments, we need to update the document title again. This happens in another lifecycle hook.
componentDidUpdate(){
        document.title = `you clicked title ${this.state.count} times`;
}
Same code needs to be written twice, in different parts.

side effect 2: Considering another usecase of timer. String "hello" needs to be rendered every 5 seconds.

componentDidMount(){
        document.title = `you clicked title ${this.state.count} times`;
        this.interval = setInterval(this.tick, 1000);        
}
componentDidUpdate(){
        document.title = `you clicked title ${this.state.count} times`;
}
componentWillUnmount(){
        clearInterval(this.interval)
}
Same code repeats in different parts.
Code related to timer setInterval and clearInterval is put to 2 different parts.

Theree lifecyle methods can be replaced by useEffect hook.

### What is context
If we had nested component sharing of data happens to be passing the value through as prop through parent. If the component is deeply nested we would need to pass it through all levels.

eg. Lets say we have a structure as below and if we need to display the user logged in, in pages of compA, comp D and Comp F we will
have to pass through the all the parents.

                                        App {userName}
---------------------------------------------------------------------------------------
|                                       |                                               |
|                                       |                                               |
Comp A                               Comp B                                          Comp C
                                        |                                               |
                                        |                                               |
                                     Comp D                                          Comp E
                                                                                        |
                                                                                        |
                                                                                     Comp F   


### Context Using Context API
1. We create a context by using createContext method
2. We provide the context value at a high level of the component tree
3. We consume the context value in the render form   

### Context Using context hook
The first two steps remains the same as context API. Only the consumtion is made easy.
1. We create a context by using createContext method
2. We provide the context value at a high level of the component tree
3. We consume the context value by using useContext hook as const contextVal = useContext(ContextName);

### UseReucer hook
Its a hook for state management
its a primitive type of usestate. Usestate is built on useReducer
useReducer hook takes an initialState and a reducer function.useReducer(reducer,initialState)
The reducer function takes 2 arguments, current state and action. reducer(currentState, action) and returns the new state.

### UseState vs UseReducer
##### Based on the type of state
If the state is number, string, Boolean useState is better. eg. count value
If its an Object or an Array useReducer is better eg. Person object with all person details

##### Based on Number of transitions
If need to update one or two state Variables use useState.
If we see more setState calls, useReducer should be better.

##### How related state transitions are
If all or most of the states need to be updated as part of one action, then useReducer is a better choice. As all these states are related to one action.
Eg. data fetch and loader.
When the fetching is in progress, we need to set loading to true, data and error to empty values.
When the fetch is a sucess, we need to update data, loading to false and error message to null
When there is an error, we need to set/reset all three.

##### local vs global state
if  state is to be managed locally useState can be used.
If to be managed globally we can use useReducer. With useReducer hook, we can pass one dispatch function down the components and sets all the states. Whereas for by using useState,we have to pass  setState function for each state.

##### Buisiness Logic
If its a simple business logic use UseState
UseReducer is for complex logic, so that all the transitions and context can be maintained in one reducer function

