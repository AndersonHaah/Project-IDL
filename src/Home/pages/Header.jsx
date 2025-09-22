import React from "react";
import './style/Header.css'
import { IoPerson } from "react-icons/io5";
import Logo from './img/logo.png'

export default props => 
    <header className="container-header">
        <img src={Logo} alt="logo-idl" className="header-logo"/>
        <span></span>
        <nav className="nav-header">
            <a href="/home" className="link-header">INICIO</a>
            <a href="/" className="link-header">LENDAS</a>
            <a href="/" className="link-header">CAMPEONATOS</a>
            <a href="/" className="link-header">CARTINHAS</a>
            <a href="/" className="link-header">COMUNIDADE</a>
        </nav>
        <button className="button-header"><IoPerson /></button>
    </header>