import { createLoader, createMiddleware } from 'redux-storage';
import createEngine from 'redux-storage-engine-localforage';
import filter from 'redux-storage-decorator-filter';

const config = {
  name: 'synthesizer',
  description: 'Redux store'
};
const whitelist = [
  []
];
const blacklist = [
  []
];

let engine = createEngine('synthesizer', config);

engine = filter(engine, whitelist, blacklist);

export const loadFromLocalForage = createLoader(engine);

export default createMiddleware(engine, [], [
  // 'synthesizer/LOAD_PAGE_LOCATION_SUCCESS'
]);
