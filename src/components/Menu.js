import React from 'react'
import "./Menu.css"
import { ImSearch } from 'react-icons/im';
import { HiOutlineBell } from 'react-icons/hi';

const Menu = () => {
    return (
        <div className='menu'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img className='rasm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                    </div>
                    <div className="col-7">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav fs-4">
                                        <a class="nav-link" href="#">New</a>
                                        <a class="nav-link" href="#">Movies</a>
                                        <a class="nav-link" href="#">Series</a>
                                        <a class="nav-link" href="#">Cartoons</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-2">
                        <div className="ikon">
                            <h3> <ImSearch /> </h3>
                            <h3> <HiOutlineBell /> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu