import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
       <div>
         <div className='footer-style'> 
            <div>
                <h1>Career Hub</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elitne quasi quae dolore officiis quisquam sequi. Sint fugiat magnam eligendi distinctio!</p>
                <img src="../../../public/icons/social.png" alt="" srcset="" />

            </div>

            <div>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>

            </div>

            <div>
                <h1>Product</h1>
                <p>prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>About Us</p>Integrations

            </div>

            

            <div>   
            <h1>Support</h1>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a partner</p>
            <p>Developer</p>


            </div>

            <div>   
            <h1>Contact</h1>
            <p>14710 41st ave</p>
            <p>(347)-888-0929</p>
           


            </div>
        </div>
        <div>
            <p>@2023 CareerHubs All rights Resevered</p>
        </div>
       </div>
    );
};

export default Footer;