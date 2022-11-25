import React from 'react'

export default function Menu() {
    return (

        <div class="menu">
            <div class="navbar-collapse clearfix collapse in show" id="myNavbar" aria-expanded="true">
                <a class="navbar-brand logo" href="/#"><img src="img/logo.png" alt="" /></a>
                <ul class="nav navbar-nav ">
                    <li class="btn_here active"><a href="./"><i class="fa-solid fa-house"></i> <span>Dashboard</span></a></li>

                    <li class="btn_here dropdown">
                    </li><li class="btn_here"><a href="/#" type="button" id="menu1" data-bs-toggle="dropdown"><i class="fa-solid fa-left-right"></i> <span>Exchange</span><span class="caret"></span></a>
                        <ul class="dropdown-menu no_absolut" role="menu" aria-labelledby="menu1">
                            <li role="presentation"><a role="menuitem" href="/#"><span>- Swap</span></a></li>
                            <li role="presentation"><a role="menuitem" href="/#"><span>- Liquidity</span></a></li>
                        </ul>
                    </li>
                    <li class="btn_here"><a href="/"><i class="fa-solid fa-calculator"></i> <span>calculator</span></a></li>
                    <li class="btn_here"><a href="/"><i class="fa-solid fa-file-invoice-dollar"></i> <span>Account</span></a></li>
                    <li class="btn_here text_highlight">About</li>
                    <li class="btn_here"><a href="/#"><i class="fa-regular fa-envelope"></i> <span>Contact</span></a></li>
                    <li class="btn_here"><a href="/#"><i class="fa-brands fa-discord"></i> <span>Community</span></a></li>
                    <li class="btn_here"><a href="/#"><img src="./img/logo_icon.png" class="img-responsive" alt="" /> <span><b>Oryen</b> Token</span></a></li>
                    <li class="btn_here text_highlight">HELP</li>
                    <li class="btn_here"><a href="/#"><i class="fa-solid fa-file"></i> <span>Documentation</span></a></li>
                    <li class="btn_here"><a href="/#"><i class="fa-solid fa-file-export"></i> <span>FAQ</span></a></li>
                    <li class="btn_here">
                        <div class="social_here position-absolute">
                            <div class="social_border">
                                <h5>Social Connection</h5>
                                <div class="social_icons">
                                    <a href="/#"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="/#"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="/#"><i class="fa-brands fa-telegram"></i></a>
                                    <a href="/#"><i class="fa-brands fa-discord"></i></a>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}
