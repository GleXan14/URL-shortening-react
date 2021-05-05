import React from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Link = (props) => {


    const btnRef = React.createRef();
    const linkData = props.data

    const changeCopyButton = () => {
        let time = 0;
        btnRef.current.innerHTML = 'Copied!';
        btnRef.current.style.backgroundColor = 'hsl(257, 27%, 26%)';
        btnRef.current.disabled = true;

        const interval = setInterval(() =>{

            time++
            if(time === 3){
                btnRef.current.innerHTML = 'Copy';
                btnRef.current.style.backgroundColor = 'var(--prim-cyan)';
                btnRef.current.disabled = false;
                clearInterval(interval);
            }
            
        },1000)
    }

    return (
        <div  className="links-container">
            <div className="links">
                <div className="link original">
                    <p>{linkData.original_link ? linkData.original_link : "link original..."}</p>
                </div>
                <div className="link short">
                    <p>{linkData.short_link ? linkData.short_link : "link short..."}</p>
                </div>
            </div>
            <div className="button">
                <CopyToClipboard text={linkData.short_link}>
                    <button ref={btnRef} type="button" onClick={changeCopyButton}>Copy</button>
                </CopyToClipboard>
            </div>

        </div>
    )
}

export default Link
