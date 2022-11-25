import React from 'react'

export default function Main() {
    return (
        <>
            <div class="back_handle">
                <div class="bg_image_main"></div>
                <section class="main_home">
                    <div class="top_home">
                        <h2 class="text-left">Dashboard</h2> </div>


                    <div class="clearfix row mainndex_boxes">

                        <div class="col-sm-12">
                            <div class="carts_custom s_h t_tabs  text-left">
                                <div class="single_cart clearfix">
                                    <div class="row clearfix">
                                        <div class="col-sm-3 cols_tops">
                                            <div class="card_content">
                                                <h4>Marketcap</h4>

                                                <h2> <span class="fr_color" id="">$0.00</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 cols_tops">
                                            <div class="card_content">
                                                <h4>Circulating Supply</h4>

                                                <h2> <span class="fr_color" id="">$0.00</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 cols_tops">
                                            <div class="card_content">
                                                <h4>Holders</h4>

                                                <h2> <span class="fr_color" id="">524,315.1</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 cols_tops">
                                            <div class="card_content">
                                                <h4>Oryen Price</h4>

                                                <h2> <span class="fr_color" id="">$0.00</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row clearfix center_tabs">
                                    <div class="col-sm-6 cols_tops">
                                        <div class="single_cart clearfix" style={{height: "119px"}}>
                                            <div class="bg_highlight"><img src="img/single_glow.png" class="img-responsive" alt="" /></div>
                                            <div class="card_content">
                                                <h4>Liquidity</h4>
                                                <h2>
                                                    <span class="fr_color" id="">($0.00)</span></h2>
                                                <div class="persentage_value" style={{color:"#ff5e62"}}>-0.33%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 cols_tops">
                                        <div class="single_cart clearfix" style={{height: "119px"}}>
                                            <div class="bg_highlight"><img src="img/single_glow.png" class="img-responsive" alt="" /></div>
                                            <div class="card_content">
                                                <h4>Treasury</h4>
                                                <h2>
                                                    <span class="fr_color" id="bnbpaid">0.00</span></h2>
                                                <div class="persentage_value" style={{color:"#ff5e62"}}>-0.33%</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 cols_tops">
                                        <div class="single_cart clearfix">
                                            <div class="bg_highlight"><img src="img/Fixed_APY_glow.png" class="img-responsive" alt="" /></div>

                                            <div class="card_content">
                                                <h4 class="h4_high"><i class="fa-solid fa-circle-check"></i> Fixed APY</h4>

                                                <h2> <span class="fr_color" id="">0.00%</span>
                                                </h2>
                                                <h5>A Simple Buy-Hold-Earn System.</h5>
                                            </div>
                                            <div class="lines">
                                                <div class="line_height"></div>
                                                <div class="line_height"></div>
                                                <div class="line_height"></div>
                                            </div>
                                            <img src="img/circle.png" class="img-responsive logo_high" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 cols_tops">
                                        <div class="single_cart2 clearfix">
                                            <div class="fav_here"><img src="./img/logo_icon.png" class="img-responsive" alt="" /></div>
                                            <div class="cart2text">
                                                <h3>Still got question?</h3>
                                                <div class="claim_btn">
                                                    <a href="/#" className='text-decoration-none'>More Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 cols_tops">
                                        <div class="single_cart2 single_cart2_social text-center clearfix">
                                            <div class="cart2text">
                                                <h3>Connect with us</h3>
                                                <div class="social_btn ">
                                                    <a href="/#"><i class="fa-brands fa-facebook"></i></a>
                                                    <a href="/#"><i class="fa-brands fa-instagram"></i></a>
                                                    <a href="/#"><i class="fa-brands fa-telegram"></i></a>
                                                    <a href="/#"><i class="fa-brands fa-discord"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
