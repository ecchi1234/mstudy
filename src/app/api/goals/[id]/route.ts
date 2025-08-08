import {
  deleteGoalController,
  getGoalById,
  updateGoalController,
} from '@/lib/api/controllers/goals.controllers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // Here you would typically call a service method to get a specific goal
    // For example, you might call a service method to fetch the goal by ID
    const goal = await getGoalById(id);

    return NextResponse.json({
      message: 'Goal fetched successfully',
      data: goal,
    });
  } catch (error) {
    console.error('Error fetching goal:', error);
    return NextResponse.error();
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();

    const { id } = await params;

    const updatedGoal = await updateGoalController({
      goalId: id,
      goalData: body,
    });

    return NextResponse.json({
      message: 'Goal updated successfully',
      data: updatedGoal,
    });
  } catch (error) {
    console.error('Error updating goal:', error);
    return NextResponse.error();
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteGoalController(id);
    return NextResponse.json({
      message: 'Goal deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting goal:', error);
    return NextResponse.error();
  }
}
