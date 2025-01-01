"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers/authReducer';
import { logout } from '../../store/reducers/authReducer';

const Update = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state: RootState) => state.auth);
  const [phone, setPhone] = useState<string>(user?.phone || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user data if not already available
    if (!user && token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/user/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Assuming the response contains user data
          setPhone(response.data.phone);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }
  }, [token, user]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8000/api/user/update/', {
        phone,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('User  information updated successfully!');
    } catch (error) {
      setError('Error updating user information');
      console.error('Update error:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name: </label>
          <span>{user?.name}</span>
        </div>
        <div>
          <label>Email: </label>
          <span>{user?.email}</span>
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Update;
