import goalService from '@/lib/api/services/goals.services';
import { IGoalRequestBody } from '@/lib/api/models/requests/Goals.requests';

export async function getGoalsController({
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
  try {
    const goals = await goalService.getGoals({
      page,
      limit,
      order_by,
      order_option,
    });

    return {
      message: 'Get goals successfully',
      data: goals.goals,
      limit,
      page,
      total_pages: Math.ceil(goals.totalCount / limit),
    };
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw new Error('Failed to fetch goals');
  }
}

export async function createGoalController(goalData: IGoalRequestBody) {
  try {
    // Here you would typically call a service method to create a goal
    const newGoal = await goalService.createGoal(goalData);

    return {
      message: 'Goal created successfully',
      data: newGoal,
    };
  } catch (error) {
    console.error('Error creating goal:', error);
    throw new Error('Failed to create goal');
  }
}

export async function updateGoalController() {
  try {
    // Here you would typically call a service method to update a goal
    // const updatedGoal = await goalService.updateGoal(goalId, goalData);

    return {
      message: 'Goal updated successfully',
      // data: updatedGoal,
    };
  } catch (error) {
    console.error('Error updating goal:', error);
    throw new Error('Failed to update goal');
  }
}

export async function deleteGoalController() {
  try {
    // Here you would typically call a service method to delete a goal
    // await goalService.deleteGoal(goalId);

    return {
      message: 'Goal deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw new Error('Failed to delete goal');
  }
}
