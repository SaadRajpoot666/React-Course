import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { TodoList } from "./AdvanceTodoListApp/TodoList.jsx";
 
import { NewTodoform } from "./AdvanceTodoListApp/NewTodoForm"; 
import { TodoFilterForm } from "./AdvanceTodoListApp/TodoFilterForm.jsx";
const ACTIONS = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};
export const newTodoConext = createContext()
const LOCAL_STORAGE_VALUE = "TODOS";
export function TodoListApp() {
  const [filteredName,setFilteredName] = useState("")
  const [hideCompletedFilter,setHideCompletedFilter] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_VALUE);
    if (value === null) return initialValue;
    return JSON.parse(value);
  });
  function reducer(todo, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD:
        return [
          ...todo,
          { name: payload.name, completed: false, id: crypto.randomUUID() },
        ];
        case ACTIONS.UPDATE : return(
todos.map(todo=>{
  if(todo.id === payload.id){
return {...todo,name: payload.name}
  }
  return todo
})
        )
      case ACTIONS.TOGGLE:
        return todo.map((todo) => {
          if (todo.id === payload.id)
            return { ...todo, completed: payload.completed };
        });
      case ACTIONS.DELETE:
        return todo.filter((todo) => todo.id !== payload.id);
      default:
        throw new Error(`no action found for ${type}`);
    }
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VALUE, JSON.stringify(todos));
  }, [todos]);

const filteredTodos = todos.filter(todo=>{
  if(hideCompletedFilter && todo.completed) return false
  return todo.name.includes(filteredName)
})
function updateTodoName(id,name){
  dispatch({type: ACTIONS.UPDATE, payload:{id,name}})
}
  function addTodo(name) {
     
    dispatch({ type: ACTIONS.ADD, payload: { name } });

     
  }
  function delTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }
  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }
   
  return (
    <newTodoConext.Provider  value={{
      



      todos: filteredTodos, addTodo,updateTodoName
      ,toggleTodo,delTodo
    }}>
      <TodoFilterForm   name={filteredName} setName={setFilteredName} hideCompleted={hideCompletedFilter} setHideCompleted={setHideCompletedFilter} />
       <TodoList   />
      <NewTodoform   />
    </newTodoConext.Provider>
  );
}
