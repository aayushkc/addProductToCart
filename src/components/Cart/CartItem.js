import product1 from '../../images/image-product-1-thumbnail.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../redux/productState';
const CartItem = () =>{
    const amount = useSelector(state => state.product.productAmount);
    const dispatch = useDispatch();
    const productName = useSelector(state=>state.product.productName)
    const productPrice= useSelector(state=>state.product.productPrice)
    const totalAmount = useSelector(state=>state.product.totalAmount)
    const deleteProduct = () =>{
            dispatch(productActions.deleteProduct())
    }
    return (
        <div className="cart--item-container">
            <div className="cart--item-header">
                    Cart
            </div>

            {amount>=1 ? (<>
                <div className="cart--item">
                <div className="cart--item-img"><img src={product1} /></div>
                <div className="cart--item-details">
                    <p className="cart--item-title">{productName}</p>
                    <div className="cart--item--price-container">
                        <p className="cart--item-price">{productPrice.toFixed(2)}</p>
                        <p className="cart--item-amount"> x {amount}</p>
                        <p className="cart--item-total">${totalAmount.toFixed(2)}</p>
                    </div>
                </div>

                <button className="cart--item-delete" onClick={deleteProduct}><i className="fa fa-trash"></i></button>
            </div>
            <div className='cart--checkout'>
            <button className="cart--checkout-btn">Checkout</button>
            </div>
            </>):(<p>No Cart Items</p>)}
            
        </div>
    )
}

export default CartItem;