import { Modal,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import App from '../App.css';
function PopUp(props) {
    console.log("testForprops",props)
    const [data, setData] = useState('');
    // const [addrInput, setAddress] = useState('');
    // const [webaddrInput, setWeb] = useState('');

    useEffect(()=>{
        if(props.popupData !== undefined){
            setData(props.popupData)
        }
    },[props.popupData])

    const handleChange = (e) =>{
        setData(e.target.value)
    }
    const save =() =>{
        props.updateChanges(data)
        
    }
    return (
      <>
        <Modal show={props.open} onHide={props.close}>
          <Modal.Header >
            <Modal.Title>Edit data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="container">
           
           <div><label className="label-json">Name:</label><input onChange={handleChange}  className="Input-json" type="text" value={data.name}></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Address:</label><input onChange={handleChange} className="Input-json" type="text" value={data.address}></input></div>
           <div className="dummy"></div>
           <div><label className="label-json">Website:</label><input  onChange={handleChange} className="Input-json" type="text" value={data.website}></input></div>
           {/* <div className="dummy"></div>
           <div><label className="label-json"></label><Link to='/invoices'><Button onClick={()=>onOnclickHandler()}>Submit</Button></Link></div> */}
         </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.Close}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>save()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default PopUp