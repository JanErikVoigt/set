

import SvgService from '@/service/SvgService';
import { axios } from 'axios';
import { expect, test } from 'vitest';

test('vitest is set up properly', () => {
  expect(typeof window).not.toBe('undefined')
})

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')


test('adds 1 + 2 to equal 3', () => {

    
    const svg_service = new SvgService(axios)
  expect(1+2).toBe(3)
})

