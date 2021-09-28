import React, { useState } from 'react'
import { Button, Modal, Form, Dropdown, } from 'semantic-ui-react'

import axios from 'axios'


import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import moment from "moment";

const SalesEditPopup = (props) => {

    const { open, custom, cust, prodct, stre, editNewPopupFunction, cus1, prd1, str1, dat1, id } = props


    console.log("hcjhdsbcbdjcbdjcbdjhcbd")
    console.log(cus1)

    const [cus, setCus] = useState(cus1)

    let [pro, setPro] = useState(prd1)
    const [stor, setStor] = useState(str1)
    const [dto, setDto] = useState(dat1)

    console.log("the blody values are ")
    console.log(pro)

    const customerDropDown = cust.map((r) => (
        {
            key: r.id,
            text: r.name,
            value: r.id,


        }))
    const productDropDown = prodct.map((r) => (
        {
            key: r.id,
            text: r.name,
            value: r.id,


        }))
    const storeDropDown = stre.map((r) => (
        {
            key: r.id,
            text: r.name,
            value: r.id,


        }))



    //axios gona come here+-
    const createSale = () => {
        let d = moment(Date.now()).format("YYYY-MM-DD ")

        axios.put(`sales/putsales/${id}`, {
            Id: id,
            Productid: pro,
            Customerid: cus,
            Storeid: stor,
            DateSold: dto
        })
        .then(res=>{console.log(res)
            editNewPopupFunction(false)
        
        })

        .catch(err=> {console.log(err)})

       
    }

    //date stuff
    const [date, setDate] = useState(null);

    console.log("the entered date is")


    const handleDropdownCustomer = (event, data1) => {
        console.log("the new way")
        console.log(data1.value)

        setCus(data1.value)

    };

    const handleDropdownProduct = (event, data2) => {
        console.log("the new way")
        console.log(data2.value)

        setPro(data2.value)

    };

    const handleDropdownStore = (event, data3) => {
        console.log("the new way")
        console.log(data3.value)
        setStor(data3.value)

    };

    const cancelSale = () => {
        console.log("firsthit")
        editNewPopupFunction(false)
    }



    return (
        <Modal

            open={open}
        >
            <Modal.Header>Edit customer </Modal.Header>
            <Modal.Content image>

                <Modal.Description>
                    <Form style={{ width: '30%' }}>
                        <Form.Field>
                            <label>Date Sold</label>
                            <input placeholder={dat1} onChange={e => setDto(e.target.value)} />
                        </Form.Field>


                    </Form>
                    <Form>
                        <label>Customer</label>

                        <Dropdown
                            fluid
                            selection
                            placeholder={cus1}
                            options={customerDropDown}
                            onChange={handleDropdownCustomer}
                        />

                    </Form>



                    <Form>
                        <label>Product</label>

                        <Dropdown
                            fluid
                            selection
                            placeholder={prd1}
                            options={productDropDown}
                            onChange={handleDropdownProduct}
                        />

                    </Form>

                    <Form>
                        <label>Sales</label>

                        <Dropdown
                            fluid
                            selection
                            placeholder={str1}
                            options={storeDropDown}
                            onChange={handleDropdownStore}
                        />

                    </Form>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => cancelSale()}>
                    cancel
                </Button>
                <Button color='green' onClick={() => createSale()}  >
                    create
                </Button>

            </Modal.Actions>
        </Modal>
    )
}

export default SalesEditPopup