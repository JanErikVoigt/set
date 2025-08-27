import Feature, { ObjectWithGeometry } from 'ol/Feature'
import { Geometry } from 'ol/geom'
import { FeatureType, getFeatureData, getFeatureType } from './FeatureInfo'

// on OpenLayers!
export default class MapFeature extends Feature<Geometry> {
  constructor (geometryOrProperties: Geometry | ObjectWithGeometry<Geometry> | undefined) {
    super(geometryOrProperties)
  }

  public isMovableInCollisionAvoidance (): boolean {
    const featureData = getFeatureData(this)
    if (featureData) {
      const type = getFeatureType(featureData.refFeature)
      return (
        type === FeatureType.PZB ||
        type === FeatureType.PZBGU ||
        type === FeatureType.TrackLock ||
        type === FeatureType.FMA ||
        type === FeatureType.TrackSwitch
      )
    }

    return false
  }
}

