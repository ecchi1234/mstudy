import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
  } catch (error) {
    console.error('Error updating goal:', error);
    return NextResponse.error();
  }
}
export async function DELETE(request: NextRequest) {
  try {
  } catch (error) {
    console.error('Error deleting goal:', error);
    return NextResponse.error();
  }
}
