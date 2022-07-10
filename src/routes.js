const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    meta: { title: 'Home' },
  },
  {
    // Not Found 404
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue'),
  },
]
export default routes
