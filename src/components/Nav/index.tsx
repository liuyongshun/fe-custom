import React, { useState } from 'react';
import { useHistory } from 'react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import CachedIcon from '@material-ui/icons/Cached';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './index.less';

const CustomNav = (props: any) => {
  const [value, setValue] = useState('1');
  const history = useHistory();

  const handleChange = (e: any): void => {
    console.log(e);
    setValue(e);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="首页" value="1" icon={<HomeIcon />} />
      <BottomNavigationAction label="推荐" value="2" icon={<CachedIcon />} />
      <BottomNavigationAction
        label="商城"
        value="3"
        icon={<AddShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="我的"
        value="4"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default CustomNav;
