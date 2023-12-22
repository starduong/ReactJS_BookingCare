import React from 'react'

const CommentUpdate = (props) => {
    const { dataHref } = props

    return (

        <div
            style={{
                margin: '8px 0',

            }}

        >
            <div className="fb-comments"
                data-href={dataHref}
                data-width=""
                data-numposts="5">
            </div>
        </div>

    )

}

export default CommentUpdate