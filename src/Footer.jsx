import React from "react";
import { SocialIcon } from 'react-social-icons'; 
import ReactDOM from 'react-dom';

const Footer = (props) => {
	return (
	<div>

		<footer className="w-100 bg-light text-center">
		<p> Copyright © 2020 Code with Hash. All Rights Reserved | Terms & Conditions.
		
		</p>


		<p>
		<a class="ins-ic mr-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
		<a class="fb-ic mr-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
		<a class="git-ic mr-3" role="button"><i class="fab fa-lg fa-github"></i></a>
<a class="comm-ic mr-3" role="button"><i class="fas fa-lg fa-comments"></i></a>


		</p>



		</footer>


	</div>

		);
	ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);
};


export default Footer;