import React from 'react';
import styled from 'styled-components';

const GradientBackground = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom right, blue, orange);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default GradientBackground;
