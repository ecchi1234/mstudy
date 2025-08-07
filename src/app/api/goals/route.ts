import {
  getGoalsController,
  createGoalController,
} from '@/lib/api/controllers/goals.controllers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const { page, limit, order_by, order_option } = Object.fromEntries(
      url.searchParams.entries()
    );
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 10;
    const orderBy = order_by || 'created_at';
    const orderOption = order_option || 'desc';

    const result = await getGoalsController({
      page: pageNumber,
      limit: limitNumber,
      order_by: orderBy,
      order_option: orderOption,
    });

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching goals:', error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Here you would typically handle the creation of a new goal
    // For example, you might call a service method to create a goal
    const result = await createGoalController(body);

    return NextResponse.json(
      { message: 'Goal created successfully', goal: result },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating goal:', error);
    return NextResponse.error();
  }
}
