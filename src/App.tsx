import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERRY = gql`
query {
  lessons {
    id
    title
  }
}`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data} = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERRY)

  console.log(data)

    return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
