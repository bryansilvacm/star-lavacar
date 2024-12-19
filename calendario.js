const currentDateElem = document.getElementById('current-date');
const calendarDates = document.getElementById('calendar-dates');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const months = [ 'Janeito', 'Fevereira', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function renderCalendar(year, month){
    //atualizar o cabeçalho
    currentDateElem.textContent = `${months[month]} ${year}`

    //limpar datas
    calendarDates.innerHTML = '';

    //primeiro dia e numero total de dias do mes
    const firstDay = new Date(year, month, 1).getDay(); //cria uma data com ano, mes e o ia 1 (primeiro dia do mes), get Date(retorna o dia 1 daquele mes em um indixe numerico, sendo 0 para domingo, 1 para segunda, 2 para terça, etc)logo conseguimos descobrir qual dia da semaana corresponde ao primeiro dia (dia 1) daquele mês daquele ano
    const totalDays = new Date(year, month + 1, 0).getDate() // cria uma data com ano, mes (o + 1 faz ir para o próximo mes), e o dia 0, que o javascript entende como o ultima dia do mes anterior, logo o getdate retorna o ultimo dia do mes que é a quantidade de dias que aquele mes possui

    //preencher dias em branco antes do primeiro dia
    for  (let i = 0; i < firstDay; i++){
        calendarDates.innerHTML += `<div></div>`;
    }

    //preencher os dias do mes
    for (let day = 1; day<= totalDays; day++){
        calendarDates.innerHTML += `<div>${day}</div>`;

    }
}
// Navegação de meses
prevBtn.addEventListener('click', () => {
    event.preventDefault(); // Impede o envio do formulário
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
  });
  
  nextBtn.addEventListener('click', () => {
    event.preventDefault(); // Impede o envio do formulário
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
  });
  
  // Inicializar calendário
  renderCalendar(currentYear, currentMonth);