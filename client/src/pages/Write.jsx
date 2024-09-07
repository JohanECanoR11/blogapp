import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Título' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Estado: </b> Borrador
          </span>
          <span>
            <b>Visibilidad: </b> Público
          </span>
          <input style={{display:"none"}} type="file" id="file" name="" />
          <label className='file' htmlFor="file">Subir imagen</label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button>Actualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoría</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id='art' />
            <label htmlFor="art">Arte</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id='science' />
            <label htmlFor="science">Ciencia</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id='technology' />
            <label htmlFor="technology">Tecnología</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id='cinema' />
            <label htmlFor="cinema">Cine</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id='design' />
            <label htmlFor="design">Diseño</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id='food' />
            <label htmlFor="food">Comida</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
