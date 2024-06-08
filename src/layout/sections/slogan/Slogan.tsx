import React from 'react';
import styled from "styled-components";
import { SectionTitle } from '../../../components/SectionTitle';
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I am avaliable for Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #f1b48a;
    text-align: center;
`