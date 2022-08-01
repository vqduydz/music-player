import { LogoOnly } from '../components/Layouts';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: LogoOnly },
    { path: '/register', component: Register, layout: null },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
