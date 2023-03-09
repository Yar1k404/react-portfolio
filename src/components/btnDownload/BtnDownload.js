import './BtnDownload.css'

function BtnDownload({link}) {
    return (
        <div>
            <a href={link} className="btn" target='_blank'>My GitHub</a>
        </div>
    )
}

export default BtnDownload