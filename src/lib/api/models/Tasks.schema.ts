import { ObjectId } from 'mongodb';

interface ITaskConstructor {
  _id: ObjectId; // Unique identifier for the task
  title: string;
  description: string;
  is_done: boolean;
  created_at: Date; // Timestamp of when the task was created
  update_at: Date; // Timestamp of the last update to the task
  goal_id?: ObjectId; // Optional ID of the goal associated with the task
}

export default class Task {
  _id: ObjectId;
  title: string;
  description: string;
  is_done: boolean;
  created_at: Date;
  update_at: Date;
  goal_id?: ObjectId;

  constructor(task: ITaskConstructor) {
    this._id = task._id;
    this.title = task.title;
    this.description = task.description;
    this.is_done = task.is_done;
    this.created_at = task.created_at || new Date();
    this.update_at = task.update_at || new Date();
    this.goal_id = task.goal_id;
  }
}
