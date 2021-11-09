import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrUpdateUser } from '../features/users';
import { useForm } from '../utils/hooks';
import { Account } from '../components';

function UserPage() {

  const [ editionMode, setEditionMode ] = useState(false);
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit } = useForm(async (values) => {
    setEditionMode(false);
    dispatch(fetchOrUpdateUser(values));
  });

  useEffect(() => {
    dispatch(fetchOrUpdateUser());
  }, [dispatch]);

  const user = useSelector(state => state.user);

  if (user?.status === 'rejected') {
    return <span>Il y a un problème</span>;
  }

  if (user?.status === 'pending' || user?.status === 'void') {
    return <p>Loading...</p>;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {!editionMode && 
            `${user?.data?.firstName} ${user?.data?.lastName}`
          }
        </h1>
        {!editionMode &&
          <button
            onClick={() => setEditionMode(true)}
            className="edit-button"
          >Edit Name</button>
        }
        {editionMode && 
          <section className='edit-form'>
            <form onSubmit={handleSubmit}>
              <div className='form-inputs'>
                <div className="input-wrapper">
                  <label
                    className='sr-only'
                    htmlFor="firstName"
                  >Firstname</label>
                  <input
                    type="text" id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    placeholder={user?.data?.firstName}
                  />
                </div>
                <div className="input-wrapper">
                  <label
                    className='sr-only'
                    htmlFor="lastName"
                  >Lastname</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder={user?.data?.lastName}
                  />
                </div>
              </div>
              <div className='form-btns'>
                <button
                  type='submit'
                  className="edit-button"
                >Save</button>
                <button
                  onClick={() => setEditionMode(false)}
                  type='reset'
                  className="edit-button"
                >Cancel</button>
              </div>
            </form>
          </section>
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
