import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
export default function Cart() {
  return (
<YMaps>
	<Map
		defaultState={{
			center: [55.75, 37.57],
			zoom: 9,
			controls: ['zoomControl', 'fullscreenControl']
		}}
		modules={['control.ZoomControl', 'control.FullscreenControl']}
	>
		<Placemark
			modules={['geoObject.addon.balloon']}
			defaultGeometry={[55.75, 37.57]}
			properties={{
				balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
			}}
		/>
	</Map>
</YMaps>
  )
}
