import React from 'react'

const HomeNew = ({data}) => {
    return (
        <div>
            {data.name}
            <br/>
            {data.description}
        </div>
    )
}

export default HomeNew
