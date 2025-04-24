'use client';

import { useState } from 'react';

type Props = {
  onSubmit: (email: string, password: string) => Promise<void>;
  buttonText: string;
  children?: React.ReactNode;
};

const LoginForm = ({ onSubmit, buttonText, children }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white-500">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white-500">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">
          {buttonText}
        </button>
      </div>
      {children && <div>{children}</div>}
    </form>
  );
};

export default LoginForm;
