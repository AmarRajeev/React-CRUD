import React, {useState} from 'react'
import { Button, Header, Image, Modal,Form } from 'semantic-ui-react'
import axios from 'axios'
import { setConstantValue } from 'typescript'


const ProductEditPopup=(props)=> {
  //const [open, setOpen] = React.useState(false)
const{open,id,name,price,fetchProductDetails}=props

console.log("passed vals are"+  name +"" + price )


const[nme,setNme]= useState("")
const[pre,setPre]= useState("")



const editProductDetails=()=>{

axios.put(`products/putproduct/${id}`,{

    Id:id,
    Name:nme,
    Price:pre
})
.then(res => {
    console.log("rome")
    console.log(res.data)
    fetchProductDetails()
})
.catch(err =>{console.log(err)})

}
  



return (
    <Modal

                // onClose={() => setOpen(false)}
                // onOpen={() => setOpen(true)}
                open={open}
            //trigger={<Button>Show Modal</Button>}
            >

                <Modal.Header>Edit Product</Modal.Header>
                <Modal.Content >

                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder={name} onChange={e=>setNme(e.target.value)}  />
                            </Form.Field>
                            <Form.Field>
                                <label>Price</label>
                                <input placeholder={price} onChange={e=>setPre(e.target.value)} />
                            </Form.Field>
                        </Form>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={()=>fetchProductDetails()}>
                        cancel
                    </Button>
                   
                    <Button color='green' onClick={()=>editProductDetails()} >
                        edit
                    </Button>
                </Modal.Actions>
            </Modal>
  )
}

export default ProductEditPopup