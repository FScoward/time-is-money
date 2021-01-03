import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Task, WIPTask } from './Task';
import Timer from './Timer';
import TimeRecord from './TimeRecord';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TaskCard(props: { task: Task, taskHandler: ((newWipTask: WIPTask) => void) }) {
  const classes = useStyles();

  const [task, setTask] = useState<Task>(props.task);
  useEffect(() => {
  });

  function handleClick() {
    let timeRecord: TimeRecord = { startTime: new Date(), endTime: new Date() }

    let newTask = {
      ...task,
      records: [...task.records, timeRecord]
    }

    props.taskHandler({
      ...task,
      startTime: new Date()
    } as WIPTask)

    setTask(newTask)
  }

  // todo: タイマーストップするときにusagetimeに加算するようにする
  let sum = task.records
    // .map(r => (r.endTime.valueOf() - r.startTime.valueOf()))
    .map(r => (r.endTime.getTime() - r.startTime.getTime()))
    .reduce((sum, current) => sum + current, 0)



  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {task.title}
          usage time: {sum}
        </Typography>
        <Timer />
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Start Timer</Button>
      </CardActions>
    </Card>
  );
}