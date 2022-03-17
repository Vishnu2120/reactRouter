import {Outlet,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Book Keeper</h1>
     <nav  style={{borderBottom:"solid 1px",paddingBottom:"1rem"}}>
      <Link to="/Invoices">Invoices</Link> | {""}
      <Link to="/Expenses">Expenses</Link>
     </nav>
     <Outlet/>
    </div>
  );
}

export default App;
