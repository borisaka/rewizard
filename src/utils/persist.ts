import { configurePersist } from 'zustand-persist';

const { persist } = configurePersist({
  storage: localStorage,
  rootKey: 'root',
})

export default persist;