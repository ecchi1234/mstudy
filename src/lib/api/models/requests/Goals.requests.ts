export interface IGoalRequestBody {
  title: string;
  description: string;
  is_done: boolean;
  tasks: string[];
  tags: string[];
}
