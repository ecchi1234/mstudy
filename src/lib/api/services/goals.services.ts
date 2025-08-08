import db from '@/lib/api/services/database.services';
import { IGoalRequestBody } from '@/lib/api/models/requests/Goals.requests';
import Goal from '@/lib/api/models/Goals.schema';
import { ObjectId } from 'mongodb';

class GoalService {
  async getGoalById(goalId: string) {
    try {
      const goal = await db.goals.findOne({ _id: new ObjectId(goalId) });
      if (!goal) {
        throw new Error('Goal not found');
      }
      return goal;
    } catch (error) {
      console.error('Error fetching goal by ID:', error);
      throw new Error('Failed to fetch goal');
    }
  }

  async getGoals({
    page,
    limit,
    order_by,
    order_option,
  }: {
    page: number;
    limit: number;
    order_by: string;
    order_option: string;
  }) {
    const skip = (page - 1) * limit;

    try {
      const goals = await db.goals
        .find({})
        .sort({ [order_by]: order_option === 'asc' ? 1 : -1 })
        .skip(skip)
        .limit(limit)
        .toArray();

      const totalCount = await db.goals.countDocuments();

      return {
        goals,
        totalCount,
      };
    } catch (error) {
      console.error('Error fetching goals:', error);
      throw new Error('Failed to fetch goals');
    }
  }

  async createGoal(goalData: IGoalRequestBody) {
    try {
      const newGoal = new Goal({
        title: goalData.title,
        description: goalData.description,
        is_done: Boolean(goalData.is_done),
        tasks: goalData.tasks.map((taskId) => new ObjectId(taskId)),
        tags: goalData.tags
          ? goalData.tags.map((tagId) => new ObjectId(tagId))
          : [],
      });

      const result = await db.goals.insertOne(newGoal);

      const goal = await db.goals.findOne({ _id: result.insertedId });

      return goal;
    } catch (error) {
      console.error('Error creating goal:', error);
      throw new Error('Failed to create goal');
    }
  }

  async updateGoal(goalId: string, goalData: IGoalRequestBody) {
    try {
      const updatedGoal = await db.goals.findOneAndUpdate(
        { _id: new ObjectId(goalId) },
        {
          $set: {
            title: goalData.title,
            description: goalData.description,
            is_done: goalData.is_done,
            tasks: goalData.tasks.map((taskId) => new ObjectId(taskId)),
            tags: goalData.tags
              ? goalData.tags.map((tagId) => new ObjectId(tagId))
              : [],
          },

          $currentDate: { updated_at: true },
        },
        { returnDocument: 'after' }
      );

      return updatedGoal;
    } catch (error) {
      console.error('Error updating goal:', error);
      throw new Error('Failed to update goal');
    }
  }

  async deleteGoal(goalId: string) {
    try {
      const result = await db.goals.findOneAndDelete({
        _id: new ObjectId(goalId),
      });
      return result;
    } catch (error) {
      console.error('Error deleting goal:', error);
      throw new Error('Failed to delete goal');
    }
  }
}

const goalService = new GoalService();
export default goalService;
