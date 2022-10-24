import React, {useRef} from "react"

function Content() {
    const ref = useRef(null)
    const onMouseEnter = () => {
        console.log(ref, 'ref sss')
        ref.muted = true;
        ref.currentTime = 1;
        ref.playbackRate = 0.5;
        ref.current.play();
    }
    return (
        <div className="body-content">
            <div className="projects" id="projects">
                <div className="project">
                    <div className="title-video">
                        <div className="title">Project name</div>
                        <video ref={ref} onMouseEnter={onMouseEnter} className="video" muted="muted">
                            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
