//how to make a button component without styled components
import React from 'react'

function ButtonLink(props) {
    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonLink