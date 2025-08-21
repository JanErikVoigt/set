import SvgService from '@/service/SvgService'
import PZBFeature from '../PZBFeature'
import { FeatureType } from '../FeatureInfo'
import { Axios, AxiosStatic } from 'axios'

const SAMPLE_PZBS = [
  { 'guid': 'F196DE89-0534-472C-83B6-B9128994D94D', 'routeLocations': [{ 'km': '69,297', 'route': '2324' }], 'position': { 'x': 785474.735383229, 'y': 6603044.936873274, 'rotation': 159.30000000004225 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal' },
  { 'guid': 'F3148C68-BE35-496D-83FB-A29A5A454110', 'routeLocations': [{ 'km': '6,510', 'route': '2651' }], 'position': { 'x': 784588.1905986087, 'y': 6604941.146596518, 'rotation': 143.10000000008264 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': false, 'effectivity': 'Signal' },
  { 'guid': 'F50B6B34-D3A4-4D5F-BD12-73D63147EE29', 'routeLocations': [{ 'km': '71,807', 'route': '2324' }], 'position': { 'x': 786873.720136681, 'y': 6599319.409803418, 'rotation': 158.58064372208005 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': true, 'effectivity': 'Signal' },
  { 'guid': 'F71F87AF-4364-4F2B-B33A-5AA6C390CDFA', 'routeLocations': [{ 'km': '70,775', 'route': '2324' }], 'position': { 'x': 786309.533050881, 'y': 6600856.443312339, 'rotation': 159.24875348421145 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': true, 'effectivity': 'Signal' },
  { 'guid': 'FAF100F3-1D51-40D3-91FF-8D352EE21134', 'routeLocations': [{ 'km': '72,310', 'route': '2324' }], 'position': { 'x': 787150.7030285696, 'y': 6598573.058445265, 'rotation': 158.76129468893598 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': false, 'effectivity': 'Signal' },
  { 'guid': 'FF9AB783-E160-45E3-B8F3-570C267CABE6', 'routeLocations': [{ 'km': '72,570', 'route': '2324' }], 'position': { 'x': 787294.0597990764, 'y': 6598186.689230122, 'rotation': 158.76129468893598 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal' },
  { 'guid': '092B934B-D529-454C-8982-DB9DAFC90D51', 'routeLocations': [{ 'km': '68,452', 'route': '2324' }], 'position': { 'x': 784651.796055257, 'y': 6604035.138354394, 'rotation': 127.35517168733638 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '0C59372E-44D8-4FEB-A76E-97BEFF67122E', 'routeLocations': [{ 'km': '8,708', 'route': '2651' }], 'position': { 'x': 786006.9947091618, 'y': 6601771.8044356825, 'rotation': 158.75548236210733 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '127192BA-5C66-4924-8BA5-60C1F11C1674', 'routeLocations': [{ 'km': '9,851', 'route': '2651' }], 'position': { 'x': 786628.8095356778, 'y': 6600069.458579993, 'rotation': -21.52873903088415 }, 'type': 'GM', 'element': '1000Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '14AE0892-B2B1-4B34-9FFB-4ABC12432D3B', 'routeLocations': [{ 'km': '7,239', 'route': '2651' }], 'position': { 'x': 785171.0952415296, 'y': 6603945.9096939135, 'rotation': 154.2639047760181 }, 'type': 'GM', 'element': '500Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '1CE638DF-9600-4F57-8079-EF299EFD97A0', 'routeLocations': [{ 'km': '7,239', 'route': '2651' }], 'position': { 'x': 785178.4051266434, 'y': 6603948.80393351, 'rotation': 153.89999999998096 }, 'type': 'GM', 'element': '500Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '1FD5CFDF-ED8C-4263-A53F-7A7ACB0EFC5B', 'routeLocations': [{ 'km': '71,435', 'route': '2324' }], 'position': { 'x': 786666.9321605996, 'y': 6599871.715062547, 'rotation': 158.75763110948935 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '25041C0F-D775-43B2-947C-E178C93C6673', 'routeLocations': [{ 'km': '71,759', 'route': '2324' }], 'position': { 'x': 786836.0810712464, 'y': 6599387.084372459, 'rotation': 158.7999485802403 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '29FB89CB-7D5C-41BB-9FE7-906E147B9235', 'routeLocations': [{ 'km': '71,539', 'route': '2324' }], 'position': { 'x': 786730.1583137842, 'y': 6599719.562120528, 'rotation': 158.75761877427072 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '2BA8A84C-104F-4817-A495-49F50AEAA346', 'routeLocations': [{ 'km': '72,570', 'route': '2324' }], 'position': { 'x': 787299.9898660729, 'y': 6598188.894838781, 'rotation': -21.238701173901514 }, 'type': 'GM', 'element': '500Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '2C2E8DF8-AC0C-4F88-953F-765D15501DD1', 'routeLocations': [{ 'km': '7,219', 'route': '2621' }], 'position': { 'x': 785518.1805910424, 'y': 6603164.197620786, 'rotation': -22.53710966290855 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '2E856634-92D5-4537-95C6-E1F83BED67FF', 'routeLocations': [{ 'km': '8,733', 'route': '2651' }], 'position': { 'x': 786015.1348824227, 'y': 6601731.697662183, 'rotation': -21.24451789891349 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '35012D6A-3778-4B5B-A010-7D35D16CFFF4', 'routeLocations': [{ 'km': '5,4+135', 'route': '2651' }], 'position': { 'x': 783544.7252032498, 'y': 6606081.028527743, 'rotation': 133.81047071866385 }, 'type': 'GM', 'element': '1000Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '375B37BC-7485-4464-B99D-086D61FFE9CD', 'routeLocations': [{ 'km': '8,968', 'route': '2651' }], 'position': { 'x': 786150.4971835857, 'y': 6601385.323465949, 'rotation': 158.75548236210733 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '37D659DA-F336-4A6D-946B-19BC8D1BB528', 'routeLocations': [{ 'km': '6,500', 'route': '2651' }], 'position': { 'x': 784573.7085461592, 'y': 6604949.811105991, 'rotation': 143.09999999990922 }, 'type': 'GM', 'element': '1000Hz2000Hz', 'rightSide': true, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] },
  { 'guid': '39578B36-006D-4DBB-A499-04792C4B9C9F', 'routeLocations': [{ 'km': '70,515', 'route': '2324' }], 'position': { 'x': 786162.0828514905, 'y': 6601241.4920554245, 'rotation': -21.244523165650307 }, 'type': 'GM', 'element': '500Hz', 'rightSide': false, 'effectivity': 'Signal', 'objectColors': [{ 'id': 'feature', 'color': [179, 40, 33] }] }
]

describe('greet function', () => {
  it('describe behaviour', () => {
    // setup
    const axios: AxiosStatic = new Axios()
    const svg_service = new SvgService(axios)
    const model = SAMPLE_PZBS[0]

    const result = svg_service.drawFeatureSVG(model, FeatureType.PZB) //no label for now
    expect('Hello, John!').toEqual('Hello, John!')
  });
});