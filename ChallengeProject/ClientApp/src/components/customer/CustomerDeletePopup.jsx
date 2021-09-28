import React from 'react'
import axios from 'axios'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const CustomerDeletePopup=(props)=> {

const {open, deleteId , deleteCustomerDetail} = props

console.log("delete id value is "+ deleteId)


const confirmDelete=()=>{
  
axios.delete(`customers/deletecustomer/ ${deleteId}`   ) // string interpolation
             .then (res =>{
                 console.log(res.data)
                 
                 deleteCustomerDetail(false)
                 

             })
           .catch(err=> {console.log(err)})
}



  return (
    <Modal
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
      open={open}
     // trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Delete Customer</Modal.Header>
      <Modal.Content image>
       
        <Modal.Description>
         Are yo sure?
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
                    <Button color='black' onClick={()=>deleteCustomerDetail(false)}  >
                        cancel
                    </Button>
                   
                    <Button color='red' onClick={confirmDelete}>
                        delete
                    </Button>
                </Modal.Actions>
    </Modal>
  )
}

export default CustomerDeletePopup