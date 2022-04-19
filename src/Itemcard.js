import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {

  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid" />

        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
<<<<<<< HEAD
          <h5 class="card-title">R$ {props.price.toFixed(2)}</h5>
=======
          <h5 class="card-title">R$ {props.price.toFixed(2)}</h5>
>>>>>>> b160f65fb160fbbbb2c5c060f6a9ae00cee56e44
          <p class="card-text">{props.desc}</p>

          <button class="btn btn-success" onClick={() => addItem(props.item)}>
            Adcionar no Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;

