import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Para crear la orden
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Creating order" });
}
