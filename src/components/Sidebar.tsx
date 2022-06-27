import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function Sidebar() {
  const { data } = useGetLessonsQuery()
  return (
    <aside className="sidebar">
      <span className="sidebarTitle">
        Cronograma de aulas
      </span>
      <div className="sidebarLessons">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType} />
          )
        })}

      </div>
    </aside>
  )
}