import React from 'react';

const SidebarItem = ({ sideBarColor, itemHref, text, icon }) => {
  return (
    <>
      <ul>
        <li className={`side-bar ${sideBarColor}`}>
          <a
            className="flex justify-between items-center w-full"
            href={itemHref}
            target="_blank"
            rel="noreferrer"
          >
            {text} {icon}
          </a>
        </li>
      </ul>
    </>
  );
};

export default SidebarItem;
