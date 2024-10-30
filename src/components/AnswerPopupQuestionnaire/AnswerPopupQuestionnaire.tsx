import { useEffect, useState } from 'react'
import './answer_popup_questionnaire.scss'
import { useNavigate } from 'react-router-dom'
// import { pay } from '../../api/payApi'

export default function AnswerPopupQuestionnaire({ isPayment, userID }: { isPayment: boolean, userID: string | null}) {
  const [urlForPay, setUrlForPay] = useState('')

  const navigate = useNavigate()
  // async function handleSendPay() {
  //   const { url, id, payment_id } = await pay(userID)
  //   localStorage.setItem('id', id)
  //   localStorage.setItem('payment_id', payment_id)
  //   localStorage.setItem('paymethod', "yookassa")
  //   if (url) {
  //     setUrlForPay(url);

  //   } else {
  //     console.error('Error: pay API call returned undefined');
  //   }
  // }

  function handleSendPayStripe() {
    localStorage.setItem('paymethod', "stripe")
    navigate(`/pay-stripe?${userID}`)
  }


  useEffect(() => {
    setUrlForPay("")
    localStorage.setItem('paymethod', "dontknow")
    if (urlForPay) {
      // Optional: Validate the URL if needed
      try {
        window.open(urlForPay, '_self');
      } catch (error) {
        console.error('Invalid URL:', urlForPay);
      }
    }
  }, [urlForPay, navigate]);


  return (
    <div className='answer_popup--window'>
      <div className="answer_popup--container">
        <>
          {isPayment ? (
            <>
            
              <p className='answer_popup--text'>Спасибо за запись. Для разработки
                индивидуального плана занятий только для вашего ребенка
                просим оплатить тестирование в размере 25 евро</p>
              {/* <a href="/pay">Оплатить</a> */}
              {/* <button onClick={handleSendPay}>YooMooney</button> */}
              <button onClick={handleSendPayStripe}>Stripe</button>

              <p style={{ fontSize: '16px' }}>Если не удалось оплатить, просьба связаться по <a style={{ fontSize: '16px', color: 'var(--1)', textDecoration: 'underline' }} href="https://t.me/zhannaborodaeva"> https://t.me/zhannaborodaeva</a> для альтернативного способа оплаты</p> 
            </>
          ) : (
            <>
              <p className='answer_popup--text'>Спасибо большое! Мы
                предложим вам даты тестирования и
                консультации</p>
              {/* <a className="text" href="/calendar">Записаться на тестирование и консультацию</a> */
              }
              <button onClick={() => {
                navigate('/calendar')
                localStorage.setItem('record', 'true')
              }}>Записаться на тестирование и консультацию</button>
            </>
          )}
        </>

      </div>
    </div>
  )
}


