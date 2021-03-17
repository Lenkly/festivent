import React from 'react';

function Error() {
  return (
    <span>
      Oh no, something bad happened
      <span role="img" aria-label="sadface">
        😢
      </span>
      <br />
      Please try again.
    </span>
  );
}

export default Error;
