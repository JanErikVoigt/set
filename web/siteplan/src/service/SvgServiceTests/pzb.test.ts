import axios from 'axios'

import { FeatureType } from '@/feature/FeatureInfo'
import { defaultLabelObj } from '@/model/Label'
import { defaultPZBObj, PZB } from '@/model/PZB'
import SvgService from '@/service/SvgService'
import { expect, test } from 'vitest'

test('Svg literal: PZB : default', () => {
  const svgService = new SvgService(axios)
  expect(svgService).toBeDefined()

  const pzb: PZB = defaultPZBObj()
  const svg = svgService.getFeatureSvg(pzb,FeatureType.PZB, defaultLabelObj())

  const expected = `SvgElement {
  "anchor": [],
  "boundingBox": [
    [
      30,
      30,
      70,
      70,
    ],
  ],
  "content": <svg
    height="100"
    width="100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="20"
      style="fill:red"
    />
    <circle
      cx="50"
      cy="50"
      r="15"
      style="fill:blue"
    />
    <circle
      cx="50"
      cy="50"
      r="10"
      style="fill:red"
    />
  </svg>,
  "id": "Error",
  "nullpunkt": null,
}`

  expect(JSON.stringify(svg,null,2)).to.equal(expected)
})

test('Svg: PZB : default', () => {
  const svgService = new SvgService(axios)
  expect(svgService).toBeDefined()

  const pzb: PZB = defaultPZBObj()
  const svg = svgService.getFeatureSvg(pzb,FeatureType.PZB, defaultLabelObj())

  const expected = undefined

  expect(JSON.stringify(svg,null,2)).to.equal(expected)
})

