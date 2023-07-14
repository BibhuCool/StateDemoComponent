import { useState } from "react";

export default function StatedemoComponent(){

    const[product,setProduct] = useState({name:'',price:0,city:'',stock:false})
    const[newProduct,setNewProduct] = useState({})

    

    function HandleNameChange(event){
        setProduct({
            name:event.target.value,
            price:product.price,
            city:product.city,
            stock:product.stock

        })

    }

    function HandlePriceChange(event){
        setProduct({
            price:event.target.value,
            name:product.name,
            city:product.city,
            stock:product.stock
            
        })

    }

    function HandleCityChange(event){
        setProduct({
            city:event.target.value,
            name:product.name,
            price:product.price,
            stock:product.stock
            
        })

    }

    function HandleStockChange(event){
        setProduct({
            stock:event.target.checked,
            price:product.price,
            city:product.city,
            name:product.name
            
        })

    }

    function SubmitClick(){
        setNewProduct({
            name:product.name,
            price:product.price,
            city:product.city,
            stock:product.stock
        })
    }

    return(
        <>
            <div className="container-fluid">
            <div className="row">
            <div className="col-3">
            <h2>Register Product</h2>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" onKeyUp={HandleNameChange} className="form-control" /></dd>
                <dt>Price</dt>
                <dd><input type="text" onKeyUp={HandlePriceChange} className="form-control" /></dd>
                <dt>Shipped To</dt>
                <dd>
                    <select className="form-select" onChange={HandleCityChange}>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Stock</dt>
                <dd className="form-switch"><input type="checkbox" onChange={HandleStockChange} className="form-check-input" /> Available</dd>
            </dl>
            <button className="btn btn-primary w-100" onClick={SubmitClick}>Submit</button>

            </div>
            <div className="col-9">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{newProduct.name}</dd>
                <dt>Price</dt>
                <dd>{newProduct.price}</dd>
                <dt>City</dt>
                <dd>{newProduct.city}</dd>
                <dt>Stock</dt>
                <dd>{(newProduct.stock===true)? "Available":"Out of stock"}</dd>
            </dl>

            </div>

            </div>

            </div>
        </>
    )
}
