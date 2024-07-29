import React, {useState} from 'react';

function Contador(){
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Voce clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}> Clique aqui</button>
        </div>
    );
}

export default Contador;