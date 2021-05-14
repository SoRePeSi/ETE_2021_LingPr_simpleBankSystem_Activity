
var clientes = [
    [nome = "Bruno",
     codigo = "123",
     senha = "123",
     saldo = 100],
    [nome = "Joaozinho",
     codigo = "456",
     senha = "456",
     saldo = 10]
];

var code = password = index = "";
var processo = "";
var stop = "n"

do{
	Usuario();
}while(stop!="y");

function Usuario(){
	for(var j=0; j<3; j++){ // Repete três vezes
		do{
			code = prompt("Digite o código: ");
		}while(code=="");

		do{
			password = prompt("Digite a senha: ");
		}while(senha=="");

		for(var i=0; i<2; i++){
			if((clientes[i][1]==code)&&(clientes[i][2]==password)){
				index = i;
				Processo();
				
				var sn = prompt("Gostaria de fazer uma outra operação? (s/n)\n");
				if(sn=="y"){
					stop = "y";
				}
				return;
			}
			else{
				console.log(i);
				continue;
			}
		}
		console.log("Código ou senha incorreto.");
		if(j==2){
			console.log("Por favor, tente novamente mais tarde.");
			stop = "y";
		}
	}
}

function Processo(){
	do{
		processo = prompt("Digite o código do processo: \n 1 - Saque \n 2 - Depósito \n 3 - Transferência\n");
	}while((processo=="")&&(parseInt(processo)<0)&&(parseInt(processo)>4));
	processo = parseInt(processo);

	do{
		valor = prompt("Digite o valor da operação, em reais: ");
	}while((valor=="")&&(Number.isFinite(parseFloat(valor))));
	valor = parseFloat(valor);

	if(processo==1){
		Saque();
	}
	else if(processo==2){
		Deposito();
	}
	else{
		Transferencia();
	}
}

function Saque(){
	if(clientes[index][3]>valor){
		clientes[index][3] -= valor;
		console.log("Dinheiro liberado.\nNovo saldo: " + clientes[index][3]);
	}
	else{
		console.log("Você não tem dinheiro suficiente para realizar esta operação.");
	}
}

function Deposito(){
	clientes[index][3] += valor;
	console.log("Operação finalizada.\nNovo saldo: " + clientes[index][3]);
}

function Transferencia(){
	if(clientes[index][3]>valor){
		var destino = prompt("Digite a conta de destino: ");

		clientes[index][3]-=valor;
		for(i=0; i<2; i++){
			if(i==index){
				continue;
			}
			else{
				if(destino==clientes[i][2]){
					clientes[i][2]+=valor;
				}
			}
		}
		
		console.log("Operação realizada. \nNovo saldo: " + clientes[index][3]);
	}
	else{
		console.log("Você não tem dinheiro suficiente para realizar esta operação.");
	}
}
