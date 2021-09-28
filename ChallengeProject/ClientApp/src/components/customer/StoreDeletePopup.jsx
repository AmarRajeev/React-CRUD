import React from 'react'
import axios from 'axios'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const StoreDeletePopup=(props)=> {

const {open, deleteId , deleteCustomerDetail} = props

console.log("delete id value is "+ deleteId)


const confirmDelete=()=>{
  
axios.delete(`stores/deletestore/ ${deleteId}`   ) // string interpolation
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
      <Modal.Header>Delete Store</Modal.Header>
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

export default StoreDeletePopup