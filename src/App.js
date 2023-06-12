import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";

import "./App.css";
import { useState } from "react";

function App() {
  const [acc, setacc] = useState({});
  const [contract, setcontract] = useState({});
  const [phoneno, setphoneno] = useState(null);
  const [receiverphoneno, setrecieverphoneno] = useState(null);
  const [receiveracc, setrecieveracc] = useState(null);
  const [amount, setamount] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Page1
              acc={acc}
              setacc={setacc}
              contract={contract}
              setcontract={setcontract}
            />
          }
        />
        <Route path="/connected" element={<Page2 acc={acc} />} />
        <Route
          path="/your_mobile_number"
          element={
            <Page3
              contract={contract}
              phoneno={phoneno}
              setphoneno={setphoneno}
              acc={acc}
            />
          }
        />
        <Route
          path="/mobile_connected_to_address_confirmation"
          element={<Page4 acc={acc} phoneno={phoneno} />}
        />
        <Route
          path="/reciever_mobile_number"
          element={
            <Page5
              receiverphoneno={receiverphoneno}
              setrecieverphoneno={setrecieverphoneno}
              acc={acc}
              setrecieveracc={setrecieveracc}
              contract={contract}
            />
          }
        />
        <Route
          path="/confirm_transaction_details"
          element={
            <Page6
              amount={amount}
              setamount={setamount}
              receiverphoneno={receiverphoneno}
              acc={acc}
              contract={contract}
              receiveracc={receiveracc}
            />
          }
        />
        <Route
          path="/transaction_confirmed"
          element={<Page7 amount={amount} receiverphoneno={receiverphoneno} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
