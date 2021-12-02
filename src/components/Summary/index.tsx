import incomeImg from '../../assets/cashIn.svg';
import outcomeImg from '../../assets/cashOut.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary(){
    return(
            <Container>
                
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="Entradas" />
                    </header>
                    <strong>120€</strong>
                </div>
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="Saídas" />
                    </header>
                    <strong>-10€</strong>
                </div>
                <div className="highlight-background"> 
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="Total" />
                    </header>
                    <strong>110€</strong>
                </div>
            </Container>
        )
}