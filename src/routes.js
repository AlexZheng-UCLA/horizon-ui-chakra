import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
} from 'react-icons/md';

// Admin Imports
import Profile from 'views/admin/profile';
import Video from 'views/admin/video';
import DataTables from 'views/admin/dataTables';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Video',
    layout: '/admin',
    path: '/video/:videoId',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Video />,
  },
  {
    name: 'All Videos',
    layout: '/admin',
    path: '/all-videos',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <DataTables />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
];

export default routes;
