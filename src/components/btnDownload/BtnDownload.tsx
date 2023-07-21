import React from "react";
import './BtnDownload.css'

interface BtnDownloadProps  {
    link: string
}

function BtnDownload({link}: BtnDownloadProps) {
    return (
        <div>
            <a href={link} className="btn" target='_blank'>My GitHub</a>
        </div>
    )
}

export default BtnDownload