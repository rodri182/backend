const Fechas = require("./controladorFechas");
const moment = require("moment");
const birthday = moment ("16/05/1996", "DD/MM/YYYY");
const obj = new Fechas (birthday);

console.log (`TODAY ${obj.getToday()}`);
console.log (`YEARS ${obj.getAllYears()}`);
console.log (`DAYS ${obj.getAllDays()}`);
console.log (`TIME ${obj.getTimeDifferences("days")}`);