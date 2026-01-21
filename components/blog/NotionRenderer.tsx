'use client';

import { NotionRenderer as ReactNotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { ExtendedRecordMap } from 'notion-types';

interface NotionRendererProps {
  recordMap: ExtendedRecordMap;
}

export function NotionRenderer({ recordMap }: NotionRendererProps) {
  // Safety check for missing block data
  if (!recordMap?.block) {
    return <p className="text-neutral-500">Content could not be loaded.</p>;
  }

  // react-notion expects blockMap which is the 'block' property of ExtendedRecordMap
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ReactNotionRenderer blockMap={recordMap.block as any} />;
}
