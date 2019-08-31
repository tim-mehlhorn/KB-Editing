import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-2">
                <div className="content has-text-centered">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="KB Editing"
                      style={{ width: '6em', height: '6em' }}
                    />
                  </Link>
                </div>
              </div>
              <div className="column is-6">
              <section className="menu">
                <ul className="menu-list sitemap">
                  <li><Link to="/" className="navbar-item">Home</Link></li>
                  <li><Link className="navbar-item" to="/about">About</Link></li>
                  <li><Link className="navbar-item" to="/contact">Contact</Link></li>
                  <li><a className="navbar-item" href="https://www.google.com" target="_blank">Author Site</a></li>
                  <li><a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Admin</a></li>
                </ul>
              </section>
            </div>
            <div className="column is-3 social">
              <h4>Connect with KB Editing</h4>
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </footer >
    )
  }
}

export default Footer
