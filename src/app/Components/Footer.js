'use client'
import NextLink from "next/link";
import '@/app/Styles/Footer.scss';

export default function Footer() {
    return (
      <footer className="Footer">
        <img className="Footer__logo" src='/Logo__footer.png' />
        <div className="Footer__link">
          <NextLink href="/about" className="Footer__link-a">
            О нас
          </NextLink> 
          <NextLink  href="/newproject" className="Footer__link-a">
            Создать проект
          </NextLink> 
          <NextLink  href="/join" className="Footer__link-a">
            Присоединиться
          </NextLink> 
          <NextLink  href="/faq" className="Footer__link-a">
            FAQ
          </NextLink>  
        </div>
        <div className="Footer__contacts">
          <h1>Контакты</h1>
          <div className="Footer__contacts-img">
          <NextLink  href="/"> <img src="Instagram.png" /> </NextLink>  
          <NextLink  href="/">  <img src="/Telegram.png" /></NextLink>  
          </div>
        </div>
      </footer>
    )
  }