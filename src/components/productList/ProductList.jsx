import "./productList.css"
import Product from "../product/Product"

import React from 'react'

const ProductList = () => {
    return (
        <div className = "pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & Inspire. It's Catherine</h1>
                <p className="pl-desc">
                Catherine Kiiru is a frontend developer and technical content specialist,
                with 5 years experience contributing to open-source projects, education and advocacy.
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
        </div>
    )
}

export default ProductList
