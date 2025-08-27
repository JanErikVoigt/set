import Feature, { ObjectWithGeometry } from 'ol/Feature'
import { Geometry } from 'ol/geom'

// on OpenLayers!
export default class MapFeature extends Feature<Geometry> {
  constructor (geometryOrProperties: Geometry | ObjectWithGeometry<Geometry> | undefined) {
    super(geometryOrProperties)
  }
}
