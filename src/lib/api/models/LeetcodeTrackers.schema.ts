import { ObjectId } from 'mongodb';
import { LeetcodeDifficulty } from '@/lib/api/const/enum';
interface ILeetcodeTrackersConstructor {
  _id: ObjectId; // Unique identifier for the LeetCode tracker entry
  user_id: ObjectId; // ID of the user who created the tracker entry
  url: string; // Unique identifier for the LeetCode problem
  idea_notes: string; // Notes or ideas related to the problem
  solution_codes: string[]; // Code solution for the problem
  difficulty: LeetcodeDifficulty; // Difficulty level of the problem (e.g., Easy, Medium, Hard)
  tags: string[]; // Tags associated with the problem (e.g., Array, String, Dynamic Programming)
  created_at: Date; // Timestamp of when the tracker entry was created
  updated_at: Date; // Timestamp of the last update to the tracker entry
  is_done: boolean; // Indicates whether the problem has been solved
}

export default class LeetcodeTracker {
  _id: ObjectId;
  user_id: ObjectId;
  url: string;
  idea_notes: string;
  solution_codes: string[];
  difficulty: LeetcodeDifficulty;
  tags: string[];
  created_at: Date;
  updated_at: Date;
  is_done: boolean;

  constructor(tracker: ILeetcodeTrackersConstructor) {
    this._id = tracker._id;
    this.user_id = tracker.user_id;
    this.url = tracker.url;
    this.idea_notes = tracker.idea_notes || '';
    this.solution_codes = tracker.solution_codes || [];
    this.difficulty = tracker.difficulty || LeetcodeDifficulty.EASY;
    this.tags = tracker.tags || [];
    this.created_at = tracker.created_at || new Date();
    this.updated_at = tracker.updated_at || new Date();
    this.is_done = tracker.is_done || false;
  }
}
