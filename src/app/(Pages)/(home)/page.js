import '@/app/Styles/Main.scss';
import Link from 'next/link';
import MainSlider from '@/app/Components/MainSlider';

export default function Home() {
  return (
    <main className="Main">
      <MainSlider />
      <div className="Main__create-block">
        <h1>Создайте свой первый проект!</h1>
      
          <div className="Main__create-block__photo">
            <div className="Main__create-block__photo-background">
              <img src="main-one.png" />
            </div>

            <div className="Main__create-block__button">
            <Link href="/newproject"> <input type="button" value="Создать проект" /></Link> 
            </div>

          </div>
        </div>
      <div className="Main__join-block">
        <h1>Присоединиться к проекту</h1>
        <div className="Main__join-block__photo">
        <div className="Main__join-block__photo-background">
              <img src="main-two.png" />
            </div>
            <div className="Main__join-block__button">
              <Link href="/join"> <input type="button" value="Присоединиться" /></Link> 
            </div>
        </div>
      </div>
    </main>
  )
}
