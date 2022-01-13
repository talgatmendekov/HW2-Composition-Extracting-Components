import './ProductInfo.css'

const ProductInfo = (props) => {
	return (
		<div className='wrapper'>
			<div className='card'>
				<div className='product-info'>
					<h3 className='product-info__description'>{props.info}</h3>
					<img src={props.url} alt='cloth' />
				</div>
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
				<button className='btn_wrapper'>Add to bag</button>
			</div>
		</div>
	)
}

export default ProductInfo
