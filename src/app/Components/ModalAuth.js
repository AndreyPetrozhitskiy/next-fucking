'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, checkIsAuth, loginUser } from '@/app/Redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "@/app/Styles/modal.scss";

const ModalAuth = ({ isOpen, onClose, type, setModalType }) => {

  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {status} = useSelector(state => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch();

  useEffect(() => {
      const handleOutsideClick = (event) => {
        if (isOpen && !event.target.closest(".Modal")) {
          onClose();
        }
      };
  
      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };

      if (status) {
        toast(status)
      }

    }, [isOpen, onClose, status]);
  
    useEffect(() => {
      const disableScroll = () => {
        document.body.classList.add("modal-open");
      };
  
      const enableScroll = () => {
        document.body.classList.remove("modal-open");
      };
  
      if (isOpen) {
        disableScroll();
      } else {
        enableScroll();
      }
  
      return () => {
        enableScroll();
      };
    }, [isOpen]);
  
    const handleSwitchModal = (newType) => {
      setModalType(newType);
    };
  
    const handleCrossClick = () => {
      onClose();
    };

    const handleSubmit = async () => {
      try {
        if (password.length < 5){
          toast.error('Пароль должен содержать не менее 5 символов');
          return;
        }
        if (password.length > 100){
          toast.error('Пароль должен содержать не более 100 символов');
          return;
        }
    
        const response = await dispatch(registerUser({ name, password }));
        if (response.payload && response.payload.error) {
          toast.error('Ошибка при регистрации: ' + response.payload.error);
        } else {
          toast.success('Регистрация успешна');
          setPassword('');
          setUsername('');
          onClose();
        }
      } catch (err) {
        console.error(err);
        toast.error('Ошибка при регистрации');
      } finally {
        // Сброс текущей формы после отправки
        dispatch(setCurrentForm(null));
      }
    };
    
    const handleSubmitLogin = async () => {
      try {
        if (password.length < 5) {
          toast.error('Пароль должен содержать не менее 5 символов');
          return;
        }
        if (password.length > 100){
          toast.error('Пароль должен содержать не более 100 символов');
          return;
        }
    
        const response = await dispatch(loginUser({ name, password }));
        // Проверка на успешный ответ
        if (response.payload && response.payload.error) {
          toast.error('Авторизация не удалась: ' + response.payload.error);
        } else {
          toast.success('Авторизация успешна');
          onClose();
        }
      } catch (err) {
        console.error(err);
        toast.error('Авторизация не удалась');
      }
    }; 
    return (
      <div>
        {isOpen && (
          <div className="Container__modal" >
            <div className="Modal">
              {type === "login" ? (
                <>
                  <h1>Авторизация</h1>
                  <input type="text" placeholder="Логин" value={name} onChange={(e) => setUsername(e.target.value)}/>
                  <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>  
                  <input type="button" value="Авторизоваться" onClick={handleSubmitLogin}/>
                  <p onClick={() => handleSwitchModal("registration")}>Нет аккаунта?</p>
                </>
              ) : (
                <>
                  <h1>Регистрация</h1>
                  <input type="text" placeholder="Логин" value={name} onChange={(e) => setUsername(e.target.value)}/>
                  <input type="password" placeholder="Пароль"  value={password} onChange={(e) => setPassword(e.target.value)}/>  
                  <input type="button" value="Зарегистрироваться"  onClick={handleSubmit}/>
                  <p onClick={() => handleSwitchModal("login")}>Уже есть аккаунт?</p>
                </>
              )}
              <img className="modal_cross" src="cross.svg" onClick={handleCrossClick} />
            </div>
          </div>
        )}
      </div>
    );
  };

export default ModalAuth;



