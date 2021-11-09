import { render } from '../utils/tests';
import HomePage from './homePage';

describe('Home page', () => {
  it('Should render without crashing', async () => {
    render(<HomePage />);
  });
});
