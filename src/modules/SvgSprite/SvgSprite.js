import React from 'react'

// Sprite
import sprite from './sprite.svg'

const SvgSprite = ({className, spriteID}) => {
    return (
        <svg className={className}>
            <use href={`${sprite}#${spriteID}`} />
        </svg>
    )
}

export default SvgSprite
