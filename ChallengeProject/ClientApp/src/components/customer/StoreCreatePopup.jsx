import React,{useState} from 'react'
import axios from 'axios'
import { Button, Header, Image, Modal,Form } from 'semantic-ui-react'

const StoreCreatePopup=(props)=> {
  //const [open, setOpen] = React.useState(false)
const {open,createCustomerDetails}=props
 const[name,setName]= useState("")
 const[address,setAddress]=useState("")

const CreateContent =()=>
{
axios.post('stores/poststore',{
    Name:name,
    Address:address

})
.then((res)=>{ 
    console.log("hell")
    console.log(res.data)
    createCustomerDetails(false)
})
.catch(err =>{console.log(err)})
}





return (
    <Modal
    
      open={open}
   >
      <Modal.Header>Create Store </Modal.Header>
      <Modal.Content image>
        
        <Modal.Description>
        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Name' onChange={(e)=>setName(e.target.value)}  />
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input placeholder='Address' onChange={(e)=>setAddress(e.target.value)} />
                            </Form.Field>
                        </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      <Button color='black' onClick={()=>createCustomerDetails(false)} >
                        cancel
                    </Button>
                   
                    <Button color='green' onClick={()=>CreateContent()} >
                        create
                    </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default StoreCreatePopup
