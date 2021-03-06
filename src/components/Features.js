import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline service-grid">
    {gridItems.map(item => (
      <div key={item.text} className="column service">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '50px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <Link to={item.link}>Read More</Link>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
