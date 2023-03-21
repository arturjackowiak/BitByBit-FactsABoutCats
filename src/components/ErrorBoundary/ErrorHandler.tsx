import { FallbackProps } from 'react-error-boundary';
import { Button } from 'rsuite';

import { Wrapper } from 'Components/Utils/Input/Input.style';

const ErrorHandler = ({ resetErrorBoundary }: FallbackProps) => (
  <Wrapper>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </Wrapper>
);

export default ErrorHandler;
