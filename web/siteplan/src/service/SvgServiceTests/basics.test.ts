import axios from 'axios'

import SvgService from '@/service/SvgService'
import { expect, test } from 'vitest'

test('Can create a SvgService', () => {
  const svgService = new SvgService(axios)
  expect(svgService).toBeDefined()
})

/* TODO mock Configuration!
  test('default SvgService.getBaseZoomLevel', () => {
  const svgService = new SvgService(axios)
  const zoomlevel = svgService.getBaseZoomLevel()
  expect(zoomlevel).toBe(123322)
}) */
