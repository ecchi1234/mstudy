import { ObjectId } from 'mongodb';

interface IGoalContructor {
  _id: ObjectId; // Unique identifier for the goal
  title: string;
  description: string;
  is_done: boolean;
  createdAt: Date; // Timestamp of when the goal was created
  updatedAt: Date; // Timestamp of the last update to the goal
  tasks: ObjectId[]; // array of task IDs associated with the goal
  tags?: ObjectId[]; // Optional array of tag IDs associated with the goal
}

export default class Goal {
  _id: ObjectId;
  title: string;
  description: string;
  is_done: boolean;
  createdAt: Date;
  updatedAt: Date;
  tasks: ObjectId[];
  tags?: ObjectId[];

  constructor(goal: IGoalContructor) {
    this._id = goal._id;
    this.title = goal.title;
    this.description = goal.description;
    this.is_done = goal.is_done;
    this.createdAt = goal.createdAt || new Date();
    this.updatedAt = goal.updatedAt || new Date();
    this.tasks = goal.tasks || [];
    this.tags = goal.tags || [];
  }
}
