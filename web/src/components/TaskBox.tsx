import React, { useState } from "react";
import TaskForm from "./TaskForm"
import TaskCard from "./TaskCard"
import Task from "../Task";
import Timer from "./Timer";

export default function TaskBox() {
  const [tasks, setTasks] = useState([]);

  const sampleTask: Task = { id: "1", title: 'sampleTask' };
  const sampleTask2: Task = { id: "2", title: 'sampleTask2222' };
  const sampleData: Task[] = [sampleTask, sampleTask2,];
  const taskCards = sampleData.map(data => {
    return (<TaskCard task={data} />);
  });

  return (
    <>
      <TaskForm />
      <Timer />
      {taskCards}
      {/* <TaskCard title='test' /> */}
    </>
  )
};