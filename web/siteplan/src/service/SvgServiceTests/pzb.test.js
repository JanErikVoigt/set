import axios from 'axios'

import SvgService from '@/service/SvgService'
import { expect, test } from 'vitest'

test('Can create a SvgService', () => {
  const svgService = new SvgService(axios)
  expect(1 + 2).toBe(3)
})