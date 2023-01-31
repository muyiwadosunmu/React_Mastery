import { useState } from "react";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RefsDemo />
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
  );
}

export default App;
