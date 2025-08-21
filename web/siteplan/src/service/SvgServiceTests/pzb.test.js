import { expect, test } from 'vitest'
import { axios, AxiosStatic } from 'axios'
import SvgService from '@/service/SvgService'

test('adds 1 + 2 to equal 3', () => {
    const svg_service = new SvgService(axios)
  expect(1+2).toBe(3)
})