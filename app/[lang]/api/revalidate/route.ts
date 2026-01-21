import { revalidate } from '../../../../lib/shopify';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const type = req.nextUrl.searchParams.get('type');

  // Handle blog revalidation
  if (type === 'blog') {
    console.log('Revalidating blog pages...');
    revalidatePath('/en/blog', 'layout');
    revalidatePath('/de/blog', 'layout');
    return NextResponse.json({ status: 200, revalidated: true, type: 'blog', now: Date.now() });
  }

  // Handle Shopify products revalidation (default)
  console.log('Revalidating Shopify products...');
  return revalidate(req);
}
