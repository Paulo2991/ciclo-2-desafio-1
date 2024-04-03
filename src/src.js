let listaGorjeta = [];
let listaPedido = [];
let listaNomesMesa = [];

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

	let nome;
	for(let i = 0; i < numPessoasMesa; i++){	
		nome = prompt(`Informe ${i + 1} o nome das pessoas na mesa: `);
		listaNomesMesa.push(nome);
		alert(listaNomesMesa[i]);	
	}

	const pedidos = {
		numPessoasMesa:numPessoasMesa,
		valorConta:valorConta,
		nome:nome
	};

	listaPedido.push(pedidos);
	for(let i = 0; i < listaPedido.length; i++){
		alert("Pedido cadastrado com sucesso: " + `ID: ${i + 1}` + " . " + `Valor Conta: ${listaPedido[i].valorConta}` + " . " + `Numeros De Pessoas Na Mesa: ${listaPedido[i].numPessoasMesa}` + " . " + `Nome Das Pessoas na mesa: ${ listaNomesMesa }` );
	}
}

function calcularGorjeta(porcentagem){
	while(true){
		let calcularGorjeta = prompt("Você quer dar uma gorjeta: Informe 1 - para sim 2 - para não 3 - para sair: ");
		switch(calcularGorjeta){
		case "1":
			for(let i = 0; i < listaPedido.length; i++){
				let calculoGorjeta  = (listaPedido[i].valorConta * porcentagem)/100;
				listaGorjeta.push(calculoGorjeta);
				alert("O valor da gorjeta é: " + calculoGorjeta);
			}
			break;
		case "2":
			listaGorjeta.push(0);
			return;
		case "3":
			alert("Saindo Do Menu:")
			return;
		default:
			alert("Opção Invalida!");
		}
	}
}

function calcularPedido() {
	for(let i = 0; i < listaPedido.length; i++){
		if(listaPedido[i].length !== 0){
			while(true) {
				let metodosPagamento = prompt("1 - Dinheiro - 2 - PIX - 3 - Cartão 4 - Sair: ");
				switch (metodosPagamento) {
				case "1":
					for(let j = 0; j < listaNomesMesa.length; j++){
						let opcaoPagamento = prompt(listaNomesMesa[j] + " 1 - Para Individual 2 - Para Cojunto: ");
						if(opcaoPagamento === "1"){
							listaPedido[i].valorConta -= listaPedido[i].valorConta * 0.10;
							alert("O valor total na conta é: " + listaPedido[i].valorConta.toFixed(2));
						}else{
							listaPedido[i].valorConta -= listaPedido[i].valorConta * 0.10;
							let calculoValorDinheiro = listaPedido[i].valorConta / listaPedido[i].numPessoasMesa;
							alert("Valor com desconto é: " + listaPedido[i].valorConta.toFixed(2));
							alert("O valor total na conta é: " + calculoValorDinheiro.toFixed(2));
						}
					}
					break;
				case "2":
					for(let j = 0; j < listaNomesMesa.length; j++){
						let opcaoPagamento = prompt(listaNomesMesa[j] + " 1 - Para Individual 2 - Para Cojunto: ");
						if(opcaoPagamento === "1"){
							listaPedido[i].valorConta -= listaPedido[i].valorConta * 0.10;
							alert("O valor total na conta é: " + listaPedido[i].valorConta);
						}else{
							listaPedido[i].valorConta -= listaPedido[i].valorConta * 0.10;
							let calculoValorPix = listaPedido[i].valorConta / listaPedido[i].numPessoasMesa;
							alert("Valor com desconto é: " + listaPedido[i].valorConta.toFixed(2));
							alert("O valor total na conta é: " + calculoValorPix.toFixed(2));
						}
					}
					break;
				case "3":
					for(let j = 0; j < listaNomesMesa.length; j++){
						let opcaoPagamento = prompt(listaNomesMesa[j] + " 1 - Para Individual 2 - Para Cojunto: ");
						if(opcaoPagamento === "1"){
							alert("O valor total na conta é: " + listaPedido[i].valorConta.toFixed(2));
						}else{
							let calculoValorCartao = listaPedido[i].valorConta / listaPedido[i].numPessoasMesa;
							alert("O valor total na conta é: " + calculoValorCartao.toFixed(2));
						}
					}
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
		let op = prompt("1 - Cadastrar Pedido 2 - Calcular Pedido 3 - Dar Gorjeta 4 - Sair: ");
		switch(op){
		case "1":
			cadastrarPedido();
			break;
		case "2":
			calcularPedido();
			break;
		case "3":
			let porcentagem =  parseFloat(prompt("Informe a porcentagem aplicada para o garçom: "));
			if (isNaN(porcentagem) || porcentagem < 0) {
				alert(
					"Porcentagem Invalida. Por favor, insira um valor numérico positivo."
					);
			}else{
				calcularGorjeta(porcentagem);
			}
			break;
		case "4":
			alert("Saindo Do Sistema:");
			return;
		default:
			alert("Opção Invalida:")
		}
	}
}

principal();
