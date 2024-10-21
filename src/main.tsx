import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/**
 * src/
 *    store
 *    shared
 *    pages/
 *    components/
 *              ComponentA/
 *                        componentA.tsx
 *                        componentA.styles.ts
 *                        components/
 *                                  innerA.tsx + innerA.styles.ts
 *                                  
 *                        
 */