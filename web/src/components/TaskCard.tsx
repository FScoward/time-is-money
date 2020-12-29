import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Task from './Task';
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

export default function TaskCard(props: { task: Task }) {
  const classes = useStyles();

  const [task, setTask] = useState<Task>(props.task);
  useEffect(() => {
  });

  const record = task.records.map(r => {
    return (r.startTime.toLocaleTimeString())
  });

  function handleClick() {
    let timeRecord: TimeRecord = { startTime: new Date(), endTime: new Date() }

    let newTask = {
      ...task,
      records: [...task.records, timeRecord]
    }

    console.log(newTask)

    setTask(newTask)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {task.title}
        </Typography>
        <p>{record}</p>
        <Timer />
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Start Timer</Button>
      </CardActions>
    </Card>
  );
}