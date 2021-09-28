

// reusable table component written using function component method

import React from 'react';
import { Icon, Table, Button } from 'semantic-ui-react'

const TableComp = () => (
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



            <Table.Row>
                <Table.Cell collapsing>
                    demo1
                </Table.Cell>
                <Table.Cell collapsing>
                    demo2
                </Table.Cell>


                <Table.Cell collapsing textAlign='left'>
                    <Button color='yellow'><Icon name='edit' />Edit</Button>
                </Table.Cell>
                <Table.Cell collapsing textAlign='left'>
                    <Button Icon='trash' color='red'><Icon name='trash' />Delete</Button>
                </Table.Cell>
            </Table.Row>

        </Table.Body>
    </Table>
)

export default TableComp
