// ParentComponent.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Outlet />
    </div>
  );
};

export default ParentComponent;
