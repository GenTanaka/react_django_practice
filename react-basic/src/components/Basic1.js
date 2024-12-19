import React, {useState} from 'react'

const Basic1 = () => {
    const [product, setProducts] = useState({name:'', price:''});

    return (
        <>
            <form action="">
                <input type="text" value={product.name} 
                onChange={evt => setProducts({...product, name: evt.target.value})}/>
                <input type="text" value={product.price} 
                onChange={evt => setProducts({...product, price: evt.target.value})}/>
            </form>
            <h2>Product name is {product.name}</h2>
            <h2>Product price is {product.price}</h2>
        </>
    )
}

export default Basic1