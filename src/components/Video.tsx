import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    }
  })

  if (!data || !data.lesson ) {
    return (
      <div className="video">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
<div className="video">
  <div className="videoBorder">
    <div className="videoDisplay">
      <Player>
        <Youtube videoId={data.lesson.videoId}/>
        <DefaultUi />
      </Player>
    </div>
  </div>

  <div className="videoDescription">
    <div className="videoDescritptionContent">
      <div className="videoDescriptionText">
        <h1 className="descriptionTitle">
        {data.lesson.title}
          </h1>
        <p className="descriptionText">
        {data.lesson.description}
          </p>
          {data.lesson.teacher && (
            <div className="descriptionTeacher">
            <img 
            className="imgTeacher"
            src={data.lesson.teacher.avatarURL}
            alt="" 
            />
            <div className="contentTeacher">
              <strong className="nameTeacher">{data.lesson.teacher.name}</strong>
              <span className="bioTeacher">{data.lesson.teacher.bio}</span>
            </div>
          </div>
          )}
      </div>
      <div className="videoLinks">
        <a href="" className="firstLink">
          <DiscordLogo size={24} />
          Comunidade do Discord
        </a>
        <a href="" className="secondLink">
          <Lightning size={24} />
          Acesse o desafio
        </a>
      </div>
    </div>
    
    <div className="videoComplements">
      <a href="" className="firstLinkComplement">
        <div className="firstLinkIcon">
          <FileArrowDown size={40}/>
        </div>
        <div className="firstLinkText">
          <strong className="firstLinkTextTitle">Material Complementar</strong>
          <p className="fistLinkTextDescription">
            Acesse o material complementar para acelerar o seu desenvolvimento.
          </p>
        </div>
        <div className="firstLinkArrow">
          <CaretRight size={24}/>
        </div>
      </a>
      <a href="" className="firstLinkComplement">
        <div className="firstLinkIcon"></div>
        <div className="firstLinkText">
          <strong className="firstLinkTextTitle">Wallpapers exclusivos</strong>
          <p className="fistLinkTextDescription">
          Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
          </p>
        </div>
        <div className="firstLinkArrow">
          <CaretRight size={24}/>
        </div>
      </a>
    </div>

  </div>
</div>  )
}