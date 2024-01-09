import React from 'react'

import {Link} from 'react-router-dom';
const Navbar = (props) => {
   
  let mode=props.mode;

    return(
        <div class="sticky-top" >
            <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode} `}   >
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">NewsGenerator</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" > 
                            <Link class="nav-link"  to="/">Home</Link> 
                             </li>

                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/business">Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/entertainment">Entertainment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/general">General</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/health">Health</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/science">Science</a>
                            </li>
                            <li class="nav-item light">
                                <a class="nav-link " aria-current="page" href="/sports">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/technology">Technology</a>
                            </li>

                        </ul>

                      
                    </div>




                </div>
                

            </nav>
        </div>
    )

}

export default Navbar
