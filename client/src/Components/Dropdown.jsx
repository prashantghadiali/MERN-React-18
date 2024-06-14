import React, { useState } from 'react';
import { MenuItems } from '@/data/MenuItems';
import './Dropdown.css';
import Link from 'next/link';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// export default Dropdown;