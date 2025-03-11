import { revalidate } from '../../../../../lib/shopify';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  console.log('Revalidating Shopify products...');
  return revalidate(req);
}
