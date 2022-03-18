import {Outlet,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>React Router</h1>
     <nav  style={{borderBottom:"solid 1px",paddingBottom:"1rem"}}>
      <Link to="/Invoices">List</Link> | {""}
      <Link to="/Expenses">Add </Link>
     </nav>
     <Outlet/>
    </div>
  );
}

export default App;
