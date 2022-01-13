import "./ProductPrice.css"

function ProductPrice(props) {
	return (
		<div className='priceBlock'>
			<span className='priceBlock-oldPrice'>
				{props.price.oldPrice} EUR
			</span>
			<h3 className='priceBlock-discount'>
				{props.price.discount}
				<span className='priceBlock-currentPrice'>
					{props.price.currentPrice} EUR
				</span>
			</h3>
		</div>
	)
}

export default ProductPrice
