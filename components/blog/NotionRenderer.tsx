'use client';

import { NotionRenderer as ReactNotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { ExtendedRecordMap } from 'notion-types';

interface NotionRendererProps {
  recordMap: ExtendedRecordMap;
}

// Validate that block data is properly structured for react-notion
function isValidBlockMap(block: ExtendedRecordMap['block']): boolean {
  if (!block || typeof block !== 'object') return false;

  // Check that at least one block exists and has the expected structure
  const blockIds = Object.keys(block);
  if (blockIds.length === 0) return false;

  // Verify the first block has a 'value' property (required by react-notion)
  const firstBlockId = blockIds[0];
  if (!firstBlockId) return false;

  const firstBlock = block[firstBlockId];
  if (!firstBlock?.value) return false;

  return true;
}

export function NotionRenderer({ recordMap }: NotionRendererProps) {
  // Safety check for missing or invalid block data
  if (!recordMap?.block || !isValidBlockMap(recordMap.block)) {
    return <p className="text-neutral-500">Content could not be loaded.</p>;
  }

  // react-notion expects blockMap which is the 'block' property of ExtendedRecordMap
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ReactNotionRenderer blockMap={recordMap.block as any} />;
}
