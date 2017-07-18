import React, {Component} from 'react';
import cx from 'classnames';
import { Navbar, NavItem, Tooltip, Nav, OverlayTrigger } from 'react-bootstrap';

import logo from 'img/logo.png';
import dog from 'img/dog.png';
import cat from 'img/cat.png';
import dogMouth from 'img/dogMouth.png';

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
			navbarTransparent: true,
		};
  }

	componentDidMount() {
	   window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	   window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
    const scrollTop = window.pageYOffset;
		this.setState(() => {
		  return {
				navbarTransparent: scrollTop < 260,
			};
		});
	}

	render() {
		const tooltip = (
			<Tooltip id="tooltip">This blog was Designed by Material Kit & transform with care by me</Tooltip>
		);

		const navbarStyles = cx({
      'navbar-transparent': this.state.navbarTransparent,
    });

		return (
			<Navbar bsStyle="primary" fixedTop className={navbarStyles}>
				<Navbar.Header>
					<Navbar.Toggle />
						<a href="#">
							<div className="logo-container">
								<div className="logo">
									<OverlayTrigger placement="bottom" overlay={tooltip}>
										<img src={logo} alt="渺渺惜雨怀" />
									</OverlayTrigger>
								</div>
								<div className="brand"> 雨浓 </div>
							</div>
						</a>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#"><i className="material-icons">dashboard</i> some</NavItem>
						<NavItem eventKey={2} href="#"><i className="fa fa-weibo"></i></NavItem>
						<NavItem eventKey={1} href="#"><i className="fa fa-wechat"></i></NavItem>
						<NavItem eventKey={3} href="#"><i className="fa fa-github"></i></NavItem>
						<NavItem eventKey={4} href="#"><img src={dogMouth}   className="breath"/></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
