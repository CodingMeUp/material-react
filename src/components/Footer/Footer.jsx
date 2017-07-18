import React, {Component} from 'react';

import { Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
      <footer className="footer">
        <Grid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#">渺渺惜雨怀</a>
              </li>
              <li>
                <a href="#">About ME</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            &copy; 2017, made with <i className="material-icons">favorite</i> by 渺渺惜雨怀 for a better web.
          </div>
        </Grid>
      </footer>
		);
	}
}

export default Footer;
