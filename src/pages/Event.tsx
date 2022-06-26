import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <div className="eventHeader">
      <Header />
      <main className="main">
        <Video />
        <Sidebar />
      </main>
    </div>
    //<h1>hello world</h1>
  )
}