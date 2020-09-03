import styled from 'styled-components';
import media from 'styled-media-query';
import {generateMedia} from 'styled-media-query';

const customMedia = generateMedia({
    ipad: "500px",
})

export const Wrapper = styled.div`
    ${media.greaterThan("medium")`
        display: none;
    `}

    ${media.lessThan("medium")`
        display: flex;
    `}
`;

export const BurgerContainer = styled.div`
    width: 100vw;
    height: 60px;
    padding: 20px;
    background-color: #212427;
`;

export const Burger = styled.div<{open?: boolean}>`
    width: ${props => props.open ? '2rem' : '100vw'};
    transition: all 0.3s linear;
    padding-left: 10px;
    height: 2rem;
    position: fixed;
    top: 20px;
    z-index: 30;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #cacaca;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear; 

        &:nth-child(1) {
            transform: ${props => props.open ? 'rotate(0)' : 'rotate(45deg)'};
        }

        &:nth-child(2) {
            transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
            opacity: ${props => props.open ? 1 : 0};
        }

        &:nth-child(3) {
            transform: ${props => props.open ? 'rotate(0)' : 'rotate(-45deg)'};
        }
    }


`;
export const LinksDiv = styled.div<{open?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #212427; /* grey */
    position: fixed;
    overflow: auto;
    top: 60px;
    z-index: 20;
    transform: ${props => props.open ? 'translateX(-150%)' : 'translateX(0)'};
    transition: all 0.3s linear;

    ${customMedia.greaterThan("ipad")`
        justify-content: center;
        padding-left: 250px;
        padding-bottom: 200px;
    `}
`;
export const LinkElement = styled.div`
    min-width: 80vw;
    background-color: #212427; /* grey */
    display: flex;
    align-items: center;
    margin: 30px;
`;
export const StrongText = styled.p<{color: "active" | "deactive"}>`
    color: ${props => {
        if (props.color === "active") {
            return "#0AB3FB";
        }
        if (props.color === "deactive") {
            return "#FFFFFF"
        }
    }};
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.3em;
    
    ${customMedia.greaterThan("ipad")`
        font-size: 1.8em;
    `}
`;