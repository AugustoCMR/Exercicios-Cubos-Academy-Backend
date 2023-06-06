const verificaFloat = (id) => {
   
    if(id.includes(".")) {
       return true;
    } 

    return false;
}

module.exports = {
    verificaFloat
}