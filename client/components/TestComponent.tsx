import { ChangeEvent, FormEvent, useState } from 'react'
import { useToDos } from '../hooks/use-todos'
import { useQuery } from '@tanstack/react-query'

export default function TestComponent() {
  const todos = useToDos()
  // console.log(todos)

  if (todos.isPending) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {todos.data.items.map((element) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  )
}
