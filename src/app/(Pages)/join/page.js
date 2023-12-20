'use client'
import '@/app/Styles/JoinProject.scss'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const JoinProject = () => {
  const [loading, setLoading] = useState(true); // 1. Состояние загрузки
  const [cardsState, setCardsState] = useState([]);
  const [cards, setCards] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [participationSuccess, setParticipationSuccess] = useState([]); // массив для отслеживания статуса каждого проекта
  const userId = useSelector((state) => state.auth.ID);
  console.log(userId)
  useEffect(() => {
    setLoading(true); // Включаем индикатор загрузки перед запросом
    axios.get('http://74.119.192.138:5000/api/projects/')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      })
      .finally(() => {
        setLoading(false); // Выключаем индикатор загрузки после запроса
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get('http://74.119.192.138:5000/api/role/all-roles')
      .then(response => {
        setParticipants(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных об участниках:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleParticipate = (projectId, index) => {
    const requestData = {
      projectID: projectId,
      userID: userId,
      role: "Участник",
    };

    axios.post('http://74.119.192.138:5000/api/role/create', requestData)
      .then(response => {
        console.log('Роль успешно создана:', response.data);
        setParticipationSuccess((prev) => {
          const updatedSuccessArray = [...prev];
          updatedSuccessArray[index] = true;
          return updatedSuccessArray;
        });
        // Обновляем данные об участниках после успешного участия
        axios.get('http://74.119.192.138:5000/api/role/all-roles')
          .then(response => {
            setParticipants(response.data);
          })
          .catch(error => {
            console.error('Ошибка при загрузке данных об участниках:', error);
          });
        // Обработка дополнительных действий при необходимости
      })
      .catch(error => {
        console.error('Ошибка при создании роли:', error);
        // Обработка ошибок или отображение уведомления пользователю
      });
  };
  const handleCardToggle = (index) => {
    setCardsState((prevState) => {
      const newCardsState = [...prevState];
      newCardsState[index] = !newCardsState[index];
      return newCardsState;
    });
  };
 

  
return (
  <div className="Join__Project">
      <h1>ПРИСОЕДИНИТЬСЯ К ПРОЕКТУ</h1>
      <div className="Join__Project__search-block">
        <input
          type="text"
          placeholder="Найти проект"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img src="Lupa.png" alt="search" />
      </div>
      {loading && <div className='Loading'><img src={"https://gifgive.com/wp-content/uploads/2021/09/zagruzka.gif"} /></div>} {/* 2. Индикатор загрузки */}
      {cards
        .filter((card) =>
          card.NameProject.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((card, index) => (
          <div
        key={index}
        className={`Join__Project__item${cardsState[index] ? '__extended' : ''}`}
      >
        <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__number    `}>
          <p>{index + 1}</p>
        </div>
        <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__h1`}>
          <h1>{card.NameProject}</h1>
          {/* Скрытое описание */}
          <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__h1__description`} 
          onClick={() => handleCardToggle(index)}>
            <p>Описание</p>
            <img src="bottom__cross.png" />
          </div>
          {/* Раскрытое описание */}
          <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__full-description`}>
          <p>{card.DescriptionProject}</p> 
          </div>
        </div>
        <div className={`Join__Project__item${cardsState[index] ? '__extended' : ''}__button`}>
          <div className={`
          Join__Project__item${cardsState[index] ? '__extended' : ''}__button__participants`}>
              <h1>Участники</h1>
              <div className={`
                Join__Project__item${cardsState[index] ? '__extended' : ''}__button__participants__users`}>
              {participants
                .filter(participant => participant.ProjectName === card.NameProject)
                .map((user, userIndex) => (
                  <p key={userIndex}>{`${userIndex + 1}. ${user.UserName} - ${user.Role}`}</p>
                ))}
                </div>
          </div>
          <input
                type="button"
                value={participationSuccess[index] ? "Успешно" : "Участвовать"}
                onClick={() => handleParticipate(card.ProjectID, index)}
                disabled={participationSuccess[index]}
                style={{ backgroundColor: participationSuccess[index] ? "grey" : "" }}
              />
        </div>
      </div>
        ))}
    </div>
  );
};

export default JoinProject;
