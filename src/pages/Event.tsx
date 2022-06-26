import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="eventHeader">
      <Header />
      <main className="main">
       { 
       slug 
       ? <Video lessonSlug={slug} /> 
       : <div className="video"/>}
        <Sidebar />
      </main>
    </div>
    //<h1>hello world</h1>
  )
}