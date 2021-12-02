import {useState} from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/coin.svg';
import { Container, Content } from './styles';
interface HeaderProps{
    onOpenNewTransactionModal:()=>void;

}
function Header({onOpenNewTransactionModal}:HeaderProps){
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Miranda Money" />    
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
                
            </Content>
        </Container>
        )
}
export {Header}