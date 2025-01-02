import React from 'react'

function CartItem() {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge text-bg-primary rounded-pill">14</span>
    </li>
  );
}

export default CartItem