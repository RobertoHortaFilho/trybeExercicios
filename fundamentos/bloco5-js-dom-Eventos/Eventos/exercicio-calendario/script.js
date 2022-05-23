function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let fridayArray = [4,11,18,25]

const ulDays = document.getElementById('days')

for (let day of dezDaysList){
  const li = document.createElement('li')
  li.className = 'day'
  li.innerText = day
  if (day == 24 || day == 25 || day == 31){
    li.classList.add('holiday')
  }
  if (fridayArray.includes(day)){
    li.classList.add('friday')
  }

  li.addEventListener('click', (event) => {
    const ativado = document.getElementsByClassName('selected')[0]
    if (ativado != undefined){
      event.target.style.backgroundColor = ativado.style.backgroundColor
    }
  })

  ulDays.appendChild(li)
}

//create btn
const btnContainer = document.querySelector('.buttons-container')
const btnHoliday = document.createElement('button')
btnHoliday.id = 'btn-holiday'
btnHoliday.innerText = 'Feriados'

btnContainer.appendChild(btnHoliday)

//inverter cores holiday "rgb(238,238,238)"

let switchColors = false

btnHoliday.addEventListener('click', (event) => {
  const holidays = document.getElementsByClassName('holiday')
  if (switchColors){
    for(let h of holidays){
      h.style.backgroundColor = "rgb(238,238,238)"
    }
    switchColors = false
  }else{
    for(let h of holidays){
      h.style.backgroundColor = 'green'
    }
    switchColors = true
  }
})

const bntFriday = document.createElement('button')
bntFriday.innerText = 'sexta'
bntFriday.id = 'btn-friday'

btnContainer.appendChild(bntFriday)

let switchFriday = false
bntFriday.addEventListener('click', (event) => {
  const fridays = document.getElementsByClassName('friday')
  if (switchFriday){
    for (let i in fridays){
      fridays[i].innerText = fridayArray[i]
    }

    switchFriday = false
  }else{
    for (let i in fridays){
      fridays[i].innerText = 'Sexta-feira'
    }
    switchFriday = true
  }
})


//aumentar os dias
const dias = document.getElementsByClassName('day')

for (let d of dias){
  d.addEventListener('mouseover',(event) => {
    event.target.style.transform = "scale(1.5)"
  })
  d.addEventListener('mouseleave',(event) => {
    event.target.style.transform = "scale(1)"
  })
}


//adicionando tasks

//id="task-input" <button id="btn-add" <ul class="task-list">

const btnAdd = document.getElementById('btn-add')
btnAdd.addEventListener('click', (event) => {
  const taskInput = document.getElementById('task-input')
  const task = taskInput.value.trim() + "; "
  taskInput.value = ''
  
  const taskItem = document.createElement('span')
  taskItem.innerText = task
  taskItem.classList = 'task'

  taskItem.addEventListener('click',(event)=>{
    if (event.target.className.includes('selected')){
      if (event.target.className.includes('task'))
      event.target.classList.remove('selected')
      event.target.style.color = '#00000060'
    }else{
      if (event.target.className.includes('task'))
      event.target.classList.add('selected')
      event.target.style.color = '#000'
    }
  })

  document.getElementsByClassName('my-tasks')[0].appendChild(taskItem)

  const ColorInput = document.createElement('input')
  ColorInput.type = 'text'
  ColorInput.placeholder = 'Color (red, green ...)'
  ColorInput.addEventListener('keyup', (event) => {
    const color = event.target.value.trim()
    if (color == ''){
      taskItem.style.backgroundColor = '#eee'
      event.target.style.backgroundColor = 'white'
    }else{
      taskItem.style.backgroundColor = color
      event.target.style.backgroundColor = color
    }
  })
  


  taskItem.appendChild(ColorInput)
})
