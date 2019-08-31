import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServiceTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              
              <form name="{title}" netlify>
              <h2>Have an project that needs help?</h2>
              <div className="columns">
            <div className="column is-4">
                <label>First Name<br /><input name="first-name" type="text"></input></label>
                </div>
                <div className="column is-4">
                <label>Last Name<br /><input name="last-name" type="text"></input></label>
                </div>
                <div className="column is-4">
                <label>Email<br /><input name="email" type="email" ></input></label>
                </div>
                </div>
                <div className="columns">
                <div className="column is-12">
                <label>Genre of your project<br/>
                <select name="genre">
                    <option>Fiction</option>
                    <option>Non-fiction</option>
                    <option>Poetry</option>
                  </select>
                </label>
                </div>
                </div>
                <div className="columns">
                <div className="column is-12">
                <label>Details on your project and any questions you have<br/>
          <textarea name="details" rows="4"></textarea>
                </label>
                </div>
                </div>
                <div className="columns">
                <div className="column is-8">
                <label><input type="checkbox" name="GDPR"></input>By checking this box, I agree to release the information provided above to Kelsey Bigelow for the purpose of contacting me for more information on her editing services.</label></div></div>
                <input type="submit" className="btn" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ServiceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Service = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServiceTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Service

export const pageQuery = graphql`
  query ServiceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
