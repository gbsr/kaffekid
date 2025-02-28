import styled from 'styled-components'

import React from 'react';
import EmailForm from './emailForm'

const Page = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log('Form submitted');
  }
  return (
    <MainContainer>
      <Title>Jozye Kaya Art</Title>
      <Spacer />
    <ItemContainer>  <GridContainer>

        
         
          <ImageContainer>
         <img src="./IMG_5995.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Tell me yo prajs</Price></PriceContainer>
         
          <ImageContainer>
         <img src="./IMG_7134.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Probably not expensive enough!</Price></PriceContainer>
         
          <ImageContainer>
         <img src="./IMG_7135.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Swish me millions</Price></PriceContainer>
         
          <ImageContainer>
         <img src="./IMG_7137.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Out of your league</Price></PriceContainer>
         
          <ImageContainer>
         <img src="./IMG_7138.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Everything Elon Musk has, plzz</Price></PriceContainer>
         
          <ImageContainer>
         <img src="./IMG_7140.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Plenty plenty plenty?</Price></PriceContainer>
         
         
          <ImageContainer>
         <img src="./IMG_7146.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$errrrytang</Price></PriceContainer>
         
         
          <ImageContainer>
         <img src="./IMG_7147.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Just give. Don't ask.</Price></PriceContainer>
         
         <ImageContainer>
         <img src="./IMG_5673.jpg" alt="placeholder" /></ImageContainer>
         <PriceContainer> <Price>$Call me and give your best offer</Price></PriceContainer>


        
      </GridContainer></ItemContainer>
      <EmailForm />


    </MainContainer>
  )
}



const ItemContainer = styled.div `
    width: 50%;
    margin: 0 auto;

    @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`

const Spacer = styled.div`
  width: 96%;
  height: 1px;
  background-color: #ddd;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`
const PriceContainer = styled.div`
  height: 40px;
  width: 100%;
`


const Price = styled.p `
border-bottom: 2px solid #cecece;
  font-family: 'Playfair Display', serif; 

text-align: right;
  font-weight: 400;
  font-size: 16px;
`

const ImageContainer = styled.div `
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #bcbcbc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`

const MainContainer = styled.div`
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #e9e9e9;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( minmax(150px, 1fr));
  gap: 10px;
  margin-top: 40px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const Title = styled.h1` /* Changed from text to h1 */
  font-family: 'Playfair Display', serif; /
  font-size: 24px;
  font-weight: bold;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 2px;
`

export default Page