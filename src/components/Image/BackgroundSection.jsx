import React, { useContext, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import PortfolioContext from '../../context/context';

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  opacity: 0.5;
`;

export default StyledBackgroundSection;
