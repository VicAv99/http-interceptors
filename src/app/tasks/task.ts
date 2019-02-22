export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  'HIGH PRIORITY',
  'LOW PRIORITY',
  'BLOCKED'
}
