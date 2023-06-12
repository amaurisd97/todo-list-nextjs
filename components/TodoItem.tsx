'use client'
import { useRouter } from 'next/navigation'

interface TodoItemProps {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  deleteTodo: (id: string) => void
}

function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  const router = useRouter()
  const deleteT = () => {
    deleteTodo(id)
    router.refresh()
  }
  return (
    <li className='flex gap-1 items-center my-2'>
      <input
        id={id}
        type='checkbox'
        className='cursor-pointer peer'
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>
        {title}
      </label>
      <button
        className='border border-slate-300 text-slate-300 px-1 rounded hover:bg-red-700 peer-focus-within:bg-slate-700 outline-none bg-red-600 ml-6'
        onClick={deleteT}>
        X
      </button>
    </li>
  )
}
export default TodoItem
