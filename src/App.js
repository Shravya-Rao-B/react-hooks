import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/stateHook/ClassCounter'
import HookCounter from './components/stateHook/HookCounter';
import HookCounterTwo from './components/stateHook/HookCounterTwo'
import SetStateWithArray from './components/stateHook/SetStateWithArray';
import SetStateWithObject from './components/stateHook/SetStateWithObject';
import ClassCounterEffect from './components/effectHook/ClassCounterEffect';
import HookCounterEffect from './components/effectHook/HookCounterEffect';
import ClassCounterConditional from './components/effectHook/ClassCounterConditional';
import HookCounterConditional from './components/effectHook/HookCounterConditional';
import ClassMouse from './components/effectHook/ClassMouse';
import HookMouse from './components/effectHook/HookMouse';
import ContainerCleanup from './components/effectHook/ContainerCleanup';
import DataFetching from './components/effectHook/DataFetching';
import DataFetchingByID from './components/effectHook/DataFetchingByID';
import DataFetchingOnButtonClick from './components/effectHook/DataFetchingOnButtonClick';
// import ComponentA from './components/contextHook/ComponentA';
import ContextWithHook from './components/contextHook/ContextWithHook';
import CounterOne from './components/reducerHook/CounterOne';
import CounterTwo from './components/reducerHook/CounterTwo';
import CounterThree from './components/reducerHook/CounterThree';
import ComponentA from './components/reducerHook/ComponentA';
import ComponentB from './components/reducerHook/ComponentB';
import ComponentC from './components/reducerHook/ComponentC';
import DataFetchingWithState from './components/reducerHook/DataFetchingWithState';
import DataFetchingWithReducer from './components/reducerHook/DataFetchingWithReducer';
import FocusInputOnLoad from './components/refHook/FocusInputOnLoad';
export const UserContext = React.createContext();
export const WorkContext = React.createContext();
export const ReducerWithContextHook = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
switch (action){
  case 'increment' : 
  return state + 1;
  case 'decrement':
    return state - 1;
  case 'reset':
    return initialState
  default:
    return state;
}
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
       {/* <p>------------------------------------------Class Counter--------------------------------------</p>
      <ClassCounter />
      <p>------------------------------------------Hook Counter--------------------------------------</p>
      <HookCounter />
      <p>------------------------------------------Hook Counter using previous state--------------------------------------</p>
      <HookCounterTwo />
      <p>------------------------------------------Setting state with Object--------------------------------------</p>
      <SetStateWithObject />
      <p>------------------------------------------Setting state with Array--------------------------------------</p>
      <SetStateWithArray />
      <p>------------------------------------------effect with class comp--------------------------------------</p>
      <ClassCounterEffect />
      <p>------------------------------------------effect with use effect hook--------------------------------------</p>
      <HookCounterEffect />
      <p>------------------------------------------class counter conditional effect--------------------------------------</p>
      <ClassCounterConditional />
      <p>------------------------------------------conditional rendering with effect hook--------------------------------------</p>
      <HookCounterConditional />
      <p>------------------------------------------use effect only once class comp--------------------------------------</p>
      <ClassMouse />
      <p>------------------------------------------use effect only once hooks comp--------------------------------------</p>
      <HookMouse />
      <p>------------------------------------------clean up with use effect return function--------------------------------------</p>
      < ContainerCleanup /> 
  <DataFetching />
      <DataFetchingByID />
      <DataFetchingOnButtonClick />
      <UserContext.Provider value={"Shravya"} >
        <WorkContext.Provider value="Engineer">
           <ComponentA />
           <ContextWithHook />
        </WorkContext.Provider>
      </UserContext.Provider> 
  <CounterOne /> 
  <CounterTwo /> 
  <CounterThree /> 

  <ReducerWithContextHook.Provider value={{countState:count, countDispatch: dispatch}}>
    <div>{count}</div>
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </ReducerWithContextHook.Provider> 
  <DataFetchingWithState /> 
  <DataFetchingWithReducer /> */}
  <FocusInputOnLoad />
    </div>
  );
}

export default App;
