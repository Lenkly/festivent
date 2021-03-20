import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const defaultValue = {};

const BreakpointContext = createContext(defaultValue);

const BreakpointProvider = ({ children, queries }) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryList = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryList[media] && mediaQueryList[media].matches);
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {};
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryList[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryList[media].matches;
        } else {
          matches[media] = false;
        }
      });

      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryList[media].addListener(handleQueryListener);
        }
      });
    }
    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === 'string') {
            mediaQueryList[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

function useBreakpoints() {
  const context = useContext(BreakpointContext);
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
}

BreakpointProvider.propTypes = {
  children: PropTypes.node,
  queries: PropTypes.string,
};

export { useBreakpoints, BreakpointProvider };
