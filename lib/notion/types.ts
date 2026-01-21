export enum NotionBlockTypes {
  rich_text = 'rich_text',
  multi_select = 'multi_select',
  select = 'select',
  title = 'title',
  last_edited_time = 'last_edited_time',
  date = 'date',
  url = 'url',
  number = 'number'
}

export type SelectColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';

export type SelectProperty = {
  color: SelectColor;
  name: string;
  id: string;
};

export type NotionDatabaseProperty = string | SelectProperty | SelectProperty[] | null | number;

export type Tag = {
  id: string;
  color: SelectColor;
  name: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: Tag[];
  published: string;
  coverImage: string;
};

export const isArticle = (obj: Record<string, NotionDatabaseProperty>): obj is Article => {
  const today = new Date();
  const isPublished = obj.published ? new Date(obj.published as string) <= today : false;
  return (
    typeof obj === 'object' &&
    typeof obj.coverImage === 'string' &&
    typeof obj.id === 'string' &&
    typeof obj.slug === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.published === 'string' &&
    isPublished
  );
};
