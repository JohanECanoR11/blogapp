import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleClick = async e => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state ? await axios.put(`/posts/${state.id}`, {
        title,
        desc:value,
        cat,
        img:file ? imgUrl : ""
      }) 
      : await axios.post(`/posts/`, {
        title,
        desc:value,
        cat,
        img:file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Título' onChange={e => setTitle(e.target.value)}/>
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
          <input style={{display:"none"}} type="file" id="file" name="" onChange={e => setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Subir imagen</label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoría</h1>
          <div className="cat">
            <input type="radio" checked={cat === "art"} name="cat" value="art" id='art' onChange={e => setCat(e.target.value)}/>
            <label htmlFor="art">Arte</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "science"} name="cat" value="science" id='science' onChange={e => setCat(e.target.value)}/>
            <label htmlFor="science">Ciencia</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "technology"} name="cat" value="technology" id='technology' onChange={e => setCat(e.target.value)}/>
            <label htmlFor="technology">Tecnología</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id='cinema' onChange={e => setCat(e.target.value)}/>
            <label htmlFor="cinema">Cine</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "design"} name="cat" value="design" id='design' onChange={e => setCat(e.target.value)}/>
            <label htmlFor="design">Diseño</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "food"} name="cat" value="food" id='food' onChange={e => setCat(e.target.value)}/>
            <label htmlFor="food">Comida</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
