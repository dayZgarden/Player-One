function convertDate(date) {
    if(date){
    let newDate = date?.replaceAll('-',' ').split(' ')
    console.log(newDate)
    if(newDate[1] === '01'){newDate[1] = 'Jan'}if(newDate[1] === '02'){newDate[1] = 'Feb'}if(newDate[1] === '03'){newDate[1] = 'Mar'}if(newDate[1] === '04'){  newDate[1] = 'Apr'}if(newDate[1] === '05'){newDate[1] = 'May'}
    if(newDate[1] === '06'){
      newDate[1] = 'Jun'
    }
    if(newDate[1] === '07'){
      newDate[1] = 'Jul'
    }
    if(newDate[1] === '08'){
      newDate[1] = 'Aug'
    }
    if(newDate[1] === '09'){
      newDate[1] = 'Sep'
    }
    if(newDate[1] === '10'){
      newDate[1] = 'Oct'
    }
    if(newDate[1] === '11'){
      newDate[1] = 'Nov'
    }
    if(newDate[1] === '12'){
      newDate[1] = 'Dec'
    }
    return newDate[1] + ' ' + newDate[2] + ', ' + newDate[0]
  }
  }

    export default convertDate;