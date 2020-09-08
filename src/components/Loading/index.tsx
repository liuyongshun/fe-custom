import React from 'react';
import { useState } from '@store/home/index';

import './index.scss';

const Loading: React.FunctionComponent = () => {
  const loading = useState('loading');

  return loading ? (
    <div className="loading">
      <div className="loading-content">
        <div className="loading-bounce1" />
        <div className="loading-bounce2" />
      </div>
    </div>
  ) : null;
};

export default Loading;
