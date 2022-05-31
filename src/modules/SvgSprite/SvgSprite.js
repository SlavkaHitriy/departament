import React from 'react'

// Sprite
import sprite from './sprite.svg'

const SvgSprite = ({className, id}) => {
    return (
        <svg className={className}>
            <use href={`${sprite}#${id}`} />
        </svg>
    )
}

export default SvgSprite
