import React from 'react';
import request from '../../common/fetch';

const PageIndex: React.FC<unknown> = () => {
  request('/api/v1/login', {
    body: {
      userName: '',
      password: 'a333'
    }
  }).then((res) => {
    console.log(res);
  });
  return <div>home</div>;
};

export default PageIndex;
