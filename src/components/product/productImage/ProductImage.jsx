import './ProductImage.css'

const ProductImage=(props)=>{
    return(
        <div>
            <img className='product-image' src={props.url} alt='cloth' />
        </div>
    )
}

export default ProductImage