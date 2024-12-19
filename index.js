const agendamentos = []

function agendar(){
	let nome = document.querySelector("#nome").value	
	let telefone = document.querySelector("#telefone").value
	let placa = document.querySelector("#placa").value
	let modelo = document.querySelector("#modelo").value
	
	let serviçosSelecionados = [];

	const checkboxes = document.querySelectorAll('input[name="servico"]:checked');
	checkboxes.forEach((checkbox) => {
	serviçosSelecionados.push(checkbox.value);
});


if (nome.length > 0 && telefone.length > 0 && placa.length > 0 && modelo.length > 0 && serviçosSelecionados.length > 0){
	let agendamento = {
	nome: nome,
	placa: placa,
	Telefone: telefone ,
	Modelo: modelo,
	serviço:serviçosSelecionados,
	dia: "",
	hora:""
}

	agendamentos.push(agendamento)

	let agendamentosJson = JSON.stringfy({agendamentos: agendamentos}, null, 2);
	
	alert(JSON.stringify(agendamentos, null, 2))
}else{
	alert("Preencha todos os campos abaixo!")
}
}