import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Image({ src, alt, fluid, maxWidth, fixedWidth }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: ${src} }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          ${fluid} ? 
            fluid(maxWidth: ${maxWidth}) {
              ...GatsbyImageSharpFluid
            } :
            ${fixedWidth} ?
              fixed(width: ${fixedWidth}) {
                ...GatsbyImageSharpFixed
              } : null 
            
          
        }
      }
    }
  `);
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt={alt}
      />
    </div>
  );
}
