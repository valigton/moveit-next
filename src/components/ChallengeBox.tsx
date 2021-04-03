import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChanllenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChanllenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChanllenge.amount} de XP</header>

          <main>
            <img src={`icons/${activeChanllenge.type}.svg`} alt="Body"/>
            <strong>Novo Desafio</strong>
            <p>{activeChanllenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}