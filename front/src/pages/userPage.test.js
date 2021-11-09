import { render } from '../utils/tests';
import UserPage from './userPage';

describe('UserPage', () => {
  it('Should render without crashing', async () => {
    render(<UserPage />);
  });
});
