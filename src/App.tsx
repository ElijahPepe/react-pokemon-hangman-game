import { Keyboard } from './components/Keyboard';
import { WordInProgress } from './components/WordInProgress';
import { Avatar } from './components/Avatar';
import { AttemptsDisplay } from './components/AttemptsDisplay';
import { Button } from './components/Button';
import { ButtonTypeEnum } from './components/Button/enums';

import { useAppContext } from './context/AppContext';

import './App.css';
import { randomIntFromInterval } from './library/utils';

function App() {
  const {
    gameState: {
      pokemonData: {
        name,
        image,
        flavorText
      },
      remainingAttempts,
      wordInProgress,
      hasTip,
    },
    onFindNewPokemon,
    onClickLetter,
  } = useAppContext();

  function openModal() {
    console.log('Open modal');
  }

  function handleUseMyTip() {
    const hiddenLetters = name.split('').filter(l => !wordInProgress.includes(l));
    const letter = hiddenLetters[randomIntFromInterval(0, hiddenLetters.length - 1)];

    onClickLetter(letter, true);
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="flex align-center justify-between">
            <AttemptsDisplay remainingAttempts={remainingAttempts} />
            <Button type={ButtonTypeEnum.Primary} onClick={handleUseMyTip} disabled={!hasTip}>Use my tip</Button>
          </div>
          <Avatar name={name} image={image} flavorText={flavorText} />
          <WordInProgress wordInProgress={wordInProgress} />
          <div>
            <Keyboard />
            <p className="text-center color-hint">Use the virtual keyboard above or type the name manually.</p>
            <div className="flex align-center justify-center flex-column">
              <Button type={ButtonTypeEnum.Link} onClick={openModal}>Type name</Button>
              <Button type={ButtonTypeEnum.Primary} onClick={onFindNewPokemon}>Restart</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
