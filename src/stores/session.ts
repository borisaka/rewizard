import create from 'zustand';
import jwtDecode from 'jwt-decode';
import createStore from '$utils/createStore';
import persist from '$utils/persist';

type TokenPayload = {
  id: string
  roles: string[]
}

export type Session = TokenPayload & {
  token: string
}

export type SessionState = {
  initSession: (token: string) => void
  destroySession: () => void
  session: Session | null
}

const sessionFromToken = (token: string): Session  => {
  const payload = jwtDecode(token) as TokenPayload
  return {...payload, token }
}

export default createStore<SessionState>(persist({ key: 'Session' }, (set) => ({
  session: null,
  initSession: (token) => { console.log('INIT'); set({ session: sessionFromToken(token) })},
  destroySession: () => set({ session: null})
})))
