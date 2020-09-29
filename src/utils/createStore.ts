import create, { State, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import persist from './persist';

const createStore = <T extends State> (createState: StateCreator<T>) => (
  process.env.NODE_ENV === 'development' ? create<T>(devtools(createState)) : create<T>(createState)
)

export default createStore;