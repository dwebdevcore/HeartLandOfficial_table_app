import React from 'react';

const NotFound = () => (
  <div class="errorpage notfound">
    <div class="content">
      <h2>Not Found.</h2>
      <p>{process.env.PUBLIC_URL}</p>
    </div>
  </div>
);

export default NotFound;
