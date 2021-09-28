import axios from 'axios'
import React ,{useState} from 'react'
import { Button, Header, Image, Modal,Form } from 'semantic-ui-react'


function ProductCreatePopup(prop) {
  const {open,fetchProductDetails}=prop

const[name,setName]= useState("")
let [price,setPrice]=useState("")



  const createProductDetails=()=>{

axios.post('products/postproduct',{
  Name:name,
  Price:price,
})
.then(res=>{
  console.log(res.data)
 fetchProductDetails()
})
.catch(err=>{console.log(err)})
  }

  return (
    <Modal
      
      open={open}
      
    >
   
    <Modal.Header>Create Product </Modal.Header>
    <Modal.Content image>
      
      <Modal.Description>
      <Form>
                          <Form.Field>
                              <label>Name</label>
                              <input placeholder='product name' onChange={(f)=>setName(f.target.value)}  />
                          </Form.Field>
                          <Form.Field>
                              <label>Price</label>
                              <input placeholder='price' onChange={f=>setPrice(f.target.value)} />
                          </Form.Field>
                      </Form>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    <Button color='black'  onClick={()=>fetchProductDetails()}  >
                      cancel
                  </Button>
                 
                  <Button color='green' onClick={()=>createProductDetails()} >
                      create
                  </Button>
      
    </Modal.Actions>
  </Modal>
  )
}

export default ProductCreatePopup