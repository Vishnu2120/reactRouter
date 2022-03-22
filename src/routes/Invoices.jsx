import { useEffect, useState } from "react";
import { NavLink,Link,Outlet,useSearchParams,} from "react-router-dom";
import { getInvoices,deleteInvoice } from "../data";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { Button } from "react-bootstrap";
  export default function Invoices() {
    const [invoices,setInvoices]=useState([])
    let invoice;
    const getData = ()=>{
       invoice = JSON.parse(getInvoices());
      setInvoices(invoice)
    }

    useEffect(()=>{
      getData();
    },[invoice])

  
    console.log('-->',invoices)
    const deleteHandler = (index)=>{
      console.log('index-->',index)
      setInvoices(deleteInvoice(index))
    }
    //  let [searchParams, setSearchParams] = useSearchParams();
    return (
      <div style={{ display: "flex" }}>
        {/* <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                  
                
                {invoice.name}
              </NavLink>
            ))}
        </nav> */}
        <Container className="mt-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Website</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((each,index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{each.name}</td>
                <td>{each.address}</td>
                <td>{each.website}</td>
                <td><Link to={`/expenses/${each.number}`} ><Button>Edit</Button></Link></td>
                <td><Button onClick={()=>deleteHandler(index)} >Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
        <Outlet />
      </div>
    );
  }
  