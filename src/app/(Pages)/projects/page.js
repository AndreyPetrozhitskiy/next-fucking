'use client'
import '@/app/Styles/Projects.scss'
import React, { useState } from 'react';

const JoinProject = () => {
  const [cardsState, setCardsState] = useState([]);

  // Функция для изменения состояния раскрытия/скрытия для конкретной карточки
  const handleCardToggle = (index) => {
    setCardsState((prevState) => {
      const newCardsState = [...prevState];
      newCardsState[index] = !newCardsState[index];
      return newCardsState;
    });
  };

  const cards = [
    //  массив данных для карточек
    { title: 'Название проекта 1', description: 'Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 '
       ,participants:[
          "User","User","User","User","User","User","User",
       ] 
    },
    { title: 'Название проекта 2', description: 'Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2 Описание 2'
    ,participants:[
      "User","User","User","User","User","User","User",
   ] 
    },{ title: 'Название проекта 1', description: 'Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 '
    ,participants:[
       "User","User","User","User","User","User","User",
    ] 
    },
  ];
return (
  <div className="Join__Project">
    <h1>ПРОЕКТЫ</h1>
    <div className="Join__Project__search-block">
      <input type="text" placeholder="Найти проект"/>
      <img src="Lupa.png" />
    </div>
    {/* Тут функция MAP  */}
    {cards.map((card, index) => (
      <div
        key={index}
        className={`Join__Project__item${cardsState[index] ? '__extended' : ''}`}
      >
        <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__number    `}>
          <p>{index + 1}</p>
        </div>
        <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__h1`}>
          <h1>{card.title}</h1>
          {/* Скрытое описание */}
          <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__h1__description`} 
          onClick={() => handleCardToggle(index)}>
            <p>Описание</p>
            <img src="bottom__cross.png" />
          </div>
          {/* Раскрытое описание */}
          <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__full-description`}>
          <p>{card.description}</p> 
          </div>
        </div>
        <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__button`}>
          <div className={`
          Join__Project__item${cardsState[index] ? '__extended' : ''}__button__participants`}>
              <h1>Участники</h1>
          {card.participants.map((user, index) => (
              <p>{`${index+1}.  ${user}`}</p>
          ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)
};

export default JoinProject;