import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../Services/api';
import {Container,TransactionTypeContainer,RadioBox} from './styles';
interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose:()=>void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const [title,setTitle] = useState("");
    const [value,setValue] = useState(0);
    const [category,setCategory] = useState("");
    const [type,setType] = useState("deposit"); 
    
    function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
        const data = {
            title,
            category,
            value,
            type
        };

    }
    return(

    <Modal 
        onRequestClose={onRequestClose} 
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-container"
    >
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Registar Transação</h2>
            <input placeholder="Título" value={title} onChange={event=>setTitle(event.target.value)} />
            <input type="number" placeholder="Valor"  value={value} onChange={event=>setValue(Number(event.target.value))} />
            <TransactionTypeContainer>
                <RadioBox
                    activeColor="green"
                    type="button" 
                    onClick={()=>{
                    setType("deposit")
                }}
                    isActive={type === "deposit"}
                >
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox
                    activeColor="red"
                    type="button"
                    onClick={()=>{
                    setType("withdraw")
                }}
                    isActive={type === "withdraw"}
                >
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input placeholder ="Categoria"  value={category} onChange={event=>setCategory(event.target.value)} />

            <button type="submit">
                Registar
            </button>


        </Container>
    </Modal>

    )


}