import { useState } from 'react';
import Cookies from 'universal-cookie';
import consts from 'consts';

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState('');

  return (
    <div className="w-1/3 max-w-sm mx-auto">
      <form>
        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="text"
            className="form-input mt-1 block w-full bg-gray-50"
            placeholder="Your site password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600"
          onClick={(e) => {
            e.preventDefault();
            const cookies = new Cookies();
            cookies.set(consts.SiteReadCookie, password, {
              path: '/',
            });
            window.location.href = redirectPath ?? '/';
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
