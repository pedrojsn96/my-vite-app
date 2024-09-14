import React from 'react';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import { Contato, Home, Noticias, OndeAtuamos, PeLuisCecchin, SobreNos, Transparencia } from '../pages';
import ROUTER_PATHS from './constants';

const Router: React.FunctionComponent = () => {
  return (
      <BrowserRouter basename='/my-vite-app'>
        <Routes>
            <Route index path={ROUTER_PATHS.HOME} Component={Home}/>
            <Route path={ROUTER_PATHS.SOBRE_NOS} Component={SobreNos} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_HISTORIA} Component={SobreNos} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_TIMELINE} Component={SobreNos} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_ATUACAO} Component={SobreNos} />
            <Route path={ROUTER_PATHS.SOBRE_NOS_GESTAO} Component={SobreNos} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_TESTAMENTOS} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_MEMORIAL} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_CAUSA} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.PE_LUIS_CECCHIN_CENTENARIO} Component={PeLuisCecchin} />
            <Route path={ROUTER_PATHS.ATIVIDADES} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.ATIVIDADES_CARIDADE} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.ATIVIDADES_SOCIOFAMILIAR} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.ATIVIDADES_FORMACAO} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.ATIVIDADES_CONVIVENCIA} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.ATIVIDADES_INFANTIL} Component={OndeAtuamos} />
            <Route path={ROUTER_PATHS.PARCEIROS} Component={Home} />
            <Route path={ROUTER_PATHS.DOACAO} Component={Home} />
            <Route path={ROUTER_PATHS.NOTICIAS} Component={Noticias} />
            <Route path={ROUTER_PATHS.TRANSPARENCIA} Component={Transparencia} />
            <Route path={ROUTER_PATHS.CONTATO} Component={Contato} />
            {/* add tela de noticias */}
            {/* criar uma pagina de doação */}
            <Route path='*' Component={Home} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router;
