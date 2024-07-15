import React from 'react'
import styled from 'styled-components';
const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;
const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
    font-size: 12px;
  }
`;
const Copyright = styled.p`
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 16px;
  color: ${(props) => props.theme.remainingTextColor};
  text-align: center;
`;

const Footer = () => {
  return (
    <><FooterContainer>
      <FooterWrapper>
        <Copyright>
          &copy; 2024 Nilesh Fatfatwale. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>

    </>
  )
}

export default Footer