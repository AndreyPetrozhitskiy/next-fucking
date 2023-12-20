'use client'
import '@/app/Styles/EditProjectParticipant.scss'

const data = [
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
    {name:"Солнышкин",role:"Гений проекта"},
  ]
  const EditProjectParticipant = () => {
    return (
      <div className="EditProjectParticipant">
         <h1>Название проекта</h1>
  
         <div className="EditProjectParticipant__Content">
              <div className="EditProjectParticipant__Content__description" >
                  <p >Статус проекта</p>
                  <textarea placeholder="Изначальное описание проекта"  ></textarea>
                  <p  >Ссылка фигма</p>
                  <p >Ссылка гит</p>
                  <input type="button" value="Изменить" />
              </div>
  
              <div className="EditProjectParticipant__Content__users">
                  <div className="EditProjectParticipant__Content__users__image">
                      {/* 1 фото это фото проекта,2 фото это карандаш с макета */}
                      <img src="" />
                      <img src="pencil.png" />
                  </div>
                  <div className="EditProjectParticipant__Content__users__participants">
                      <h1>Участники</h1>
                      {data.map((item,index)=>(
                      <div key={index} className="EditProjectParticipant__Content__users__participants__item">
                          <p>{`${index+1}.`}</p>
                          <p>{item.name}</p>
                          <p>{item.role}</p>
                      </div>
                      ))}
  
                      
             
                  </div>
                  <input type="button" value={"Покинуть проект"} />
              </div>
          </div>
      </div>
    )
  };
  
  export default EditProjectParticipant;