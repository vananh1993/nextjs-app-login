import {createContext, useContext} from 'react';

const layoutContext = createContext();

export function useLayoutContext() {
  return useContext(layoutContext);
}

export default layoutContext;
