// Convert geojson to Esri Graphics

import Graphic from 'esri/Graphic';
import layerFactory from 'utils/layerFactory.util';
import { TrainsLayerTemplate } from '../config/layers.config';

const markerSymbol = {
  type: "simple-marker",
  color: "red",
  outline: {
    color: "white",//[255, 255, 255],
    width: 1
  }
};
// const point = {
//   type: "point", // autocasts as new Point()
//   longitude: -49.97,
//   latitude: 41.73
// };
// const pointGraphic = new Graphic({
//   geometry: point,
//   symbol: markerSymbol
// });

export default geojson => {
  const graphics = geojson.map(({properties, geometry: {coordinates}}) => {
    return new Graphic({
      geometry: {
        type: "point", // autocasts as new Point()
        longitude: coordinates[1],
        latitude: coordinates[0]
      },
      symbol: {...markerSymbol, color: properties.TRACKLINE.toLowerCase()}
    })
  })

  const graphicsLayer = layerFactory({
    type: 'GraphicsLayer',
    options: {
      id: 'metro_trains',
      label: 'Metro Trains',
      visible: true,
      graphics
    }
  })
  return graphicsLayer;
};