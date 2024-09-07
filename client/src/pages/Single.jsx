import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          {/* <img src="" alt="" /> */}
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png"  alt="" class="superbox-img"/>
          <div className="info">
            <span>Johan</span>
            <p>Publicado hace 2 días</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>            
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis iste sit, possimus temporibus, soluta tempore, alias deleniti aut quo velit numquam labore nam blanditiis illo eligendi nemo! Ipsa, tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero necessitatibus vitae, magni culpa dignissimos veritatis vero ea iste quibusdam minus similique animi? Cumque ab deleniti in et, impedit nobis.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis iste sit, possimus temporibus, soluta tempore, alias deleniti aut quo velit numquam labore nam blanditiis illo eligendi nemo! Ipsa, tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero necessitatibus vitae, magni culpa dignissimos veritatis vero ea iste quibusdam minus similique animi? Cumque ab deleniti in et, impedit nobis.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis iste sit, possimus temporibus, soluta tempore, alias deleniti aut quo velit numquam labore nam blanditiis illo eligendi nemo! Ipsa, tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero necessitatibus vitae, magni culpa dignissimos veritatis vero ea iste quibusdam minus similique animi? Cumque ab deleniti in et, impedit nobis.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis iste sit, possimus temporibus, soluta tempore, alias deleniti aut quo velit numquam labore nam blanditiis illo eligendi nemo! Ipsa, tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero necessitatibus vitae, magni culpa dignissimos veritatis vero ea iste quibusdam minus similique animi? Cumque ab deleniti in et, impedit nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis iste sit, possimus temporibus, soluta tempore, alias deleniti aut quo velit numquam labore nam blanditiis illo eligendi nemo! Ipsa, tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero necessitatibus vitae, magni culpa dignissimos veritatis vero ea iste quibusdam minus similique animi? Cumque ab deleniti in et, impedit nobis.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single
