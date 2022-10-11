import footStyle from './Footer.module.css'

import fbIcon from '../../assests/Facebook.png'
import instaIcon from '../../assests/Instagram.png'
import twitIcon from '../../assests/Twitter.png'
import linkedIcon from '../../assests/LinkedIn.png'

function Footer () {
    return (
        <footer>
        <section className={footStyle.topfoot}>
            <div className={footStyle.leftFoot}>
                <div>
                    <ul>
                        <li className={footStyle.listHead}>Company</li>
                        <li>About Us</li>
                        <li>Why Choose us</li>
                        <li>Pricing</li>
                        <li>Testimonial</li>
                    </ul>
                
                </div>
                <div>
                    <ul>
                        <li className={footStyle.listHead}>Resources</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={footStyle.listHead}>Product</li>
                        <li>Project management</li>
                        <li>Time tracker</li>
                        <li>Time schedule</li>
                        <li>Lead generate</li>
                        <li>Remote Collaboration</li>
                    </ul>
                </div>
            </div>

            <div className={footStyle.rightFoot}>
                <h3>finSweet</h3>
                <p>Subscribe to our Newsletter</p>
                <form>
                <input type="email" placeholder="Enter your Email" />
                <input type="submit" value="Subscribe" />
                </form>
            </div>
        </section>
            <div className={footStyle.bottomFoot}>
                <div className={footStyle.lines}></div>
                <p>&copy; Copyright Finsweet 2022</p>
                <img src={fbIcon} alt="" />
                <img src={twitIcon} alt="" />
                <img src={instaIcon} alt="" />
                <img src={linkedIcon} alt="" />
                <div className={footStyle.lines}></div>
            </div>
        </footer>
    );
}

export default Footer;