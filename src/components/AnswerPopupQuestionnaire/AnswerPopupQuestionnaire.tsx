import './answer_popup_questionnaire.scss'

export default function AnswerPopupQuestionnaire({ isPayment }: { isPayment: boolean }) {
  return (
    <div className='answer_popup--window'>
      <div className="answer_popup--container">
        {isPayment === true ? (
          <>
            <p className='answer_popup--text'>Спасибо за запись. Для разработки
              индивидуального плана занятий только для вашего ребенка
              просим оплатить тестирование</p>
            <a href="/pay">Оплатить</a>
          </>
        ) : (
          <>
            <p className='answer_popup--text'>Спасибо большое! Мы
              предложим вам даты тестирования и
              консультации</p>
            <a href="/calendar">Записаться на тестирование и консультацию</a>
          </>
        )}
      </div>
    </div>
  )
}
