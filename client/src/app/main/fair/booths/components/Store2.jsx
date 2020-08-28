import React from 'react';
import { render } from 'react-dom';

const STORE_ID = 34300034;

class Ecwid extends React.Component {
	componentDidMount() {
		const script = document.createElement('script');

		script.charset = 'utf-8';
		script.type = 'text/javascript';
		script.src = `https://app.shopsettings.com/script.js?${STORE_ID}&data_platform=singleproduct_v2`;
		// script.src = `https://gist.githubusercontent.com/eirelcc/4885fef13e45f64321e90ea118dc95d0/raw/9e266ab3a7febb86a10f8d4e1a345f2cff0ce9d1/ec`;
		script.id = 'ecwid-script';

		console.log(script.src);

		// script.addEventListener('load', () =>
		//   this.setState({ apiIsLoad: true })
		// );

		//     const div = document.createElement('div');
		//     div.innerHTML = `<div class="ecwid ecwid-SingleProduct-v2 ecwid-SingleProduct-v2-bordered ecwid-SingleProduct-v2-centered ecwid-Product ecwid-Product-92902807" itemscope itemtype="http://schema.org/Product" data-single-product-id="92902807">
		//   <div itemprop="image"></div>
		//   <div class="ecwid-title" itemprop="name"></div>
		//   <div itemtype="http://schema.org/Offer" itemscope itemprop="offers">
		//     <div class="ecwid-productBrowser-price ecwid-price" itemprop="price" content="44.95" data-spw-price-location="button">
		//       <div itemprop="priceCurrency" content="USD"></div>
		//     </div>
		//   </div>
		//   <div customprop="options"></div>
		//   <div customprop="addtobag"></div>
		// </div>

		// <script src="https://app.shopsettings.com/script.js?12295109&data_platform=singleproduct_v2"></script>
		// <script>
		// xProduct();
		// </script>`

		document.body.appendChild(script);
		// document.body.appendChild(div);

		setTimeout(() => {
			const xProduct = window.xProduct;
			xProduct && xProduct();
		}, 500);
	}
	render() {
		return (
			<div>
				<div
					class="ecwid ecwid-SingleProduct-v2 ecwid-SingleProduct-v2-bordered ecwid-SingleProduct-v2-centered ecwid-Product ecwid-Product-92902807"
					itemscope
					itemtype="http://schema.org/Product"
					data-single-product-id="92902807"
				>
					<div itemprop="image"></div>
					<div class="ecwid-title" itemprop="name"></div>
					<div itemtype="http://schema.org/Offer" itemscope itemprop="offers">
						<div
							class="ecwid-productBrowser-price ecwid-price"
							itemprop="price"
							content="44.95"
							data-spw-price-location="button"
						>
							<div itemprop="priceCurrency" content="USD"></div>
						</div>
					</div>
					<div customprop="options"></div>
					<div customprop="addtobag"></div>
				</div>
				<script src="https://app.shopsettings.com/script.js?12295109&data_platform=singleproduct_v2"></script>
				<script>window.xProduct()</script>
			</div>
		);
		// return (
		//   <div className="ecwid ecwid-SingleProduct-v2 ecwid-SingleProduct-v2-bordered ecwid-SingleProduct-v2-centered ecwid-Product ecwid-Product-92902807" itemScope itemType="http://schema.org/Product" data-single-product-id="92902807">
		//     <div itemProp="image"></div>
		//     <div className="ecwid-title" itemProp="name"></div>
		//     <div itemType="http://schema.org/Offer" itemScope itemProp="offers">
		//       <div className="ecwid-productBrowser-price ecwid-price" itemProp="price" content="44.95" data-spw-price-location="button">
		//         <div itemProp="priceCurrency" content="USD"></div>
		//       </div>
		//     </div>
		//   </div>

		// );
	}
}

render(<Ecwid />, document.getElementById('root'));
