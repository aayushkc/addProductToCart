import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import product1small from '../../images/image-product-1-thumbnail.jpg'
import product2small from '../../images/image-product-2-thumbnail.jpg'
import product3small from '../../images/image-product-3-thumbnail.jpg'
import product4small from '../../images/image-product-4-thumbnail.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { productActions } from '../../redux/productState'

const Product = () => {
    const amount = useSelector(state => state.product.productAmount)
    const dispatch = useDispatch()
    const [currentImg, setCurrentImg] = useState(1)
    const [enteredNumber, setEnteredNumber] = useState(1)
   
    const getEnteredNumber = (e) => {
        setEnteredNumber(e.target.value)
    }

    const decreaseAmount = () => {
        if (enteredNumber > 1) {
            setEnteredNumber(prev => prev = prev - 1)
        }
    }

    const increaseAmount = () => {
        setEnteredNumber(prev => prev = prev + 1)
    }

    const submitCart = () =>{
        dispatch(productActions.cartProduct({productName:'Fall Limited Edition Sneakers',productPrice:125.00,productAmount:enteredNumber}))
    }
    let bigImg;
    if (currentImg === 1) {
        bigImg = product1
    }
    if (currentImg === 2) {
        bigImg = product2
    }
    if (currentImg === 3) {
        bigImg = product3
    }
    if (currentImg === 4) {
        bigImg = product4
    }
    return (
        <section className='product--section'>
            <div className="left--section-product">
                <div className="big--img">

                    <img src={bigImg} alt="shoes" />
                </div>

                <div className="small--img">
                    <div className={`sm-img ${currentImg === 1 && "active"}`} onClick={() => { setCurrentImg(1) }}><img src={product1small} alt="shoes " /></div>
                    <div className={`sm-img ${currentImg === 2 && "active"}`} onClick={() => { setCurrentImg(2) }}><img src={product2small} alt="shoes" /></div>
                    <div className={`sm-img ${currentImg === 3 && "active"}`} onClick={() => { setCurrentImg(3) }}><img src={product3small} alt="shoes" /></div>
                    <div className={`sm-img ${currentImg === 4 && "active"}`} onClick={() => { setCurrentImg(4) }}><img src={product4small} alt="shoes" /></div>
                </div>
            </div>
            <div className="right--section-product">
                <p className="company--title">Sneaker Company</p>
                <h1 className='product--offer'>Fall Limited Edition Sneakers</h1>
                <p className='product--description'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='price--details'>
                    <p className='product--price'> $125.00</p>
                    <button className='product--discount'>50%</button>
                </div>

                <s className='product--prev-price'> $250.00</s>
                <div className='buy--button'>
                    <div className='order--number'>
                        <button className='order-number-btn order-number-btn-left' onClick={decreaseAmount}>-</button>
                        <input type="number" className='order--input' onChange={getEnteredNumber} min='0' value={enteredNumber} disabled />
                        <button className='order-number-btn order-number-btn-right' onClick={increaseAmount}>+</button>
                    </div>

                    <button className='add-to-cart' onClick={submitCart}><i className='fa fa-cart-shopping'></i> Add to cart</button>
                </div>
            </div>
        </section>
    )
}

export default Product;