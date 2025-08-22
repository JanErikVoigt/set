import axios from 'axios'

import SvgService from '@/service/SvgService'
import { describe, expect, test } from 'vitest'

// vi.mock('axios')

test('vitest browser environment is set up properly', () => {
  expect(typeof window).not.toBe('undefined')
})

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')

test('Can create a SvgService', () => {
  const svgService = new SvgService(axios)
  expect(svgService).toBeDefined()
})
