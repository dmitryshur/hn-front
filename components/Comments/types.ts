export interface IComment {
  id: number;
  deleted?: boolean;
  by?: string;
  time?: number;
  dead?: boolean;
  kids?: number[];
  parent?: number;
  text?: string;
  story_id: number;
}
