import React from 'react';

function Error() {
  return (
    <div style={{ paddingTop: '200px' }}>
      <span>
        Oh no, something bad happened{' '}
        <span role="img" aria-label="sadface">
          😢
        </span>
        <br />
        Please try again.
      </span>
    </div>
  );
}

export default Error;
