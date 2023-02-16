import React,{ useState, useReducer } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.modules.css?inline";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import Fragments from "./components/Fragments";
import Columns from "./components/Columns";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import HookCounter from "./Hooks/HookCounter";
import HookCounter2 from "./Hooks/HookCounter2";
import HookUseStateObj from "./Hooks/HookUseStateObj";
import HookUseStateArray from "./Hooks/HookUseStateArray";
import HookUseEffect from "./Hooks/HookUseEffect";
import ClassCounteruseEffect from "./components/ClassCounteruseEffect";
import CassUseEffectOnce from "./components/CassUseEffectOnce";
import HookMouse from "./Hooks/HookMouse";
import MouseContforUseEffectCleanUp from "./Hooks/MouseContforUseEffectCleanUp";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHooksCounter from "./Hooks/IntervalHooksCounter";
import DataFetching from "./Hooks/DataFetching";
import DataFetchingSinglePost from "./Hooks/DataFetchSinglePost";
// import ComponentC from "../src/Hooks/ContextHooks.jsx/ComponentC";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
import UseReducerCounterOne from './Hooks/UseReducerCounterOne'
import UseReducerCounterTwo from "./Hooks/UseReducerCounterTwo";
import UseReducerCounterThree from "./Hooks/UseReducerCounterThree";
import ComponentAforReduContext from "./Hooks/ContextHooks/ComponentAforReduContext";
import ComponentBforReduContext from "./Hooks/ContextHooks/ComponentBforReduContext";
import ComponentCforReduContext from "./Hooks/ContextHooks/ComponentCforReduContext";
// export const CountContext = React.createContext()
import DataFetchwithUseState from "./Hooks/ContextHooks/DataFetchwithUseState";
import DataFetcwithUseReducer from "./Hooks/ContextHooks/DataFetcwithUseReducer";


const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
function App() { 
  // const [count, setCount] = useState(0); 
  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    // <CountContext.Provider value={{countState:count, countDispatch:dispatch }}>
    <div className="App">
      <DataFetchwithUseState/>
      <DataFetcwithUseReducer/>
      {/* <ComponentAforReduContext/>
      <ComponentBforReduContext/>
      <ComponentCforReduContext/> */}
      {/* <UseReducerCounterThree/> */}
      {/* <UseReducerCounterTwo/> */}
      {/* <UseReducerCounterOne/> */}
      {/* <UserContext.Provider value={'Muyiwa'}>
        <ChannelContext.Provider value={'CodeHub'}>
          <ComponentC/>
        </ChannelContext.Provider> */}
      {/* </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingSinglePost/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHooksCounter/> */}
      {/* <MouseContforUseEffectCleanUp/> */}
      {/* <HookMouse/> */}
      {/* <ClassCounteruseEffect/> */}
      {/* <CassUseEffectOnce/> */}
       {/* <HookUseEffect/> */}
       {/* { <HookUseStateArray/>} */}
      {/* <HookUseStateObj/> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Fragments /> */}
      {/* <Table /> */}
      {/* <Columns /> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <EventBind /> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Message/> */}
      {/* <Counter/>
      <Greet name="Muyiwa" heroName="backend beast"/> 
      <Welcome name="Muyiwa" heroName="frontend badass" />  */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
