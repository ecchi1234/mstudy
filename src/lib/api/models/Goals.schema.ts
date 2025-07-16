import { ObjectId } from 'mongodb';

interface GoalType {
  _id: ObjectId; // Unique identifier for the goal
  title: string;
  description: string;
  is_done: boolean;
  progress: number; // Percentage of completion
  isActive: boolean; // Indicates if the goal is currently active
  createdAt: string; // Timestamp of when the goal was created
  updatedAt: string; // Timestamp of the last update to the goal
}

export default class Goal {
  _id: ObjectId;
  title: string;
  description: string;
  is_done: boolean;
  progress: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;

  constructor(goal: GoalType) {
    this._id = goal._id;
    this.title = goal.title;
    this.description = goal.description;
    this.is_done = goal.is_done;
    this.progress = goal.progress;
    this.isActive = goal.isActive;
    this.createdAt = goal.createdAt;
    this.updatedAt = goal.updatedAt;
  }
}
