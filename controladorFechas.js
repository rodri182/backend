let moment = require("moment");

class Fechas {
  constructor(birth){
    this.birthday = birth;
    this.today = moment();
  }

    getToday() { 
    return this.today.format("L");
  }
    
    getAllYears(){
    return this.today.diff(this.birthday, "years", true);
  }
    getAllDays(){
    return this.today.diff(this.birthday, "days", true);
  }
  getTimeDifferences(time){
    return this.today.diff(this.birthday, time, true);
  }
}

module.exports = Fechas;