import React from "react";
import { ReactComponent as Download } from "./download.svg";

const DownloadButton = props => {
    const downloadFile = () => {
      window.location.href = "https://drive.google.com/file/d/1CkZ0pUmkEFJNnn64UtruHWDDoYo9X80V/view?usp=sharing"
    }
    return (
              <Download
                className="download-img"
                onClick={downloadFile}
              />
    )
  }
  export default DownloadButton;