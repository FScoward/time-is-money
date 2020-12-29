import React, { useState } from "react";
import TaskForm from "./TaskForm"
import TaskCard from "./TaskCard"
import Task from "./Task";
import Timer from "./Timer";

export default function TaskBox() {
  const [tasks, setTasks] = useState([]);

  const sampleTask: Task = { id: "1", title: 'sampleTask', usageTime: 0, records: [] };
  const sampleTask2: Task = { id: "2", title: 'sampleTask2222', usageTime: 0, records: [] };
  const sampleData: Task[] = [sampleTask, sampleTask2,];
  const taskCardsElement = sampleData.map(data => {
    return (<TaskCard key={data.id} task={data} />);
  });



  return (
    <>
      <TaskForm />
      <Timer />
      {taskCardsElement}
      {/* <TaskCard title='test' /> */}
    </>
  )
};