export interface IGoalRequestBody {
  title: string;
  description: string;
  is_done: number;
  tasks: string[];
  tags: string[];
}
