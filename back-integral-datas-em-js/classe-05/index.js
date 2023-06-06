const taAberto = (data) => {


    if(data.getHours() >= 8 && data.getHours() <= 18 && data.getDay() > 0) {

       if(data.getDay() === 6) {
         if(data.getHours() >= 8 && data.getHours() <=12) {
            return console.log(true);
         } else {
            return console.log(false);
         }
        
       }
       return true;
    } else {
        return console.log(false);
    }
}

taAberto(new Date(2021,3,25,12));
taAberto(new Date(2021,3,26,12));
taAberto(new Date(2021,3,26,7,59));
taAberto(new Date(2021,3,24,9,30));