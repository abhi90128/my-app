import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
  return (
    <div>
    <h3>{todo.title}</h3>
    <h6>{todo.desc}</h6>
    <button className='btn btn-danger' onClick={()=>onDelete(todo)}> delete</button>
    </div>
    
  )
}
