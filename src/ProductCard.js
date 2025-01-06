import React from "react";

function ProductCard(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.product.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.product.pName}</h5>
        <h6 class="card-title">{props.product.price}</h6>
        <p class="card-text">{props.product.desc}</p>
        <p>{props.product.isStock === true ? "-in stock" : "-out of stock"}</p>
        <button
          class="btn btn-primary"
          disabled={!props.product.isStock}
          onClick={() => {props.handleAddToCart(props.product)}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
