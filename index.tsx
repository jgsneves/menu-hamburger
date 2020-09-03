import React, {useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {
    Wrapper,
    BurgerContainer, 
    Burger,
    LinksDiv, 
    LinkElement, 
    StrongText,
} from './styles';
import GlobalStyles from '../../styles/GlobalStyles';
import {
    Home, 
    Navigation, 
    Map, 
    Video, 
    Database, 
    Settings, 
} from 'react-feather';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(true);

    const routerMatch = useRouteMatch();

    return (
        <>
            <GlobalStyles />

            <Wrapper>
                <BurgerContainer>
                    <Burger 
                        open={open} 
                        onClick={() => setOpen(!open)}>
                        <div />
                        <div />
                        <div />
                    </Burger>
                </BurgerContainer>

                <LinksDiv open={open}>
                    <Link 
                        to="/"
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Home color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === '/' ? 'active' : 'deactive'}
                            >Painel de Controle</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/navigation'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Navigation color='#CACACA'/>
                            <StrongText
                                color={routerMatch.path === '/navigation' ? 'active' : 'deactive'}
                            >Navegação</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/roundconfig'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Map color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === "/roundconfig" ? "active" : "deactive"}
                            >Configuração de Rondas</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/inspection'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Video color='#CACACA'/>
                            <StrongText
                                color={routerMatch.path === '/inspection' ? 'active' : 'deactive'}
                            >Inspeção em Tempo Real</StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/roundhistory'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Database color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === '/roundhistory' ? 'active' : 'deactive'}
                            >
                                Histórico de Rondas
                            </StrongText>
                        </LinkElement>
                    </Link>

                    <Link 
                        to='/appconfig'
                        style={{textDecoration: 'none'}}
                    >
                        <LinkElement>
                            <Settings color='#CACACA' />
                            <StrongText
                                color={routerMatch.path === '/appconfig' ? 'active' : 'deactive'}
                            >Configuração</StrongText>
                        </LinkElement>
                    </Link>

                </LinksDiv>
            </Wrapper>
        </>
    );
}

export default HamburgerMenu;