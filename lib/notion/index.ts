import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import type { ExtendedRecordMap } from 'notion-types';
import { formatNotionPageAttributes, isNonEmptyNonPartialNotionResponse } from './utils';
import { NotionDatabaseProperty } from './types';

class NotionClient {
  private notionContentClient: NotionAPI;
  private notionApiClient: Client;

  constructor() {
    this.notionContentClient = new NotionAPI({
      activeUser: process.env.NOTION_ACTIVE_USER,
      authToken: process.env.NOTION_TOKEN_V2
    });

    this.notionApiClient = new Client({
      auth: process.env.NOTION_API_INTEGRATION_SECRET
    });
  }

  async getDatabaseEntries<T extends Record<string, NotionDatabaseProperty>>(
    databaseId: string | undefined,
    typeGuard: (value: Record<string, NotionDatabaseProperty>) => value is T
  ): Promise<T[]> {
    if (databaseId === undefined) throw new Error('No database id provided');

    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId
    });

    if (results.length === 0) return [];

    if (isNonEmptyNonPartialNotionResponse(results)) {
      const entries: Record<string, NotionDatabaseProperty>[] = results.map(
        ({ id, properties, cover }) => {
          let coverImage = '';
          if (cover?.type === 'file' && cover?.file?.url) {
            coverImage = cover.file.url;
          }
          if (cover?.type === 'external' && cover?.external?.url) {
            coverImage = cover.external.url;
          }
          return {
            ...formatNotionPageAttributes(properties),
            id,
            coverImage
          };
        }
      );
      return entries.filter(typeGuard);
    }
    throw new Error('Partial response returned by Notion API');
  }

  async getPageContent(
    databaseId: string | undefined,
    filter: QueryDatabaseParameters['filter']
  ): Promise<{ article: ExtendedRecordMap; title: string; coverImage: string }> {
    if (databaseId === undefined) throw new Error('No database id provided');

    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId,
      filter
    });

    const id = results[0]?.id;
    if (id === undefined) throw new Error('No Page Found');

    let coverImage = '';
    const cover = (results[0] as { cover?: { type: string; file?: { url: string }; external?: { url: string } } })?.cover;
    if (cover?.type === 'file' && cover?.file?.url) {
      coverImage = cover.file.url;
    }
    if (cover?.type === 'external' && cover?.external?.url) {
      coverImage = cover.external.url;
    }

    const title = (
      results[0] as { properties?: { title?: { title: Array<{ plain_text: string }> } } }
    )?.properties?.title?.title[0]?.plain_text ?? '';

    const article = await this.notionContentClient.getPage(id);

    // Log if block content is missing (helpful for debugging)
    if (!article?.block || Object.keys(article.block).length === 0) {
      console.warn(`Warning: No block content returned for page ID: ${id}, title: ${title}`);
    }

    return {
      article,
      coverImage,
      title
    };
  }
}

export const notionClient = new NotionClient();

export const getBlogDatabaseId = (lang: 'en' | 'de'): string | undefined => {
  return lang === 'de' ? process.env.NOTION_DATABASE_ID_DE : process.env.NOTION_DATABASE_ID;
};
