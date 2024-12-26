

const names = ["Guti", "Cristina", "Miguel", "Ana"];

createFrame(names);


function createFrame(goodGuys) {

 let maxString = goodGuys[0];

 for (let i = 0; i < goodGuys.length; i++){
    
    if (maxString.length<goodGuys[i].length) {
         maxString = goodGuys[i];
        }    
    }
    const maxLength = maxString.length;
    
    
    const primeraLinea ="*".padEnd(maxLength+4, "*")+"\n";
    let cuerpo="";
    for(let i = 0; i<goodGuys.length; i++){
        
        cuerpo+="* " + goodGuys[i].padEnd(maxLength, " ") + " *\n";        
    }

    const ultimaLinea = ("*".padEnd(maxLength+4, "*")+"\n");

    return `${primeraLinea}${cuerpo}${ultimaLinea}`
}


console.log(createFrame(names));

