import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    
  } = useCart();

  if (isEmpty) return <h1 className="text-center">Seu carrinho está vazio</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          {console.warn(items)}
          <h5>
            Carrinho({totalUniqueItems}) total Itens: ({totalItems}){" "}
          </h5>

          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>

                    <td>{item.title}</td>
                    <td>R$ {item.price}</td>
                    <td>Quantidade ({item.quantity}) </td>

                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >-</button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >+</button>
                      <button 
                      className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                      >Remover Item</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-auto ms-auto">
              <h2>Preço Total: R$ {cartTotal} </h2>
        </div>


        <div className="col-auto">
        <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>Limpar Carrinho</button>

        <button className="btn btn-primary ms-2">Fazer Pagamento</button>


        </div>


      </div>
    </section>
  );
};

export default Cart;
