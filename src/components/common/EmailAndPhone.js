import React from 'react'

export default function EmailAndPhone({ type, format = "text" }) {
    return (
        <>
            {type === 'mail' && <a className='email-phone' href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a>}
            {type === 'phone' && <a className='email-phone' href={`tel:${process.env.REACT_APP_CONTACT_NO}`}>{process.env.REACT_APP_CONTACT_NO}</a>}
        </>
    )
}
