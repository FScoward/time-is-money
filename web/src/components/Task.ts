import UsageTime from '../models/UsageTime';
import TimeRecord from './TimeRecord';

export interface Task {
  id: string
  title: string
  usageTime: UsageTime
  records: TimeRecord[]
}

export interface WIPTask extends Task {
  startTime: Date
}