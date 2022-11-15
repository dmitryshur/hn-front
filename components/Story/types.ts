export interface IStory {
  id: number;
  deleted?: boolean;
  by?: string;
  time?: number;
  dead?: boolean;
  descendants?: number;
  score?: number;
  title?: string;
  url?: string;
}
