import React from "react";
import TaskForm from "./TaskForm"
import TaskCard from "./TaskCard"

class TaskBox extends React.Component {
  render() {
    return (
      <>
        <TaskForm />
        <TaskCard />
      </>
    )
  }
};

export default TaskBox;