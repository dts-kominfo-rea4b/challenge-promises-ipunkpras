const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// // TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

const promiseOutput = async (emotion) => {
  let IXX = await promiseTheaterIXX();
  let VGC = await promiseTheaterVGC();
  
 console.log(IXX);
  
  return new Promise((res, rej)=>{
    if(IXX !== undefined || VGC !==undefined){
      let countIXX = IXX.filter((hasilSetelahMenonton)=>hasilSetelahMenonton.hasil == emotion).length;
      let countVGC = VGC.filter((hasilSetelahMenonton)=>hasilSetelahMenonton.hasil == emotion).length;
      
      res(countIXX + countVGC);
    }else{
      rej("kosong");
    }
  })
};

//Masih belum running. Tolong di bantu jelaskan solusinya cc ... Thx

