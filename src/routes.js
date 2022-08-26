const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/dashboard',
    component: () => import('./views/dashboard.vue'),
    meta: { title: 'Dashboard' },
  },
  {
    path: '/analytics',
    meta: { title: 'Analytics' },
  },
  {
    // Not Found 404
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue'),
  },
]
export default routes
