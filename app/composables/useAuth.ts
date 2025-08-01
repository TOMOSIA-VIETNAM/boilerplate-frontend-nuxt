import { readonly, ref } from 'vue';

interface User {
  email: string;
  role: string;
}

const user = ref<User | null>(null);
const token = ref<string | null>(null);

export function useAuth() {
  const toast = useToast();

  // Initialize auth state from localStorage on mount
  onMounted(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      token.value = storedToken;
      user.value = JSON.parse(storedUser);
    }
  });

  const login = async (email: string, password: string) => {
    if (email === 'admin@example.com' && password === 'admin') {
      const userData = { email, role: 'admin' };
      const userToken = 'mock-token-admin';

      user.value = userData;
      token.value = userToken;

      // Store in localStorage
      localStorage.setItem('token', userToken);
      localStorage.setItem('user', JSON.stringify(userData));

      toast.add({
        title: 'Success',
        description: 'Login successful',
      });

      await navigateTo('/dashboard');
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;

    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    toast.add({
      title: 'Success',
      description: 'Logout successful',
    });

    navigateTo('/login');
  };

  const isAuthenticated = () => {
    return !!(token.value && user.value);
  };

  const getUser = () => user.value;

  return {
    user: readonly(user),
    token: readonly(token),
    login,
    logout,
    isAuthenticated,
    getUser,
  };
}
