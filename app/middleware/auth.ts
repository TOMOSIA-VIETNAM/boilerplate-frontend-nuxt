import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated and trying to access protected route
  if (!isAuthenticated() && to.path !== '/login') {
    return navigateTo('/login');
  }

  // If user is authenticated and trying to access login page
  if (isAuthenticated() && to.path === '/login') {
    return navigateTo('/dashboard');
  }
});
