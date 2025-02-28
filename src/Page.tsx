import styled from 'styled-components'
import React, { useRef, useState, useEffect } from 'react'
import EmailForm from './emailForm'

import { colors } from './colors'

const Page = () => {
  const [showingContact, setShowingContact] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if hash is #contact on page load
    if (window.location.hash === '#contact') {
      setShowingContact(true)
    }

    // Add scroll listener
    const handleScroll = () => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect()
        // If contact section is visible in viewport
        setShowingContact(rect.top < window.innerHeight && rect.bottom >= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackClick = () => {
    // Scroll back to grid
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    // Remove hash from URL
    history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    )
  }

  return (
    <MainContainer>
      <TopBar>
        <Title>Jozye Kaya Art</Title>
        <Spacer />
      </TopBar>

      <ItemContainer>
        <GridContainer ref={gridRef}>
          <BlurbContainer>
            <Blurb>
              <span>
                Jozye Kaya skapar expressionistiska, abstrakta konstverk,
                inspirerat av naturen. Färgerna hon använder är en blandning av
                natur pigment, oljepastell och akryl. Hon använder konsten som
                meditation och alla verk är skapade direkt från hjärtat.{' '}
              </span>
              <br></br>
              <br></br> Hon använder hela kroppen när hon målar, och målar
              främst med händerna, på golvet. Hon har tidigare ställt ut i
              Milano, Köpenhamn och på olika ställen runt Sverige.
            </Blurb>
          </BlurbContainer>
          <ImageContainer>
            <img src="./IMG_5995.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7134.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7135.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7137.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7138.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7140.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7146.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_7147.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>

          <ImageContainer>
            <img src="./IMG_5673.jpg" alt="artwork" />
            <ImageFooter>
              <Price>$Tell me yo prajs</Price>
              <InquireButton href="#contact">Inquire</InquireButton>
            </ImageFooter>
          </ImageContainer>
        </GridContainer>
      </ItemContainer>
      <BackButton onClick={handleBackClick}>← Back to Gallery</BackButton>

      <FormTitle id="contact" ref={contactRef}>
        Let's talk
      </FormTitle>
      <EmailForm />
      <FormTitle></FormTitle>
      <InstagramButton
        href="https://www.instagram.com/jozyekaya.art/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on Instagram"
      >
        <InstagramIcon />
      </InstagramButton>
    </MainContainer>
  )
}

const TopBar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  z-index: 20000;
  background: #d8cec1;
  box-shadow: 0 10px 82px #c7b6a2;
`

const BlurbContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  background: #c7b6a2;
  border: 1px solid #b6a795;
  border-radius: 10px;
  position: relative;
  margin-bottom: 60px;
  box-shadow: 0 4px 12px #c7b6a2;

  &:before {
    content: '\\201C'; /* Opening quotation mark */
    position: absolute;
    top: 0px;
    left: 10px;
    font-size: 60px;
    font-family: 'Playfair Display', serif;
    color: #333;
  }

  &:after {
    content: '\\201D'; /* Closing quotation mark */
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-size: 60px;
    font-family: 'Playfair Display', serif;
    color: #333;
    transform: rotate(180deg);
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 4px;
  }
`
const Blurb = styled.p`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.mainText};
  padding-inline: 20px;
  padding-top: 32px;
  margin-bottom: 15px;
  color: #333;
`

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const InstagramButton = styled.a`
  z-index: 100000;
  border-radius: 50%;
  top: 28px;
  left: 28px;
  height: 40px;
  width: 40px;
  border: 1px solid #3a3630;
  position: fixed;
  right: 15%;
  cursor: pointer;
  background-color: #d7ccbd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3a3630;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    color: #e1306c;
  }

  @media (max-width: 1024px) {
    right: 5%;
    height: 40px;
    width: 40px;
  }
`
const BackButton = styled.button`
  background-color: #a87979;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin: 40px auto 20px;
  display: block;
  box-shadow: 0 10px 20px ${colors.shadow};
  border: 1px solid #c7b6a2;

  font-family: 'Lato', sans-serif;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c27d7d;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const ItemContainer = styled.div`
  width: 70%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 95%;
  }
`
// Modify ImageContainer to include the background effect
const ImageContainer = styled.div`
  display: flex;
  width: 60%;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #c7b6a2;
  background-color: white;
  box-shadow: 0 4px 12px #c7b6a2;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${colors.shadow};
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

// Create a footer container that will expand/contract
const ImageFooter = styled.div`
  background-color: #e5e1d9;
  padding: 10px;
  transition: all 0.15s ease;
  height: 20px;
  overflow: hidden;

  ${ImageContainer}:hover & {
    height: 100px;
  }
`

// Style for the price
const Price = styled.p`
  font-family: 'Playfair Display', serif;
  text-align: right;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.mainText};
  margin-bottom: 15px;
  font-style: italic;
`

// Style for the inquire button
const InquireButton = styled.a`
  display: block;
  text-align: center;
  background-color: ${colors.accent};
  color: white;
  padding: 12px 0;
  margin-top: 15px;
  border-radius: 4px;
  border: 1px solid #c7b6a2;
  box-shadow: 0 10px 20px ${colors.shadow};

  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.accentHover};
  }
`

const Spacer = styled.div`
  position: absolute;
  left: 92px;
  top: 58px;
  width: 90%;
  height: 1px;
  background: #000;
`

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw; /* Prevent overflow */
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: ${colors.background};
  font-family: 'Lato', sans-serif;
  color: ${colors.mainText};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 80px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(minmax(150px, 1fr));
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    border-bottom: 2px solid #ccc;
  }
`

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  position: fixed;
  top: 20px;
  left: 80px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
  color: ${colors.mainText};
  letter-spacing: 1px;
`

const FormTitle = styled.h2`
  margin-top: 20px;

  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.mainText};
`

export default Page
