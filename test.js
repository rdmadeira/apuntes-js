window.onload = function (){
    let myTitle = document.head.childNodes;
    console.log(myTitle)
//    myTitle.firstChild.nodeValue = 'My first page'
    const h1 = document.createElement('h1');
    const txtH1 = document.createTextNode('Interación Javascript con HTML');
    const par = document.createElement('p');
    // const txtPar = document.createTextNode('Apuntes generales de DOM - y propriedades y metodos para acceder a ellos, crear o borrar.')
    document.body.appendChild(h1);
    h1.appendChild(txtH1);
    document.body.appendChild(par);
    // par.appendChild(txtPar);
    
    const clasPar1 = document.createAttribute('class');
    clasPar1.value = 'par1'
    par.setAttributeNode(clasPar1);
    const listH = document.getElementsByTagName('h1');
    const listP = document.getElementsByClassName('par1');
    console.log(listH); console.log(listP); 
    par.innerHTML = `El valor de listH es ${listH}`;
    const nodeListOfText = ()=> {
        let listHead = document.head.childNodes;
        let array = [];
        for(i = 0; i < listHead.length; i++){
            listHead[i].nodeType == 3 ? array.push(listHead[i]) : array;
        }
        console.log(listHead)
        console.log(array)
    }
    nodeListOfText();
    
    /* ********************** *************************** *************** */
    
    const blueDiv =  document.getElementById('div1');
    blueDiv.addEventListener('click', function(){
        const este = this;
        este.innerHTML = `<h2>Este es el this: ${este.id} </h2>`;
        console.log(este);
    })
    blueDiv.width100 = function(){this.style.width = '100vw'; console.log(this);setTimeout(()=>{this.style.width = '80vw'},2000)}

    document.getElementById('btn-1').addEventListener('click', ()=>blueDiv.width100())
}