import React, { useState } from 'react';
import './App.css';

type Task = {
  id: number | string;
  title: string;
};

function App() {
  const initialTasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
    },
    {
      id: 2,
      title: 'Task 2',
    },
  ];

  const [taskValue, setTaskValue] = useState('');
  const [taskList, setTaskList] = useState(initialTasks);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Simple Todo List</h1>

        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setTaskList([
                ...taskList,
                {
                  id: Math.random(),
                  title: taskValue,
                },
              ]);
            }}
          >
            <input
              value={taskValue}
              onChange={(event) => setTaskValue(event.target.value)}
            ></input>
            <br />
            <button type='submit'>Add</button>
          </form>
        </div>
        <section>
          {taskList.map((task) => {
            return (
              <div
                key={task.id}
                onClick={() => {
                  const newTaskList = taskList.filter((currentTask) => {
                    if (currentTask.id === task.id) {
                      return false;
                    } else {
                      return true;
                    }
                  });

                  setTaskList(newTaskList);
                }}
              >
                <p>{task.title}</p>
                <hr />
              </div>
            );
          })}
        </section>
      </header>
    </div>
  );
}

export default App;
