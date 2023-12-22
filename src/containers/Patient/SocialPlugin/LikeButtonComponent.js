import React from 'react'

const LikeButtonComponent = (props) => {
    const { dataHref } = props

    return (

        <div style={{ margin: '8px 0' }}>
            <div className="fb-like"
                data-href={dataHref}
                data-width="" data-layout="" data-action=""
                data-size="" data-share="true">
            </div>
        </div>

    )

}

export default LikeButtonComponent