import store from '../utils/store';
import * as usersActions from '../features/users';
import { useFetch } from '../utils/hooks';
import { Account } from '../components';

function UserPage() {

  const { isLoading, data, error } = useFetch({
    verb: 'post',
    url: '/user/profile',
  });

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>You are not connected</p>
  }

  if (data) {
    store.dispatch(usersActions.set(data))
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{`${data.firstName} ${data.lastName}`}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account 
        title='Argent Bank Checking (x8349)'
        description='Available Balance'
        amount='2,082.79'
      />
      <Account 
        title='Argent Bank Savings (x6712)'
        description='Available Balance'
        amount='10,928.42'
      />
      <Account 
        title='Argent Bank Credit Card (x8349)'
        description='Current Balance'
        amount='184.30'
      />
    </main>
  );
}

export default UserPage;
