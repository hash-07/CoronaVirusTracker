import React from "react";
import { SocialIcon } from 'react-social-icons'; 
import ReactDOM from 'react-dom';

const Footer = (props) => {
	const mystyle = {
		padding : "0px 0px 0px 50px", 
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      display : "flex",
      justifyContent : 'space-between'

    };


	return (
	<React.Fragment>

		<footer className="w-100 bg-light text-center">
		<p> Copyright © 2020 Code with Hash. All Rights Reserved | Terms & Conditions.<br></br>
		 <a style={mystyle} id ="stats" className="btn btn-success" href="https://hash-07.github.io/website/"> Free Courses </a>
		</p>

		
		</footer>


	</React.Fragment>

		);
	ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);
};


export default Footer;