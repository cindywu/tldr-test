import React, { useState, useEffect, createContext, useContext } from 'react'
import { IReference } from '../interfaces'
import { Replicache } from 'replicache'

type ReferencesContextType = {
  rep: any
  handleReferenceAdd: (reference: IReference) => void
}

const defaultContextValue = {
  rep: null,
  handleReferenceAdd: (reference: IReference) => {}
}

export const ReferencesContext = createContext<ReferencesContextType>(defaultContextValue)

type Props = {
  children: React.ReactNode
}

export const ReferenceProvider = ({ children } : Props) => {
  const [rep, setRep] = useState<any>(null)

  useEffect(() => {
    (async () => {
      const replicache = new Replicache({
        pushURL: '/api/replicache-push',
        pullURL: '/api/replicache-pull',
        wasmModule: '/replicache.dev.wasm',
      })
      const d = await replicache
      listen(rep)
      setRep(d)
    })
  }, [])

  const referencesContextValue = {
    rep,
    handleReferenceAdd
  }

  function handleReferenceAdd(newReference: IReference) {
    console.log('i am in handleReferenceAdd')
  }

  return (
    <ReferencesContext.Provider
      value={referencesContextValue}
    >
      {children}
    </ReferencesContext.Provider>
  )
}

export const useReferences = () => useContext(ReferencesContext)

function listen(rep: any) {

}
