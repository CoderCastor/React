import React from 'react'
import Product from './Product'

function Products() {
    var products = [
        {title: "Arquitel", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ab ducimus veritatis fugiat aperiam laboriosam dolores, cupiditate nemo nam eos esse, dolor molestias aliquam dolorem?", live: true, case: false},
        {title: "TTR", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ab ducimus veritatis fugiat aperiam laboriosam dolores, cupiditate nemo nam eos esse, dolor molestias aliquam dolorem?", live: true, case: false},
        {title: "YIR 2022", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ab ducimus veritatis fugiat aperiam laboriosam dolores, cupiditate nemo nam eos esse, dolor molestias aliquam dolorem?", live: true, case: true},
        {title: "Yahoo", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ab ducimus veritatis fugiat aperiam laboriosam dolores, cupiditate nemo nam eos esse, dolor molestias aliquam dolorem?", live: true, case: true},
        {title: "Rainfalls", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ab ducimus veritatis fugiat aperiam laboriosam dolores, cupiditate nemo nam eos esse, dolor molestias aliquam dolorem?", live: true, case: false}
    ]
  return (
    <div>
        {products.map((val,index)=> <Product val={val}/>)}
    </div>
  )
}

export default Products
