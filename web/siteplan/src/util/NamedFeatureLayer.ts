import { FeatureLayerType, FeatureType, getFeatureLayerDefaultVisibility, getFeatureLayerDisplayName, getFeatureType } from '@/feature/FeatureInfo'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

/**
 * Named layer that contains features
 *
 * @author Peters
 */
export default class NamedFeatureLayer extends VectorLayer<VectorSource<MapFeature>> {
  private type: FeatureLayerType
  private displayName: string

  constructor (zIndex: number, type: FeatureLayerType) {
    super({
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      source: new VectorSource(),
      renderBuffer: 1000,
      zIndex,
      visible: getFeatureLayerDefaultVisibility(type)
    })
    this.type = type
    this.displayName = getFeatureLayerDisplayName(type)
  }

  public getLayerType () : FeatureLayerType {
    return this.type
  }

  public getDisplayName () : string {
    return this.displayName
  }

  public getFeaturesByType (featureType: FeatureType) {
    return super.getSource()?.getFeatures()
      .filter(c => getFeatureType(c) === featureType)
  }

  public clean () {
    super.getSource()?.clear()
  }
}
