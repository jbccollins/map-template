// Convert geojson to Esri GraphicsLayer
import Graphic from 'esri/Graphic';
import layerFactory from 'utils/layerFactory.util';

const markerSymbol = {
  type: "simple-marker",
  color: "red",
  size: '12px',
  outline: {
    color: "white",
    width: 1
  }
};

export default geojson => {
  const graphics = geojson.map(({properties, geometry: {coordinates}}) => {
    return new Graphic({
      geometry: {
        type: "point",
        longitude: coordinates[1],
        latitude: coordinates[0]
      },
      attributes: {line: properties.TRACKLINE.toLowerCase()},
      symbol: {...markerSymbol, color: properties.TRACKLINE.toLowerCase()}
    })
  })
  return graphics;
  // const graphicsLayer = layerFactory({
  //   type: 'GraphicsLayer',
  //   options: {
  //     id: 'metro_trains',
  //     label: 'Metro Trains',
  //     visible: true,
  //     graphics
  //   }
  // })
  //return graphicsLayer;
};