const taAberto = (data) => {
    if(data.getHours() >= 8 && data.getHours() < 18) {
        console.log(true);
    } else {
        return console.log(false);
    }
}

taAberto(new Date(2015,1,1,12));
taAberto(new Date(2015,1,1,2));