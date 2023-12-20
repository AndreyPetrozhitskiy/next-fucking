import '@/app/Styles/ProjectItem.scss'


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
const ProjectItem = () => {
  return (
    <div className="ProjectItem">
      <h1>Супер проект</h1>
      <div className="ProjectItem__Content">

        <div className="ProjectItem__Content__description">
              {/* Статус проекта */}
            <p>В разработке</p>
            {/* Создатель проекта */}
            <p>User</p> 
            <p>Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта</p>
            {/* Ссылка на фигму */}
            <a href="https://www.figma.com/file/WQbQOW6i2qPZ8PUi6y8frt/20-minutes?node-id=228%3A52&mode=dev">Figma</a>
            {/* Ссылка на гит */}
            <a href="https://github.com/AndreyPetrozhitskiy/20min-frontend">GitHub</a>
        </div>

        <div className="ProjectItem__Content__users">
          {/* Вместо ProjectItem__Content__users__image должен быть просто img без класса с фотографией проекта,класс для фото уже написан  */}
          <div className="ProjectItem__Content__users__image"></div>
          <div className="ProjectItem__Content__users__participants">
            <h1>Участники</h1>
            {data.map((item,index)=>(
              <div key={index} className="ProjectItem__Content__users__participants__item">
                <p>{`${index+1}.`}</p>
                <p>{item.name}</p>
                <p>{item.role}</p>
              </div>
            ))}

          </div>
        </div>


      </div>
    </div>
  )
};

export default ProjectItem;