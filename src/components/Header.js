import React from 'react'

export default function Header({props}) {
  const {collapsed, setCollapsed} = props

  function toggleNav() {
    setCollapsed(!collapsed);
  }

  return (
    <div class="header_area clearfix" id="back-top-here">
      <nav class="navbar navbar-default clearfix p-md-0">
        <div class="container-fluid">
          <div class="navbar-header clearfix">
            <a class="navbar-brand logo" href="/#" ><img src="img/logo.png" class="mx-5" alt="" /></a>
            <button type="button" class={"navbar-toggle navbar-toggle-my " + (collapsed ? " collapsed" : null)} data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-expanded="false" onClick={toggleNav}>
              <div class="main_menu_icons">
                <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ dhaIlc"><path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"></path></svg>
              </div>
              <div class="click_icon">
                <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ dhaIlc"><path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path></svg>
              </div>
            </button>
          </div>
          <div class="links_search pull-right">
            <ul class="right_cutom_btns nav navbar-nav float-end flex-row align-items-center">
              <li class=""><a id="" href='/#' className='text-decoration-none'><img src="./img/logo_icon.png" class="img-responsive" alt="" /><span class="text-light" style={{fontFamily:"NexaBold"}}>$ <span>0.003</span></span></a></li>
              <li class=""><a class="btn btn-success px-5" id="wallet-connect" href='/#'>Connect Wallet </a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
