import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		valorComentario : '',
		valorFinal : '',
	}

	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState({valorInputComentario: event.target.value})
	}

	// aoEnviar=(event)=>{
	// 	this.setState({valorFinal : this.state.valorComentario})
	// 	console.log(`${this.state.valorFinal}`)

	// }



	render() {
		return <CommentContainer>
			
			<InputComentario input
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
