import React from 'react'
import ProductInfo from './components/ProductInfo'
import "./App.css"

const products = [
	{
		id: 0,
		infoName: 'Hooded Pink Kids Coat ',
		price: {
			oldPrice: 100,
			discount: '-25%',
			currentPrice: 75,
		},
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs0uAJ1F3RN0lCzK5fkB-yDf_EwvmlJxQVA&usqp=CAU',
		size: {
			verysmall: 'XS',
			small: 'S',
			medium: 'M',
			large: 'L',
		},
	},
	{
		id: 1,
		infoName: 'Printed Premium Quality Switshirt',
		price: {
			oldPrice: 50,
			discount: '-10%',
			currentPrice: 45,
		},
		imageUrl:
			'https://toppng.com/uploads/preview/bass-2-mouth-mens-funny-bass-fishing-hoodies-shopcool-scary-face-halloween-2017-hoodie-sweatshirt-11569055875gbrvh9nbon.png',
		size: {
			verysmall: 'XS',
			small: 'S',
			medium: 'M',
			large: 'L',
		},
	},
]

function App() {
	return (
		<div className='App'>
			<ProductInfo info={products[0].infoName} price={products[0].price} url={products[0].imageUrl}/>
			<ProductInfo info={products[1].infoName} price={products[1].price} url={products[1].imageUrl}/>
			
		</div>
	)
}

export default App
