import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface User {
  email: string;
  role: string;
}

const user = ref<User | null>(null);
const token = ref<string | null>(null);

export function useAuth() {
  const router = useRouter();
  const toast = useToast();

  const login = async (email: string, password: string) => {
    // Mock API call
    if (email === 'admin@example.com' && password === 'admin') {
      user.value = { email, role: 'admin' };
      token.value = 'mock-token-admin';
      localStorage.setItem('token', token.value);

      toast.add({
        title: 'Success',
        description: 'Login successful',
      });

      router.push('/');
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('token');

    toast.add({
      title: 'Success',
      description: 'Logout successful',
    });

    router.push('/login');
  };

  const isAuthenticated = () => !!token.value;

  return { user, token, login, logout, isAuthenticated };
}
