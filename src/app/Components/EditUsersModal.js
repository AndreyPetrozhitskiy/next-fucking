'use client'
import React, { useEffect, useState } from "react";
import "@/app/Styles/Editusers.scss";

export default function EditUsersModal({ isOpen, onClose }) {
  // Зарегестрированные пользователи
  const data = [
    {name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},{name:"Солнышкин",},
  ]
  const [isBodyScrollLocked, setIsBodyScrollLocked] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".Editusermodal")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const disableScroll = () => {
      document.body.classList.add("modal-open");
      setIsBodyScrollLocked(true);
      window.scrollTo(0, 0); // Прокручиваем страницу наверх
    };

    const enableScroll = () => {
      document.body.classList.remove("modal-open");
      setIsBodyScrollLocked(false);
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

  const handleCrossClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="Container__modal">
          <div className="Editusermodal">
            <h1>Пользователи</h1>
            <ul>
              {data.map((item,index)=>(
                <li key={index}>
                    <p>{`${index + 1}.`}</p>
                    <p>{item.name}  {index + 1}</p>
                    <input type="button" value={"Добавить"} />
                </li>
              ))}
            </ul>

            <img className="modal_cross" src='/cross.svg' onClick={handleCrossClick} />
          </div>
        </div>
      )}
    </>
  );
};
