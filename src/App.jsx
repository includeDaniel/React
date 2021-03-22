import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/basicos/Familia'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo=" #05 - Componente com filhos" color="#6495ED">
                    <Familia sobrenome="Nunes"/>
                </Card>
                
                <Card titulo=" #04 - Desafio Aleatório" color="#AF7AC5">
                    <Aleatorio min={1} max={100} ></Aleatorio>
                </Card>

                <Card titulo=" #03 - Fragmento" color="#F39C12">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo=" #02 - Com Parametro" color="#C0392B">
                    <ComParametro
                        titulo="Nota do Aluno"
                        aluno="Daniel"
                        nota={10}>
                    </ComParametro>
                </Card>

                <Card titulo=" #01 - Primeiro Componente" color="#58D68D">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>

    )
}