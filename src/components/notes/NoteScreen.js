import React from 'react'

import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happend today"
                    className="notes__text-area"
                ></textarea>
            </div>

            <div className="notes__image">
                <img 
                    src="https://www.cambio16.com/wp-content/uploads/2017/04/fotos-impresionantes-imagenes-que-parecen-modificadas-con-photoshop-11.jpeg"
                    alt="Imagen"
                />
            </div>
        </div>
    )
}
