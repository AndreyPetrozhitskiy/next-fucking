'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '@/app/Styles/ModalPassword.scss';
import { useDispatch, useSelector } from 'react-redux';
const ModalPassword = ({ isOpen, onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const userId = useSelector((state) => state.auth.ID);
  const handleButtonClick = async () => {
    try {
      const response = await axios.put('http://74.119.192.138:5000/api/users/updatepassword', {
        id: userId,
        password: newPassword,
        oldpassword: oldPassword,
      });

      // Обработка успешного обновления пароля
      toast.success('Пароль успешно обновлен');
      onClose();
    } catch (error) {
      // Обработка ошибок и вывод сообщений через toast
      if (error.response) {
        const errorMessage = error.response.data.error || 'Произошла ошибка';
        toast.error(errorMessage);
      } else {
        toast.error('Произошла ошибка');
      }
    }
  };

  const handleCrossClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="Container__modal">
          <div className="ModalPassword">
            <input
              type="password"
              placeholder="Старый пароль"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input type="button" value="Обновить" onClick={handleButtonClick} />

            <img
              className="modal_cross"
              src="/cross.svg"
              alt="Закрыть"
              onClick={handleCrossClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPassword;