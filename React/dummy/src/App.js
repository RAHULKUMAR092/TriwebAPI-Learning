
import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
  const [modalOpne,setModalOpne] = useState(false);

  const modalCloseHandler = ()=>{
    setModalOpne(false);
  }

  const onpeModalHandler =()=>{
    setModalOpne(true);
  }

  return (
    <div>
      <h1>He its my application</h1>
      {modalOpne?<FirstComponent owner="Rahul" reason="for demo" closeModal={modalCloseHandler}/>:null}
      {modalOpne?<Backdrop/>:null}

      <button onClick={onpeModalHandler}>Opne Modal</button>
      

      
      
    </div>
  );
}

export default App;
