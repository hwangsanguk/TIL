import React from 'react'

export const CommentDetail = (props) => {
    return (
        <div>
            <a href='#' className="avatar" target='_balnck'>
                <img src={props.avater} alt='avatar' />
            </a>
            <div className="content">
                <a href="!#" claaName="author">
                    {props.author}
                </a>
                <div className="metadata">
                    {props.time}
                </div>>
            </div>
        </div>
    )
}
