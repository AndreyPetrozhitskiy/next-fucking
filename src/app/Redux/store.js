import { configureStore } from '@reduxjs/toolkit';
import authSlice, { checkAuthToken } from '@/app/Redux/features/auth/authSlice';

const getStoredToken = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('token') || null;
  }
  return null;
};

const getStoredUserInfo = () => {
  if (typeof window !== 'undefined') {
    const storedUserInfo = window.localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  }
  return null;
};

// Асинхронная функция для проверки токена
const checkToken = async () => {
  const storedToken = getStoredToken();
  if (storedToken) {
    // Если токен есть, проверяем его
    try {
      await store.dispatch(checkAuthToken(storedToken));
    } catch (error) {
      console.error('Error checking token:', error);
    }
  }
};

// Вызываем асинхронную проверку токена
checkToken();

const initialState = {
  auth: {
    ...authSlice.initialState,
    token: getStoredToken(),
    ...(getStoredUserInfo() || {}),
  },
};

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  preloadedState: initialState,
});