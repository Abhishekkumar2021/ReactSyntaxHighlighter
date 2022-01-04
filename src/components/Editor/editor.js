import React from 'react'
import './editor.css'

export default function Editor({placeholder,onChange,onKeyDown}) {
    return (
        <textarea className="editor" placeholder={placeholder} onChange = {onChange}>
        </textarea>
    )
}
