import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

const ProductDeletePopup=(props)=>
{
    console.log("entered child function")
  //const [open, setOpen] = React.useState(false)
  const{open,id,fetchProductDetails}=props
  console.log(open)
  console.log(id)
  console.log(fetchProductDetails)

const deleteProductDetails=()=>{
    axios.delete(`products/deleteproduct/${id}`)
    .then(res=>{
        console.log(res.data)
    fetchProductDetails()
    
    })

}






  return (
    <Modal
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
      open={open}
      //trigger={<Button>Show Modal</Button>}
    >
     <Modal.Header>Delete Product</Modal.Header>
      <Modal.Content image>
       
        <Modal.Description>
         Are yo sure?
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
                    <Button color='black' onClick={()=>fetchProductDetails()}  >  
                    cancel
                    </Button>
                   
                    <Button color='red' onClick={deleteProductDetails}>
                        delete
                    </Button>
                </Modal.Actions>
    </Modal>
  )
}

export default ProductDeletePopup
