import React ,{useState}from 'react'
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react'
import axios from 'axios'
import ProductDeletePopup from './ProductDeletePopup'
import ProductEditPopup from './ProductEditPopup'
import ProductCreatePopup from './ProductCreatePopup'

const ProductTable = (props) => {
  const {value,fetchProductDetails}=props
  //console.log("hi i am the new value"+ product)
  console.log("the new value is ")
  console.log(value)
  const[open,setOpen]=useState(false)
  const[openedit,setOpenEdit]=useState(false)
  const[opencreate,setOpenCreate]=useState(false)
  const[id,setid]=useState("")
  const[eid,setEid]=useState("")
  const[ename,setEname]=useState("")
  const[eprice,setEprice]=useState("")
  console.log(open)


const parentToChildDelete=(id)=>
{console.log("entered parent function")
setOpen(true)
setid(id)
//console.log("the value of open is" + open)
}

const parentToChildEdit=(eid,ename,eprice)=>{
    setOpenEdit(true);
    setEid(eid)
    setEname(ename)
    setEprice(eprice)
}

const parentToChildCreate=()=>{
setOpenCreate(true)
}
  return(
<div>
    <ProductCreatePopup open={opencreate} fetchProductDetails={fetchProductDetails}/>
   <ProductEditPopup open={openedit} id={eid} name={ename} price={eprice} fetchProductDetails={fetchProductDetails}  /> 
    <ProductDeletePopup open={open} id={id} fetchProductDetails={fetchProductDetails}/>
    <Button content='New Product' primary onClick={()=>parentToChildCreate()}  />
  <Table celled>
    <Table.Header>
       
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
   
    <Table.Body>
    {value.map((r)=>(
      <Table.Row key={r.id}>
         <Table.Cell>{r.name}</Table.Cell>
        <Table.Cell>{r.price}</Table.Cell>
        <Table.Cell collapsing textAlign='left'>
            <Button color='yellow' onClick={()=>parentToChildEdit(r.id,r.name,r.price)} ><Icon name='edit'/>Edit</Button>
            </Table.Cell>
            <Table.Cell collapsing textAlign='left'>
            <Button color='red' onClick={()=>parentToChildDelete(r.id)}><Icon name='trash'/>Delete</Button>
                                        
                                    </Table.Cell>
      </Table.Row>
    ))}
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </div>
  );

    }
export default ProductTable 