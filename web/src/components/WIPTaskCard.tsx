import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Task, WIPTask } from './Task';
import TimeRecord from './TimeRecord';

export default function WIPTaskCard(props: { task: WIPTask, taskHandler: ((task: Task) => void) }) {
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

  const classes = useStyles();

  function handleClick() {
    let record = {
      startTime: props.task.startTime, 
      endTime: new Date()
    } as TimeRecord
    let stopTask = {
      ...props.task,
      records: [...props.task.records, record]
    }
    props.taskHandler(stopTask)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.task.title}
        </Typography>
        タイマー開始：{props.task.startTime.toLocaleTimeString()}
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Stop Timer</Button>
      </CardActions>
    </Card>
  );
}