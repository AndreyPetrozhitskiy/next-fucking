'use client'
import React, { useState,useEffect} from "react";
import '@/app/Styles/profile.scss';
import ModalPassword from "@/app/Components/ModalPassword";
import { useDispatch, useSelector } from 'react-redux';
import { me, logout } from '@/app/Redux/features/auth/authSlice';
import axios from 'axios';  // Добавим этот импорт
import NextLink from "next/link";
export default function Profile() {
  const [isModalOpenPassword, setIsModalOpenPassword] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.ID);
  const [username, setUsername] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`http://74.119.192.138:5000/api/users/one-user/${userId}`);
        const userData = await userResponse.json();
  
        if (userData.length > 0) {
          setUsername(userData[0].username);
  
          const rolesResponse = await axios.get('http://74.119.192.138:5000/api/role/all-roles');
          const userRoles = rolesResponse.data.filter((role) => role.UserName === userData[0].username);
          
          if (userRoles.length > 0) {
            setData(userRoles.map((role) => ({ name: role.ProjectName, role: role.Role, status: 'В разработке' })));
            
          } 
        
        }
      } catch (error) {
        console.log('Ошибка при получении данных:', error);
      }
    };
  
    if (userId) {
      fetchData();
    }
  }, [userId]);
  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const openModalPassword = () => {
    setIsModalOpenPassword(true);
  };

  const closeModalPassword = () => {
    setIsModalOpenPassword(false);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main>
    <ModalPassword isOpen={isModalOpenPassword} onClose={closeModalPassword} />
    <div className="Profile">
      <h1>Портфолио</h1>
      <NextLink href="/">
        <input type="button" onClick={handleLogout} value={'Выйти'} />
      </NextLink>
      <div className="Profile__search">
        <div className="Profile__search__input">
          <input type="text" placeholder="Поиск" />
          <img src="/Lupa.png" alt="Search" />
        </div>
      </div>

      <div className="Profile__container">
        <div className="Profile__container__user">
          <div className="Profile__container__user__avatar">
            <img src="/pencil.png" alt="Avatar" />
          </div>
          <div className="Profile__container__user__login">
            <p>{username}</p>
            <input type="button" onClick={openModalPassword} value="Изменить пароль" />
          </div>
        </div>

        <div className="Profile__container__project">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div className="Profile__container__project__item" key={index}>
                <div className="Profile__container__project__item__number">
                  <p>{index + 1}</p>
                </div>
                <div className="Profile__container__project__item__name">
                  <div className="Profile__container__project__item__name__h1">
                    <h1>{item.name}</h1>
                  </div>
                  <div className="Profile__container__project__item__name__role">
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Проектов нет</p>
          )}
        </div>
      </div>
    </div>
  </main>
  );
}
