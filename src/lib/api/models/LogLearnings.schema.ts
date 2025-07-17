import { ObjectId } from 'mongodb';

interface ILogLearningsContructor {
  _id: ObjectId; // Unique identifier for the log learning entry
  user_id: ObjectId; // ID of the user who created the log learning entry
  content: string; // Content of the log learning entry
  total_time: number; // Total time spent on the learning activity in minutes
  created_at: Date; // Timestamp of when the log learning entry was created
  updated_at: Date; // Timestamp of the last update to the log learning entry
  goal_id?: ObjectId; // Optional ID of the goal associated with the log learning entry
}

export default class LogLearning {
  _id: ObjectId;
  user_id: ObjectId;
  content: string;
  total_time: number;
  created_at: Date;
  updated_at: Date;
  goal_id?: ObjectId;

  constructor(logLearning: ILogLearningsContructor) {
    this._id = logLearning._id;
    this.user_id = logLearning.user_id;
    this.content = logLearning.content;
    this.total_time = logLearning.total_time || 0;
    this.created_at = logLearning.created_at || new Date();
    this.updated_at = logLearning.updated_at || new Date();
    this.goal_id = logLearning.goal_id;
  }
}
