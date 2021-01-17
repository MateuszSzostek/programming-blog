import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface HeadProps {
  title: string
}

const Head: React.FC<HeadProps> = (props) => {

  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          title
        }
      }
    }
  `)

  return (
    <Helmet
      title={props.title + ' | ' + data.site.siteMetadata.title}
    />
  )
}

export default Head;
