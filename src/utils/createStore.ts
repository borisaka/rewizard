import create from 'zustand';
import { devtools } from 'zustand/middleware';
import persist from './persist';

export default (createState) => (
  process.env.NODE_ENV === 'development' ? create(devtools(createState)) : create(createState)
)