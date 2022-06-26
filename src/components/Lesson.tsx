import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}


export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
    locale: ptBR
  })

  return (
    <a href="#">
      <span className="lessonData">
        {availableDateFormatted}
      </span>

      <div className="lessonHeaderBox">
        <header className="lessonHeader">
        {isLessonAvailable ? (
                    <span className="lessonStatusOn">
                    <CheckCircle size={20}/>
                    Conteudo liberado
                    </span>
        ) : (
          <span className="lessonStatusOff">
          <Lock size={20}/>
          Em breve
          </span>
        )}
          <span className="lessonTime">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRATICA'}
            </span>
        </header>
        <strong className="lessonTitle">
          {props.title}
          </strong>
      </div>
    </a>
  )
}