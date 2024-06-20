import { ChangeEvent, FormEvent, useState } from 'react'
import { useToDos } from '../hooks/use-todos'
import { useQuery } from '@tanstack/react-query'

export default function TestComponent() {
  const todos = useToDos()
  // console.log(todos)

  function handleDelete(e) {
    console.log(e.target.id)
  }

  if (todos.isPending) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {todos.data.items.map((element) => (
        <div key={element.id} className="item">
          <li key={element.id}>
            {element.name}
            <button id={element.id} onClick={handleDelete}>
              🗑️
            </button>
          </li>
        </div>
      ))}
    </ul>
  )
}
