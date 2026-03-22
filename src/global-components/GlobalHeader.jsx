import React from 'react';

const GlobalHeader = ({ headerText, headDirec }) => {
  return (
    <div className={`${headerText ? '' : 'mb-5'}`}>
      {headerText && <h2 className={`text-4xl font-bold mb-8 ${headDirec}`}>{headerText}</h2>}
    </div>
  );
};

export default GlobalHeader;