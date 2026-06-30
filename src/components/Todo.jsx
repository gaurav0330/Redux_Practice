import React, { useState } from 'react';
import './Todo.css';
import { useSelector } from 'react-redux';

const Todo = () => {

  const tasks = useSelector((state)=>state.task);
  

  return (
    <div className="todo-container">
      <h2 className="todo-header">To-do List:</h2>
      
      <div className="todo-input-wrapper">
        <input 
          type="text" 
          className="todo-input" 
          placeholder="Add a new task" 
        />
        <button className="todo-add-btn">Add Task</button>
      </div>

      <div className="todo-list">
        {tasks.map((task,index) => (
          <div key={index} className="todo-item">
            <p>{index + 1} </p>
            
            <span>
              {task}
            </span>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
