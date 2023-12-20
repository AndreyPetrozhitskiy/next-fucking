import '@/app/Styles/NewProject.scss'

export default function NewProject() {
  return (
    <main className="NewProject">
      <h1>Создание проекта</h1>
      <div className="NewProject__content">
        <div className="NewProject__content__forms">
            <input type="text" placeholder="Введите название проекта"/>
            <textarea placeholder="Введите описание проекта" ></textarea>
            <input type="text" placeholder="Ссылка на Figma project"/>
            <input type="text" placeholder="Ссылка на GitHub project"/>
        </div>
        <div className="NewProject__content__img">
            <div className="NewProject__content__img__photo">
                <img src="photoloader.png" />
            </div>
        </div>
      </div>
      <input type="button" value="Создать проект" />
    </main>
  )
}
