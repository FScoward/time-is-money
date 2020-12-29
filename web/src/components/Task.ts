import TimeRecord from './TimeRecord';

interface Task {
  id: string,
  title: string
  usageTime: number
  records: TimeRecord[]
}
export default Task;