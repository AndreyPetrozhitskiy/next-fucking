'use client'
import NextLink from "next/link";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '@/app/Redux/features/auth/authSlice';
import '@/app/Styles/header.scss';

export default function Header({ openModal }) {
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.auth.ID);
  const userInfo = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth?.isLoading);
  const userId = useSelector((state) => state.auth.ID);
  
  useEffect(() => {
    if (userId) {
      dispatch(me(userId));
    }
  }, [dispatch, userId]);

  
  return (
    <header className="Header">
      <div className="Header__logo">
        <NextLink href="/">
          <img src="Logo__header.png" alt="Logo" />
        </NextLink>
      </div>

      <div className="Header__nav">
        <div className="Header__nav-link">
          <NextLink href="/about">О нас</NextLink>
          <NextLink href="/newproject">Создать проект</NextLink>
          <NextLink href="/join">Присоединиться</NextLink>
          <NextLink href="/projects">Проекты</NextLink>
          {isLoading ? (
            <span>Loading...</span>
          ) : userId ? (
            <>
              <span>{userInfo}</span>
             
              <NextLink href={`/profile/${userId}`}>
                <img src="usericon.png" alt="User" />
              </NextLink>
            </>
          ) : (
            <input type="button" onClick={() => openModal("login")} value="Войти" />
          )}
        </div>
      </div>
    </header>
  );
}

