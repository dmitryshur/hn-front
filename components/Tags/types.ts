export type TTag = 'newest' | 'best';

export interface ITag {
  id: TTag;
  text: string;
  selected?: boolean;
}
