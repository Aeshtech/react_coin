import React from 'react'

export default function Footer() {
    return (
        <div class="bottom_fixed">
            <div class="d-flex align-items-center justify-content-between">
                <div className="float-start">
                    <img src="./img/logo.png" alt="" class="img-fluid d-none d-md-block" style={{width:"100px"}} />
                </div>
                    <div>
                        <span class="price"><a id="" href="/#"><img src="./img/logo_icon.png" class="img-responsive" alt=""/><span class="pa_top">$ <span>0.003</span></span></a></span>
                        <span class="bntbtn claim_btn "><a class="btn btn_success" id="" href="/#">Buy Oryen</a></span>
                    </div>
            </div>
        </div>
    )
}
