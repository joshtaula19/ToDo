//imports
import { ChangeEvent, FormEvent, useState } from 'react'
// import { useCreateToDo } from '' //from hooks to be built
import { ToDo } from '../../models/todo.ts'

export default function WriteToDo() {
  const createToDo = useCreateToDo() //create this hook
  const [formState, setFormState] = useState<ToDo>({
    name: '',
    id: 0,
    created_on: 0,
    important: false,
    done: false,
  })

  const submit = () => {
    setFormState({
      name: '',
      id: 0,
      created_on: 0,
      important: false,
      done: false,
    })
  }

  createToDo.mutate<ToDo>({ ...formState })

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter' && evt.ctrlKey) {
      submit()
    }
  }
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    submit()
  }
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget
    setFormState((prev) => ({ ...prev, name: value }))
  }

  return (
    <form onSubmit={handleSubmit} aria-label="New To Do" className="new-to-do">
      <div>
        <input
          aria-label="to do text"
          name="name"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={formState.name}
          placeholder="What would you like to do?"
          className="to-do-text"
        ></input>
      </div>
      <div>
        <button className="button-to-do">Create New To Do</button>
      </div>
    </form>
  )
}
