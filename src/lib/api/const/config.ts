import { config } from 'dotenv';

config({
  path: '.env',
});

export const envConfig = {
  MONGODB_URI:
    process.env.MONGODB_URI || ('mongodb://localhost:27017/mstudy' as string),
  DATABASE_NAME: process.env.DATABASE_NAME || ('mstudy-development' as string),
  DATABASE_GOALS_COLLECTION: process.env.DATABASE_GOALS_COLLECTION || 'goals',
  DATABASE_USERS_COLLECTION: process.env.DATABASE_USERS_COLLECTION || 'users',
  DATABASE_TASKS_COLLECTION: process.env.DATABASE_TASKS_COLLECTION || 'tasks',
  DATABASE_RESOURCES_COLLECTION:
    process.env.DATABASE_RESOURCES_COLLECTION || 'resources',
  DATABASE_TAGS_COLLECTION: process.env.DATABASE_TAGS_COLLECTION || 'tags',
  DATABASE_LEETCODE_TRACKER_COLLECTION:
    process.env.DATABASE_LEETCODE_TRACK_COLLECTION || 'leetcode_trackers',
  DATABASE_LOG_LEARNINGS_COLLECTION:
    process.env.DATABASE_LOG_LEARNINGS_COLLECTION || 'log_learnings',
};
