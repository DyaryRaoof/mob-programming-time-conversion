function timeConversion(s) {
    
    
    const timeArr = s.split(":");
    let time = 0;
    if(s.includes('PM')){
         if(timeArr[0] === '12'){
          timeArr[0] = '00';
      }
        time = parseInt(timeArr[0]) + 12;
        
        return `${time}:${timeArr[1]}:${timeArr[2].split('PM')[0]}`
    }else if(s.includes('AM')){
      
      if(timeArr[0] === '12'){
          timeArr[0] = '00';
      }
        const time =  `${timeArr[0]}:${timeArr[1]}:${timeArr[2].split('AM')[0]}`
        
        console.log(time);
        return time;
    }
}
