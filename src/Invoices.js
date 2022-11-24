import React from 'react'
import Layout from './components/Layout';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

function Invoices() {
  return (
    <Layout>
        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sales</th>
                  <th>Discount</th>
                  <th>Discount Amount</th>
                  <th>Net</th>
                  <th>Value Difference</th>
                  <th>Item Discount</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Sales</td>
                  <td>Discount</td>
                  <td>Discount Amount</td>
                  <td>Net</td>
                  <td>Value Difference</td>
                  <td>Item Discount</td>
                  <td>
                    <button className='btn btn-primary'><FontAwesomeIcon icon={faEye} /></button>
                    <button className='btn btn-danger mx-2'><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>
            </tbody>
        </Table>
    </Layout>
  )
}

export default Invoices