import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, _from) => {
  const token = import.meta.client ? localStorage.getItem('token') : null;
  if (!token && to.path !== '/login') {
    return navigateTo('/login');
  }
});
