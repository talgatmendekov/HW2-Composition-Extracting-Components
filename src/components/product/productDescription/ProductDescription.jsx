import './ProductDescription.css'

function  ProductDescription(props){
    return (
        <div>
            <h3 className='product-info__description'>{props.info}</h3>
        </div>
    )
}

export default ProductDescription