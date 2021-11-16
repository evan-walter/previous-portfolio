import React from 'react';
import { Link } from 'react-scroll';

export default function MyLink({ to, children }) {
  return (
    <div>
      <Link to={to} smooth duration={850}>
        {children}
      </Link>
    </div>
  );
}
