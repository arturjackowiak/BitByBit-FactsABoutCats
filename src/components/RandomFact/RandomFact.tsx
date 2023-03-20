import { Button } from 'rsuite';

import { useRandomFact } from './hooks/useRandomFact';
import { Wrapper, Text } from './RandomFact.style';

const RandomFact = () => {
  const { handleClick, randomFact } = useRandomFact();
  const textMessage = randomFact?.fact || 'Unfortunately, the list of facts is empty';

  return (
    <Wrapper>
      {randomFact && <Button onClick={handleClick}>Random fact</Button>}
      <Text>{textMessage}</Text>
    </Wrapper>
  );
};

export default RandomFact;
