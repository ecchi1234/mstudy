import { Collection, Db, MongoClient } from 'mongodb';
import { envConfig } from '@/lib/api/const/config';
import User from '@/lib/api/models/Users.schema';

class DatabaseService {
  private db: Db;
  private client: MongoClient;

  constructor() {
    this.client = new MongoClient(envConfig.MONGODB_URI);
    this.db = this.client.db(envConfig.DATABASE_NAME);
  }

  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 });
      console.log(
        'Pinged your deployment. You successfully connected to MongoDB!'
      );
    } catch (error) {
      console.log('Error', error);
      throw Error;
    }
  }

  get users(): Collection<User> {
    return this.db.collection(envConfig.DATABASE_USERS_COLLECTION);
  }

  get goals(): Collection {
    return this.db.collection(envConfig.DATABASE_GOALS_COLLECTION);
  }
  get tasks(): Collection {
    return this.db.collection(envConfig.DATABASE_TASKS_COLLECTION);
  }
  get resources(): Collection {
    return this.db.collection(envConfig.DATABASE_RESOURCES_COLLECTION);
  }
  get tags(): Collection {
    return this.db.collection(envConfig.DATABASE_TAGS_COLLECTION);
  }
  get leetcodeTrackers(): Collection {
    return this.db.collection(envConfig.DATABASE_LEETCODE_TRACKER_COLLECTION);
  }
  get logLearnings(): Collection {
    return this.db.collection(envConfig.DATABASE_LOG_LEARNINGS_COLLECTION);
  }
}

const databaseService = new DatabaseService();
export default databaseService;
