import React from 'react'

 const CommentDetail = (props) => {
    return (
        <div>
            <a href='!#' className="avatar" target='_blank'>
                <img src={props.avatar} alt='avatar' />
            </a>
            <div className="content">
                <a href="!#" claaName="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
            </div>
        </div>
    )
}
export default CommentDetail