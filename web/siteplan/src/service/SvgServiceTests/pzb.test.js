
global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };
import SvgService from '@/service/SvgService';
import { axios } from 'axios';
import { beforeAll, expect, test } from 'vitest';

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };
});





test('vitest is set up properly', () => {
  expect(typeof window).not.toBe('undefined')
})

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')


test('adds 1 + 2 to equal 3', () => {

    
    const svgService = new SvgService(axios)
  expect(1+2).toBe(3)
})

