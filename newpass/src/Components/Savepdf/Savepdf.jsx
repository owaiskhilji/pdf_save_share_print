import React from 'react'
import {saveAs} from "file-saver"

function Savepdf() {
  const getPDF = "https://cdn-icons-png.flaticon.com/512/2165/2165004.png"
  const downloadPDF = () =>{
    saveAs(getPDF)
  }

  return (
<button onClick={downloadPDF}>Download</button>
  )
}

export default Savepdf