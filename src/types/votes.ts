export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = keyof Votes;
// або: export type VoteType = 'good' | 'neutral' | 'bad';
