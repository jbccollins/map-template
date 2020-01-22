export const TrainsLayerTemplate = {
  type: 'GraphicsLayer',
  options: {
    id: 'metro_trains',
    label: 'Metro Trains',
    visible: true,
    graphics: []
  }
}

export const layers = [
  {
    type: 'FeatureLayer',
    options: {
      url:
        'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
      id: 'bike_routes',
      label: 'Bike Routes',
      visible: true
    }
  },
  TrainsLayerTemplate
];