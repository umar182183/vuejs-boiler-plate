import AppUsers from './users.vue';

import AppUserList from './user-list/user-list.vue';
import AppVideoMain from './video-main/video-main.vue';

const userRoutes = [
  {
    path: '/users',
    component: AppUsers,
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        component: AppUserList
      },
      {
        path: 'video-main',
        name: 'video-main',
        component: AppVideoMain
      },
      {
        path: '',
        redirect: { name: 'video-main' }
      }
    ]
  }
];

export default userRoutes;
