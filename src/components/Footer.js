import React, { Component } from 'react';

function Footer() {
        return (
            <div>
                {/* <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
                </footer> */}
                <div id="footer" className="row">
                    <div className="col-md-12">
                        <div className="footer p-3 mt-4 text-center bg-dark text-light">
                            Developed By :
                            <span className="text-warning font-weight-normal"> Manpreet Singh</span>
                            , using <i className="fab fa-react"/> React JS &amp; Redux JS integrated
                             with external movies data API <a href="http://www.omdbapi.com" 
                             target="_blank">OMDB.</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Footer;