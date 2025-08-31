import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import { useState } from "react";
// let votes: Votes;

export default function App() {
  const [votes, changeVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  function handleVote(type: VoteType) {
    changeVote({ ...votes, [type]: votes[type] + 1 });
  }

  const resetVotes = () => {
    changeVote({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = votes;
  const totalVotes = good + neutral + bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}