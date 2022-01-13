import ProductDescription from '../productDescription/ProductDescription'
import ProductImage from '../productImage/ProductImage'
import ProductPrice from '../productPrice/ProductPrice'
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import './ProductInfo.css'

const ProductInfo = (props) => {
	return (
		<div className='wrapper'>
			{props.productData.map((el) => {
				return (
					<Card key={el.id}>
						<div className='product-info'>
							<ProductDescription info={el.infoName} />
							<ProductImage url={el.imageUrl} />
						</div>
						<ProductPrice price={el.price} />
						<Button>Add to bag</Button>
					</Card>
					
				)
			})}

			
		</div>
	)
}

export default ProductInfo
