import LandingPage from 'views/LandingPage';
import GnomeProfile from 'views/GnomeProfile';

export default [
  {
    name: 'Landing',
    path: '/',
    component: LandingPage,
  },
  {
    name: 'GnomeProfile',
    path: '/:id/profile',
    component: GnomeProfile,
  },
];
