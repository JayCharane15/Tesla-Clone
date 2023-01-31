import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';


function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpeg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Lower Cost Solar Panel in America"
            description="Money Back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a new roof Plus Solar Panel"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            rightBtnText=""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`