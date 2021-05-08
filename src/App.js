import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Data from "./data.js";

function App() {
  return (
    <div >
      {/* <!------------------header----------------------> */}
      <header>
          <div className="top_header sticky-top">
              <div className="row valign ">
                  <div className="col-1">
                      <div className="logo"><img src="../icons/circle.png" alt="" /></div>
                  </div>
                  <div className="col-6">
                      <div className="global_search halign">
                          <div className="input-group">
                              <input type="search" id="" placeholder="Search any gift or decorative item" className="form-control " />
                              <button type="button" className="btn btn-primary"><i className="bi bi-search"></i></button>
                          </div>
                      </div>
                  </div>
                  <div className="col-3">
                      <a href="#" className="location balign">
                          <i className="bi bi-geo-alt"></i> &nbsp;
                          Enter Address
                      </a>
                  </div>
                  <div className="col-2">
                      <div className="btwalign">
                          <a href="#" className="accountant">
                              <i className="bi bi-person"></i> <br />
                              Account
                          </a>
                          <a href="#" className="cart">
                              <i className="bi bi-cart"></i> <br />
                              Cart
                          </a>
                          <a href="#" className="help">
                              <i className="bi bi-question-circle"></i> <br />
                                Help Center
                          </a>
                      </div>
                  </div>
              </div>
          </div> 
          <div className="bottom_header section_pad">
              <div className="row">
                  <nav className="navbar mynav navbar-expand-lg">
                      <div className="collapse navbar-collapse" id="">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                  <a className="nav-link" href="#">Home </a>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="#">Birthday </a>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="#">Home Decor</a>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="#">Plants </a>
                              </li>
                              <li className="nav-item ">
                                  <a className="nav-link" href="#">Flowers </a>
                              </li>
                              <li className="nav-item dropdown">
                                  <a href="#" className="dropdown-toggle nav-link" id="" data-bs-toggle="dropdown">Occasions</a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="#">Action</a></li>
                                      <li><a className="dropdown-item" href="#">Another action</a></li>
                                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item dropdown">
                                  <a href="#" className="dropdown-toggle nav-link" id="" data-bs-toggle="dropdown">Combo</a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="#">Action</a></li>
                                      <li><a className="dropdown-item" href="#">Another action</a></li>
                                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </header>
      <div className="clear"></div> 
      {/* <!------------------header----------------------> */}
      <main>
          <div className="row">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="200">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="../banners/carousel1.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img src="../banners/carousel1.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img src="../banners/carousel1.png" className="d-block w-100" alt="" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
          <section className="gradient_bg">
              <div className="row product_category ">
                  <h2>Shop by Category</h2>
                  <div>&nbsp;</div>
                  <div className="col-2"><a href="#"> <img src="../category/category1.png" alt="" /><h5>Decoration</h5></a></div>
                  <div className="col-2"><a href="#"> <img src="../category/category1.png" alt="" /><h5>Plants</h5></a></div>
                  <div className="col-2"><a href="#"> <img src="../category/category1.png" alt="" /><h5>Flowers</h5></a></div>
                  <div className="col-2"><a href="#"> <img src="../category/category1.png" alt="" /><h5>Cakes</h5></a></div>
                  <div className="col-2"><a href="#"> <img src="../category/category1.png" alt="" /><h5>Chocolates</h5></a></div>
                  <div className="col-2"><a href="#"> <img src="../category/category1.png" alt="" /><h5>Combo</h5></a></div>
              </div>
          </section>

          <section className="">
              <div className="row popular ">
                  <div className="text-center">
                      <div>Explore Awesome Gifts</div>
                      <h2>Popular Products</h2>
                  </div>
                  <div>&nbsp;</div>
                  {
                    Data.products.map((product) => (
                      <div key={product._id} className="col-3">
                        <div className="mycard m-4">
                            <a href={'/product/${product._id}'}><img src={product.image} alt={product.name} /></a>
                            <div className="mycard-body">
                                <h5>{product.name}</h5>
                                <div className="btwalign">
                                    <p>{product.price} &nbsp;<span className="text_cut"> {product.previous_price}</span></p>
                                    <p className="green">{product.delivery_status}</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    ))
                  }

                  <div>&nbsp;</div>
                  <div className="text-center"><button className="btn btn-outline-primary px-4">Explore More Gifts</button></div>
              </div>
              <div>&nbsp;</div>
          </section>

          <section className="gradient_bg">
              <div className="row age_category ">
                  <h2 className="ml-4">Shop For</h2>
                  <div>&nbsp;</div>
                  <div className="col-3"><img src="../category/mangift.png" alt="" /><h5>Kids</h5></div>
                  <div className="col-3"><img src="../category/mangift.png" alt="" /><h5>Men</h5></div>
                  <div className="col-3"><img src="../category/mangift.png" alt="" /><h5>Women</h5></div>
                  <div className="col-3"><img src="../category/mangift.png" alt="" /><h5>Adults</h5></div>
              </div>
          </section>
          <div>&nbsp;</div>

          <section className="">
              <div className="popular premium ">
                  <div className="text-center">
                      <div>Explore Awesome Gifts</div>
                      <h2>Send Premium Gifts</h2>
                  </div>
                  <div>&nbsp;</div>
                  <div className="row">
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt=""/>
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="mycard m-4">
                              <img src="../products/festive.png" alt="" />
                              <div className="mycard-body">
                                  <h5>Cadbury chocolates gift</h5>
                                  <div className="btwalign">
                                      <p>Rs 450 <span className="text_cut">Rs 560</span></p>
                                      <p className="green">Get it on 19 April</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>&nbsp;</div>
                  <div className="text-center"><button className="btn btn-outline-primary px-4">Explore More Gifts</button></div>
              </div>
              <div>&nbsp;</div>
          </section>

          <div className="xmar60 banner">
              <img src="../banners/banner1.png" alt="" width="100%" />
              <div className="btwalign px-4 overlay br20">
                  <div><h4>Sneaker never run out of style <br /> Get 50% off on Sitewide</h4></div>
                  <div><button className="btn btn-outline-light px-4">Start Shopping</button></div>
              </div>
          </div>
      </main>
                
      {/* <!------------------footer----------------------> */}
      <footer>
          <section className="row">
              <div className="col-5">
                  <h3>Logo</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col-2">
                  <h5 className="mb-3">Products</h5>
                  <ul>
                      <li className="r"><a href="">Gifts</a></li>
                      <li className="r"><a href="">Decoration</a></li>
                      <li className="r"><a href="">Birthday</a></li>
                      <li className="r"><a href="">Cakes</a></li>
                      <li className="r"><a href="">Plants</a></li>
                      <li className="r"><a href="">Flowers</a></li>
                  </ul>
              </div>
              <div className="col-2">
                  <h5 className="mb-3">Legals</h5>
                  <ul>
                      <li className="r"><a href="">License</a></li>
                      <li className="r"><a href="">Refund Policy</a></li>
                      <li className="r"><a href="">Privacy</a></li>
                      <li className="r"><a href="">Terms & Conditions</a></li>
                      <li className="r"><a href="">Delivery</a></li>
                      <li className="r"><a href="">Packaging</a></li>
                  </ul>
              </div>
              <div className="col-3">
                  <h5 className="mb-3">Contact Us</h5>
                  <ul>
                      <li className="r"><a href="">Fell free get in touch with us via phone or send us a message</a></li>
                      <li className="r"><a href="">+91 9876543210</a></li>
                      <li className="r"><a href="">support@email.com</a></li>
                  </ul>
              </div>
          </section>
          <hr />
          <div className="btwalign xmar60">
              <h4>© 2021 Ecommerce</h4>
              <p>images</p>
          </div>
      </footer>
      {/* <!------------------footer----------------------> */}

    </div>
  );
}

export default App;
