import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Task, WIPTask } from './Task';
import Timer from './Timer';
import UsageTime from '../models/UsageTime';

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
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const buttonStyles = makeStyles({

});

export default function TaskCard(props: { task: Task, taskHandler: ((newWipTask: WIPTask) => void) }) {
  const classes = useStyles();

  const [task, setTask] = useState<Task>(props.task);
  useEffect(() => {
  });

  function startTimerHandler() {
    let targetTask = {
      ...task,
      startTime: new Date()
    } as WIPTask
    props.taskHandler(targetTask)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {task.title}
        </Typography>
        <Typography>
          usage time: {task.usageTime.toSecondsString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} onClick={startTimerHandler} size="small">Start Timer</Button>
      </CardActions>
    </Card>
  );
}