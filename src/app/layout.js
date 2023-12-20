'use client'
import React, { useState } from "react";
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import { Providers } from './Redux/providers';
import ButtonUp from "@/app/Components/ButtonUp";
import ModalAuth from "@/app/Components/ModalAuth";
import ModalPassword from "@/app/Components/ModalPassword";
import EditUsersModal from "@/app/Components/EditUsersModal";
import { ToastContainer } from 'react-toastify';
import '@/app/Styles/App.scss';
import '@/app/Styles/index.scss';

export default function RootLayout({ children }) {
  const [isModalOpenAuth, setIsModalOpenAuth] = useState(false);
  const [modalTypeAuth, setModalTypeAuth] = useState("registration");

  const openModalAuth = (type) => {
    setIsModalOpenAuth(true);
    setModalTypeAuth(type);
  };

  const closeModalAuth = () => {
    setIsModalOpenAuth(false);
  };

  const [isModalOpenPassword, setIsModalOpenPassword] = useState(false);

  const openModalPassword = () => {
    setIsModalOpenPassword(true);
  };

  const closeModalPassword = () => {
    setIsModalOpenPassword(false);
  };

  const [isModalOpenUsers, setIsModalOpenUsers] = useState(false);

  const openModalUsers = () => {
    setIsModalOpenUsers(true);
  };

  const closeModalUsers = () => {
    setIsModalOpenUsers(false);
  };

  return (
    <html lang="en">
      <head>
        <title>20&MIN</title>
      </head>
      <body className="App">
        <div className="container">
          <Providers>
            <ModalAuth isOpen={isModalOpenAuth} onClose={closeModalAuth} type={modalTypeAuth} setModalType={setModalTypeAuth} />
            <ModalPassword isOpen={isModalOpenPassword} onClose={closeModalPassword} />
            <EditUsersModal isOpen={isModalOpenUsers} onClose={closeModalUsers} />
            <Header openModal={openModalAuth} />
            <ToastContainer position='top-right'/>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  openModalPassword: openModalPassword,
                  openModalUsers: openModalUsers,
                });
              }
              return child;
            })}
            <Footer />
            <ButtonUp />
          </Providers>
        </div>
      </body>
    </html>
  );
}


