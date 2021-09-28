import axios from 'axios';
import React, { Component } from 'react';
import { Icon, Table, Button,Menu } from 'semantic-ui-react'
// import SalesEditPopup from './SalesEditPopup'
// import SalesDeletePopup from './SalesDeletePopup'
import SalesCreatePopup from './SalesCreatePopup';
import PaginationCreator from './PaginationCreator';
import SalesEditPopup from './SalesEditPopup'
import SalesDeletePopup from './SalesDeletePopup';

export class Sales extends Component {
    constructor(props) {

        super(props);
        console.log("sales valuee")
        this.state = {
            custom: [],
            cust:[],
            prodct:[],
            stre:[],
            loading: false,
           open:false,
           opensales:false,
           id:"",
           cus1:"",
           prd1:"",
           str1:"",
           dat1:"",
           deletepopup:false 
        };
        
    }



    componentDidMount() {
        console.log("componentdidmount")
        this.fetchSalesDetails();
        this.fetchCustomerDetails();
        this.fetchProductDetails();
        this.fetchStoreDetails();
    }

   



    fetchSalesDetails=()=> {
       console.log("entered the fetch details")
        this.setState({
            loading: true,
        })
        axios.get('Sales/getSales') // not case sensitive   
        .then((res) => {
            console.log("whats this!!!!!!")
               console.log(res.data)
                this.setState({
                    custom: res.data,
                    loading: false,

                })
             
            })
            .catch(
                err => {
                    console.log(err);
                })
    }
 fetchCustomerDetails=()=>
 {console.log("the entire customer values are")
     axios.get('customers/getcustomer') 
     .then(res=>{
         console.log("homee")
         console.log(res.data)
         this.setState({ cust:res.data})
        
        })
        
 }

 fetchProductDetails=()=>
 {console.log("the entire product values are")
     axios.get('products/getproduct') 
     .then(res=>{
         console.log("product homee")
         console.log(res.data)
         this.setState({ prodct:res.data})
        
        })
        
 }

 fetchStoreDetails=()=>
 {console.log("the entire product values are")
     axios.get('stores/getstore') 
     .then(res=>{
         console.log("product homee")
         console.log(res.data)
         this.setState({ stre:res.data})
        
        })
        
 }

refereshDetails=()=>{
   
    this.fetchSalesDetails(false)
}
 

createPopupFunction=(val)=>{
    
    
    this.setState({open:val})
    if(val===false)
    {
this.fetchSalesDetails()
    }
console.log("ahmm")

}


createPopupNewFunction=(val)=>{
    this.setState({open:val})
   }

editNewPopupFunction=(val)=>{
    this.setState({opensales:val})
    if(val===false)
    {console.log("entered the fetch page")
    this.fetchSalesDetails()
    }
}
editPopupFunction=(rid,cst,prd,str,dte)=>{
    console.log("the old function")
   console.log(dte)
    
    this.setState({opensales:true})
    this.setState({id:rid})
    this.setState({cus1:cst})
    this.setState({prd1:prd})
    this.setState({str1:str})
    this.setState({dat1:dte})
    console.log("the date value is " + this.state.dat1)
}


DeleteSalesDetails=(value,rId)=> {
    console.log("entering deletedetails")
    this.setState({deletepopup:value})
    this.setState({Id:rId})
    
    if(value===false)
    {console.log("entering")
     this.fetchSalesDetails();
    }}
    

      

    render() {
    
        const { custom, loading,open,cust,prodct,stre,opensales,cus1,prd1,str1,dat1,id,deletepopup} = this.state
      

        console.log(custom)

        if (loading) {
            return (
                <div> loading.... </div>
            )
        }
        else {
         
            return (
               
                <div margin='25px'>
                      <SalesCreatePopup open={open} custom={custom} cust={cust} prodct={prodct} stre={stre} createPopupFunction={this.createPopupFunction}/>                         
                    <SalesEditPopup open={opensales}custom={custom} cust={cust} prodct={prodct} stre={stre} editNewPopupFunction={this.editNewPopupFunction} cus1={cus1} prd1={prd1} str1={str1} dat1={dat1} id={id}/>
                    <SalesDeletePopup open={deletepopup} Id={this.state.Id} DeleteSalesDetails={this.DeleteSalesDetails}/>
                    <Button content='New Sales' primary  onClick={()=>this.createPopupNewFunction(true)} />
                   
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>

                                <Table.HeaderCell >Customer</Table.HeaderCell>
                                <Table.HeaderCell >Product</Table.HeaderCell>
                                <Table.HeaderCell >Store</Table.HeaderCell>
                                <Table.HeaderCell >Date Sold</Table.HeaderCell>
                                <Table.HeaderCell >Action</Table.HeaderCell>
                                <Table.HeaderCell >Dat</Table.HeaderCell>

                            </Table.Row>

                        </Table.Header>

                        <Table.Body>


                            {custom.map((r) => (

                                <Table.Row key={r.id}>
                                    <Table.Cell collapsing>
                                        {r.customer.name}
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        {r.product.name}
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        {r.store.name}
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        {r.dateSold}
                                    </Table.Cell>


                                    <Table.Cell collapsing textAlign='left'>
                                        <Button color='yellow' onClick={()=>this.editPopupFunction(r.id,r.customer.name,r.product.name,r.store.name,r.dateSold)} ><Icon name='edit' />Edit</Button>
                                    </Table.Cell>
                                    <Table.Cell collapsing textAlign='left'>
                                    <Button Icon='trash' onClick={()=>this.DeleteSalesDetails(true,r.id)} color='red'  ><Icon name='trash' />Delete</Button>
                                    </Table.Cell>
                                </Table.Row>

                            ))}



                        </Table.Body>

                        <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <PaginationCreator   custom={custom} value={"antony"} /> 
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
                    </Table>
                   
                </div>


            );
        }}}
