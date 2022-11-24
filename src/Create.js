import React, { useState } from 'react'
import { NewProduct } from './data/Product'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Conatiner from 'react-bootstrap/Container';
import useCalculateInvoice from './Hooks/useCalculateInvoice';

function Create() {
  const [newProduct, setNewProduct] = useState(NewProduct);

  const {invoice, x} = useCalculateInvoice(newProduct);

  const handleChangePrice = (e) => {
    setNewProduct({...newProduct, Price: e.target.value * 100})
  }

  const handleChangeQuantity = (e) => {
    setNewProduct({...newProduct, Quantity: e.target.value})
  }

  const handleChangeDiscountRate = (e) => {
    setNewProduct({
      ...newProduct, Discount: {...newProduct.Discount, rate: e.target.value}
    })
  }

  const handleChangeExtraDiscount = (e) => {
    setNewProduct({
      ...newProduct, ItemDiscount: e.target.value * 100
    })
  }

  const handleChangeValueDifference = (e) => {
    setNewProduct({
      ...newProduct, ValueDifference : e.target.value * 100
    })
  }

  return (
    <>
      
      <Conatiner style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div>Create New Product</div>
        <button onClick={x}>get value</button>
        <Form style={{maxWidth: '600px', minWidth: '400px'}}>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control  
              onChange={ e => setNewProduct({...newProduct, Name: e.target.value}) } 
              type="text" required minLength={4} placeholder="Enter Product Name" 
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label>
            <Form.Control 
              onChange={handleChangePrice} 
              type="number" step={0.1} min={1} required placeholder="Enter Product Price" 
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              onChange={handleChangeQuantity}  
              type="number" step={1} min={1} required placeholder="Enter product quantity" 
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Discount Rate</Form.Label>
            <Form.Control
              onChange={handleChangeDiscountRate}
              type="number" step={1} min={0} max={99} required placeholder="Enter Discount Rate" 
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Extra Discount Amount</Form.Label>
            <Form.Control
              onChange={handleChangeExtraDiscount}
              type="number" step={1} min={0} required placeholder="Enter Extra Discount Amount"
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Value Difference</Form.Label>
            <Form.Control
              onChange={handleChangeValueDifference}
              type="number" step={1} min={0} max={99} required placeholder="Enter Value Difference"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    </Conatiner>
    </>
  )
}

export default Create
