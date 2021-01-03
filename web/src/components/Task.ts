import TimeRecord from './TimeRecord';

export interface Task {
  id: string
  title: string
  usageTime: number
  records: TimeRecord[]
}

export interface WIPTask extends Task {
  startTime: Date
}