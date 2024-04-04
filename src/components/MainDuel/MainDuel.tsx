import React from "react"
import "./MainDuel.css"

export const MainDuel = () => {
  return (
    <div className="main-duel">
      <div className="main-duel__body">
        <span className="main-duel__bold">fayzenov</span> сейчас необходимо присоединиться в лобби к
        <span className="main-duel__bold"> SHIPLOV</span>. Для этого нажмите на синюю кнопку
        <span className="main-duel__blue"> «Перейти»</span>. Вас автоматически перебросит в игру. После этого
        нажмите на
        <span className="main-duel__green"> «Готово»</span>. Перед тем, как нажать на
        <span className="main-duel__green"> «Готово»</span>, вы обязательно должны быть в лобби! Кнопка
        <span className="main-duel__red"> «Отмена»</span> завершает дуэль. Её можно использовать не более 3х
        раз в течение 24 часов. Иначе ваш аккаунт на нашем сервисе будет заблокирован на сутки!
      </div>
      <div className="main-duel__footer">
        <div className="main-duel__lobby"></div>
        <div className="main-duel__btns">
          <button className="button">Готово</button>
        </div>
      </div>
    </div>
  )
}
