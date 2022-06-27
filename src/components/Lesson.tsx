import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const {slug} = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="lessonData">
        {availableDateFormatted}
      </span>

      <div 
        className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {'bg-green-500': isActiveLesson

        })}>
        <header className="lessonHeader">
        {isLessonAvailable ? (
                    <span className="lessonStatusOn">
                    <CheckCircle size={20}/>
                    Conteudo liberado
                    </span>
        ) : (
          <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson
          })}>
          <Lock size={20}/>
          Em breve
          </span>
        )}
          <span className="lessonTime">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRATICA'}
            </span>
        </header>
        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {props.title}
          </strong>
      </div>
    </Link>
  )
}