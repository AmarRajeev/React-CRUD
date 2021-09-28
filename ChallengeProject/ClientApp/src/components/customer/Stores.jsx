import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Table, Button,Menu } from 'semantic-ui-react'
import StoreEditPopup from './StoreEditPopup'
import StoreDeletePopup from './StoreDeletePopup'
import StoreCreatePopup from './StoreCreatePopup';
import PaginationCreator from './PaginationCreator';

export class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custom: [],
            loading: false,
            deleted:false,
            openEditCustomerModel:false,
            editid:0,
            val:false,
            createvalue:false,
            add:"",
            nam:""
           
        
        };
        this.fetchCustomerDetails = this.fetchCustomerDetails.bind(this);
        this.deleteCustomerDetail = this.deleteCustomerDetail.bind(this);
        this.editCustomerDetails= this.editCustomerDetails.bind(this);
    }



    componentDidMount() {
        console.log("componentdidmount")
        this.fetchCustomerDetails();
    }

    componentWillUnmount() {
        console.log("componentwillunmount");
    }



    fetchCustomerDetails() {
        this.setState({
            loading: true,
        })
        axios.get('stores/getstore') // not case sensitive   
        .then(({ data }) => {
               
                this.setState({
                    custom: data,
                    loading: false,

                })
             
            })
            .catch(
                err => {
                    console.log(err);
                })
    }

    deleteCustomerDetail(value,id)
    { console.log("value is"+value +"and id is"+id)

        // if(window.confirm('Are sure want to delete?')) 
          
            this.setState({val:value})
            this.setState({editid:id})
            if(value===false)
            {
                this.fetchCustomerDetails();
            }
           
            // axios.delete(`customers/deletecustomer/ ${id}`   ) // string interpolation
            //  .then (res =>{
            //      console.log(res.data)
            //      this.setState({deleted:true})
            //      this.fetchCustomerDetails();

            //     })
            //  .catch(err=> {console.log(err)})
            
            
           
       
                }


     editCustomerDetails(value,id,nam,add)
        {this.setState({openEditCustomerModel:value})
        this.setState({editid:id})
        this.setState({nam:nam})
        this.setState({add:add})
         if(value===false)
         this.setState({deleted:true})
         this.fetchCustomerDetails();
       
       
        }

        createCustomerDetails=(value)=>
        { 
        console.log("ooo")
        console.log(value)
            this.setState({createvalue:value})
              
               if(value===false)
               {console.log("entering")
                this.fetchCustomerDetails();
               }
        }

    render() {
        console.log("render");
        const { custom, loading,openEditCustomerModel,editid,val ,createvalue,nam,add} = this.state
      // console.log("deleteid is" +  deleteId)
      console.log("hola")
        console.log(custom)

        if (loading) {
            return (
                <div> loading.... </div>
            )
        }
        else {
         
            return (
               
                <div margin='25px'>
                                               
                     <StoreDeletePopup open={val} deleteId={editid}  deleteCustomerDetail={this.deleteCustomerDetail} />
                     
                     <StoreEditPopup  open={openEditCustomerModel} name={nam} address={add} editid={editid} editCustomerDetails={this.editCustomerDetails}  />
                   
                    <StoreCreatePopup open={createvalue} createCustomerDetails={this.createCustomerDetails}/>
                   
                    <Button content='New Store' primary onClick={()=>this.createCustomerDetails(true)} />
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>

                                <Table.HeaderCell >Name</Table.HeaderCell>
                                <Table.HeaderCell >Address</Table.HeaderCell>
                                <Table.HeaderCell >Actions</Table.HeaderCell>
                                <Table.HeaderCell >Actions</Table.HeaderCell>

                            </Table.Row>

                        </Table.Header>

                        <Table.Body>


                            {custom.map((r) => (

                                <Table.Row key={r.id}>
                                    <Table.Cell collapsing>
                                        {r.name}
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        {r.address}
                                    </Table.Cell>


                                    <Table.Cell collapsing textAlign='left'>
                                        <Button color='yellow' onClick={()=>this.editCustomerDetails(true,r.id,r.name,r.address)}><Icon name='edit' />Edit</Button>
                                    </Table.Cell>
                                    <Table.Cell collapsing textAlign='left'>
                                        <Button Icon='trash' color='red' onClick={()=> this.deleteCustomerDetail(true,r.id)}><Icon name='trash' />Delete</Button>
                                    </Table.Cell>
                                </Table.Row>

                            ))}





                        </Table.Body>

                        <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
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
        }



    }
}
