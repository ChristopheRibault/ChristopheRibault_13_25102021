import { useState, useEffect } from 'react';
import store from '../utils/store';
import * as usersActions from '../features/users';
import { useFetch, useForm } from '../utils/hooks';
import fetcher from '../utils/axios';
import { Account } from '../components';

function UserPage() {

  const [ editionMode, setEditionMode ] = useState(false);
  const [ userInfo, setUserInfo ] = useState({});

  const { isLoading, data, error } = useFetch({
    verb: 'post',
    url: '/user/profile',
  });
  
  useEffect(() => {
    setUserInfo(data);
  }, [data]);

  const { values, handleChange, handleSubmit } = useForm(async (values) => {
    setEditionMode(false);

    try {
      const headers = {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      };
      fetcher.put('/user/profile', values, { headers });
      setUserInfo(values);

    } catch (error) {
      console.log(error);
    }

  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>You are not connected</p>;
  }

  if (data) {
    store.dispatch(usersActions.set(data));
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{`${userInfo.firstName} ${userInfo.lastName}`}</h1>
        {!editionMode &&
          <button onClick={() => setEditionMode(true)} className="edit-button">Edit Name</button>
        }
        {editionMode && 
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="firstName">Firstname</label>
              <input type="text" id="firstName" name="firstName" value={values.firstName || ''} onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Lastname</label>
              <input type="text" id="lastName" name="lastName" value={values.lastName || ''} onChange={handleChange} />
            </div>
            <button type='submit' className="edit-button">Valider</button>
          </form>
        }
      </div>

      <h2 className="sr-only">Accounts</h2>
      {/* Placeholder to be replaced by data fetched from server*/}
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
