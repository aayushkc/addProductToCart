import CartItem from './CartItem';
import icon from '../../images/icon-cart.svg'
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Cart = () =>{
    const amount = useSelector(state => state.product.productAmount)
    const [showCart, setShowCart] = useState(false)
    const toggleCart = () =>{
        setShowCart(!showCart)
    }
    return(
        <div className="cart">
            <button className="number--0f-items">{amount}</button>
            <img src={icon} alt="shopping cart" onClick={toggleCart}/>

            {showCart && <CartItem />}
        </div>
    )
}

export default Cart;