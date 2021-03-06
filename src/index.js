import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Hoc from "./hoc/Hoc";
import Demo from "./useReducerApiCall/Demo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} /> 
    <Route path="expenses/:invoiceId" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}/>
    <Route path="hoc" element={<Hoc />}/>
    <Route path="demo" element={<Demo/>}/>
  </Route>
  <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    ></Route>
</Routes>
  </BrowserRouter>,
  rootElement
);