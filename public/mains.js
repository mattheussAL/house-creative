function onOff(){
  document
  .querySelector('#modal')
  .classList 
  .toggle('hide')
  
  document
  .querySelector('body')
  .classList
  .toggle('hideScroll')

  document
  .querySelector('.modal')
  .classList
  .toggle('addScroll')
}

// Validação 

function checkFields(event){
  const valuesToCheck = [
    "title",
    "category",
    "img",
    "description",
    "url",
  ]

  const isEmpty = valuesToCheck.find(function( value ){

    const checkIfIsString = typeof event.target[ value ].value === "string"
    const checkIfIsEmpty = !event.target[ value ].value.trim()
    if(checkIfIsString && checkIfIsEmpty){
      return true
    }
  })


  if(isEmpty){
    //Caso aja erro pare a transferência de form
    event.preventDefault()
    alert("Preencha todos os Campos")
  }
}
