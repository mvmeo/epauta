import React from 'react'
import File from './File'

const FileList = (props :any) => {
  
  return (
    <div>
      {Object.keys(props.Files || {}).slice(0,5).map((key) => {
        return (
          <File key={key} enlace={props.Files[key].enlace} nombre={props.Files[key].nombre + ": " + props.Files[key].ramo + " - " + props.Files[key].año + "-" + props.Files[key].semestre} className={props.className} />
        )
      })
      }
    </div>
  )
}

export default FileList
