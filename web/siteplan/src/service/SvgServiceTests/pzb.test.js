import SvgService from '@/service/SvgService';
import { axios } from 'axios';
import { expect, test } from 'vitest';

//vi.mock('axios')


test('vitest browser environment is set up properly', () => {
  expect(typeof window).not.toBe('undefined')
})

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')


test('adds 1 + 2 to equal 3', () => {
    const svgService = new SvgService(axios)
  expect(1+2).toBe(3)
})

