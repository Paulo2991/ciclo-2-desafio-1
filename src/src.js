let listaGorjeta = [];
let listaPedido = [];

function cadastrarPedido(){
	let numPessoasMesa = parseInt(
		prompt("Informe o numero de pessoas na mesa: ")
		);
	if (isNaN(numPessoasMesa) || numPessoasMesa < 0) {
		alert(
			"Numero De Pessoas Invalidas. Por favor, insira um valor numérico positivo."
			);
	}
	let valorConta = parseFloat(prompt("Informe o valor da conta: "));
	if (isNaN(valorConta) || valorConta < 0) {
		alert(
			"Valor Da Conta Invalido. Por favor, insira um valor numérico positivo."
			);
	}

	let nome = prompt("Informe o nome: ");

	const pedidos = {
		numPessoasMesa:numPessoasMesa,
		valorConta:valorConta,
		nome:nome
	};

	listaPedido.push(pedidos);
	for(let i = 0; i < listaPedido.length; i++){
		alert("Pedido cadastrado com sucesso: " + `ID: ${i + 1}` + " . " + `Valor Conta: ${listaPedido[i].valorConta}` + " . " + `Numeros De Pessoas Na Mesa: ${listaPedido[i].numPessoasMesa}` + " . " + `Nome: ${listaPedido[i].nome}`);
	}
}

function calcularGorjeta(){
	while(true){
		let calcularGorjeta = prompt("Imforme 1 - para sim 2 - para não: ");
		switch(calcularGorjeta){
		case "1":
			alert("Opções de gorjeta:");
			let opGorjeta = ["R$ 2,50", "R$ 5,00", "R$ 8,50"];
			for(let j = 0;j < opGorjeta.length; j++){
				alert(`${j + 1}` + ". " + opGorjeta[j]);
			}

			let opcaoGorjeta = prompt("Informe qual gorjeta você quer da (Digite o número da opção): ");
			let valorGorjeta;
			switch(opcaoGorjeta){
			case "1":
				valorGorjeta = 2.50;
				break;
			case "2":
				valorGorjeta = 5.00;
				break;
			case "3":
				valorGorjeta = 8.50;
				break;
			default:
				alert("Opção Invalida:");
				valorGorjeta = 0;
				break;
			}
			listaGorjeta.push(valorGorjeta);
		case "2":
			listaGorjeta.push(0);
			return;
		default:
			alert("Opção Invalida!");
		}
	}
}

function calcularPedido() {
	for(let i = 0; i < listaPedido.length; i++){
		if(listaPedido[i].length !== 0){
			calcularGorjeta();
			while(true) {
				let metodosPagamento = prompt("1 - Dinheiro - 2 - PIX - 3 - Cartão 4 - Sair: ");
				switch (metodosPagamento) {
				case "1":
					listaPedido[i].valorConta -= listaPedido[i].valorConta * 0.1;
					let calculoValorDinheiro = listaPedido[i].valorConta / listaPedido[i].numPessoasMesa;
					alert("O desconto aplicado é: " + listaPedido[i].valorConta);
					alert("O valor total na conta é: " + calculoValorDinheiro);
					break;
				case "2":
					listaPedido[i].valorConta -= listaPedido[i].valorConta * 0.1;
					let calculoValorPix = listaPedido[i].valorConta / listaPedido[i].numPessoasMesa;
					alert("O desconto aplicado é: " + listaPedido[i].valorConta);
					alert("O valor total na conta é: " + calculoValorPix);
					break;
				case "3":
					let calculoValorCartao = listaPedido[i].valorConta / listaPedido[i].numPessoasMesa;
					alert("O valor total na conta é: " + calculoValorCartao);
					break;
				case "4":
					alert("Saindo Do Menu:");
					return;
				default:
					alert("Opção Invalida!");
				}
			} 
		}else{
			alert("Pedido não cadastrado:");
		}
	}
}

function principal(){
	while(true){
		let op = prompt("1 - Cadastrar Pedido 2 - Calcular Pedido 3 - Sair: ");
		switch(op){
		case "1":
			cadastrarPedido();
			break;
		case "2":
			calcularPedido();
			break;
		case "3":
			alert("Saindo do sistema:");
			return;
		default:
			alert("Opção Invalida:")
		}
	}
}

principal();
