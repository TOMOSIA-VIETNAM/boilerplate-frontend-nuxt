import { readonly, ref } from 'vue';

const sidebarState = {
  isOpen: ref(true),
  activeRoute: ref(''),
};

export const useSidebar = () => {
  const toggle = () => {
    sidebarState.isOpen.value = !sidebarState.isOpen.value;
  };

  const close = () => {
    sidebarState.isOpen.value = false;
  };

  const open = () => {
    sidebarState.isOpen.value = true;
  };

  const setActiveRoute = (route: string) => {
    sidebarState.activeRoute.value = route;
  };

  const isActiveRoute = (route: string) => {
    return sidebarState.activeRoute.value === route;
  };

  return {
    isOpen: readonly(sidebarState.isOpen),
    activeRoute: readonly(sidebarState.activeRoute),
    toggle,
    close,
    open,
    setActiveRoute,
    isActiveRoute,
  };
};
