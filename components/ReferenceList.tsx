import React from 'react'
import Reference from './Reference'
import { useReferences } from './ReferenceProvider'
import { useSubscribe } from 'replicache-react-util';

export default function ReferenceList() {
  const { rep } = useReferences()
  console.log('rep', rep)

  const references = useSubscribe(
    rep,
    async tx => {
      const list = await tx.scan().entries().toArray()
      return list
    },
    [],
  )

  console.log('references', references)

  return (
    <div>
      <Reference/>
      <Reference/>
    </div>
  )
}
