import { render } from '../utils/tests';
import Login from './login';

describe('Login', () => {
  it('Should render without crashing', async () => {
    render(<Login />);
  });
});
