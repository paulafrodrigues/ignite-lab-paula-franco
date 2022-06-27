import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

 const [createSubscriber, {loading}] = useCreateSubscriberMutation()
 
  function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    createSubscriber({
      variables: {
        name,
        email
      }
    })
    navigate('/event')
  }

  return (
    <div className="subscribeBackground">
      <div className="subscribeElements">
        <div className="subscribeText">
          <Logo />

          <h1 className="subscribeTextTitle">
            Construa uma<strong className="subscribeHighlight"> aplicação completa</strong>, do zero, com <strong className="subscribeHighlight">React</strong>
          </h1>
          <p className="subscribeTextDescription">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="subscribeForm">
          <strong className="subscribeFormText">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="subscribeFormBox">
            <input
              className="formText"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="formText"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
            type="submit"
            disabled={loading}
            className="subscribeFormButton"
            >
              Garantir Minha Vaga
            </button>
          </form>

        </div>

      </div>
      <img src="/image/code-mockup.png" className="subscribeMockup" alt="" />
    </div>
  );
}