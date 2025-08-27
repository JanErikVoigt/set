import Feature, { ObjectWithGeometry } from 'ol/Feature'
import { Geometry } from 'ol/geom'
import { FeatureType, getFeatureData, getFeatureType } from './FeatureInfo'

// on OpenLayers!
export default class MapFeature extends Feature<Geometry> {
  constructor (geometryOrProperties: Geometry | ObjectWithGeometry<Geometry> | undefined) {
    super(geometryOrProperties)
  }

  // TODO replace with inheritance logic!
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

  // TODO replace with inheritance logic!
  public movePriority () {
    const type = getFeatureType(this)
    switch (type) {
      case FeatureType.Signal:
        return 1
      case FeatureType.Error:
      case FeatureType.FMA:
      case FeatureType.Platform:
      case FeatureType.Station:
      case FeatureType.PZB:
      case FeatureType.PZBGU:
      case FeatureType.SignalRouteMarker:
      case FeatureType.RouteMarker:
      case FeatureType.Route:
      case FeatureType.Track:
      case FeatureType.TrackDesignationMarker:
      case FeatureType.TrackSectionMarker:
      case FeatureType.TrackLock:
      case FeatureType.TrackSwitchEndMarker:
      case FeatureType.TrackSwitch:
      case FeatureType.Collision:
      case FeatureType.TrackOutline:
      case FeatureType.ExternalElementControl:
      case FeatureType.LockKey:
        return 0
      default:
        return -1
    }
  }
}

