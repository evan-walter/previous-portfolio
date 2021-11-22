import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/default.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='Gatsby Docs are awesome'
      />
    </div>
  );
}
