// Declaracion de variables globales
var divListAsc = document.querySelector('#divListaAsc')
var divListDesc = document.querySelector('#divListaDesc')
var divCola = document.querySelector('#divCola')
var divPila = document.querySelector('#divPila')
var btnAddElement = document.getElementById('btn-AddElement')
var ElementList = []
var ElementListDesc = []

//Funciones
//Lista Ascedente
addElementListAsc = function () {
  divListAsc.innerHTML = `<h4>Estructura Lista Ascendente</h4>`
  var element = document.getElementById('element').value
  ElementList.push(element)
  ElementList.sort()
  for (var i = 0; i < ElementList.length; i++) {
    var element = document.getElementById('element').value
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(ElementList))
    li.innerHTML = `${ElementList[i]}`
    divListAsc.appendChild(li)
  }
}
//Lista Descendente
addElementListDesc = function () {
  divListaDesc.innerHTML = `<h4>Estructura Lista Descendente</h4>`
  var element = document.getElementById('element').value
  ElementListDesc.push(element)
  ElementListDesc.sort()
  ElementListDesc.reverse()
  for (var i = 0; i < ElementListDesc.length; i++) {
    var element = document.getElementById('element').value
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(ElementListDesc))
    li.innerHTML = `${ElementListDesc[i]}`
    divListaDesc.appendChild(li)
  }
}
//Pila
addElementPila = function () {
  var element = document.getElementById('element').value
  const li = document.createElement('li')
  li.innerHTML = `${element}`
  var ref = divPila.getElementsByTagName('li')[0]
  divPila.insertBefore(li, ref)
  return false
}

//Cola
addElementCola = function () {
  var element = document.getElementById('element').value
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(element))
  li.innerHTML = `${element}`
  divCola.appendChild(li)
}

//Funcion limpiar input
clearInput = function () {
  document.getElementById('element').value = ''
}

// Eventos
btnAddElement.addEventListener('click', addElementPila)
btnAddElement.addEventListener('click', addElementCola)
btnAddElement.addEventListener('click', addElementListAsc)
btnAddElement.addEventListener('click', addElementListDesc)
