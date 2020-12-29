import React, { useState } from "react";
import TaskForm from "./TaskForm"
import TaskCard from "./TaskCard"
import WIPTaskCard from "./WIPTaskCard"
import { Task, WIPTask } from "./Task";
import Timer from "./Timer";

export default function TaskBox() {
  const sampleTask: Task = { id: "1", title: 'sampleTask', usageTime: 0, records: [] };
  const sampleTask2: Task = { id: "2", title: 'sampleTask2222', usageTime: 0, records: [] };
  const sampleTasks: Task[] = [sampleTask, sampleTask2,];

  const sampleWipTask: WIPTask = { id: "3", title: 'sampleTask3', usageTime: 0, records: [], startTime: new Date() };
  const sampleWipTasks: WIPTask[] = [sampleWipTask,];

  const [tasks, setTasks] = useState(sampleTasks)
  const [wipTasks, setWipTasks] = useState(sampleWipTasks);

  /** task を task のリストから wipTask のリストに移動 */
  function updateTaskBox(newWipTask: WIPTask) {
    setWipTasks([...wipTasks, newWipTask])
    setTasks(tasks.filter(t => t.id !== newWipTask.id))
  }

  const taskCardsElement = tasks.map(data => {
    return (<TaskCard key={data.id} task={data} taskHandler={updateTaskBox} />);
  });

  const wipTaskCardsElement = wipTasks.map(data => {
    return (<WIPTaskCard key={data.id} task={data} />);
  })


  return (
    <>
      <TaskForm />
      <Timer />
      {taskCardsElement}
      {wipTaskCardsElement}
    </>
  )
};