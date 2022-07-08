import React from 'react'

const Todo = () => {
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-group flex-nowrap mt-4">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button type="button" className="btn btn-light mt-4 px-2">
          Submit
        </button>
      </div>
    </>
  );
}

export default Todo