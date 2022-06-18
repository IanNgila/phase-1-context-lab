function createEmployeeRecord ([firstName, familyName , title , payPerHour]) { 
    let empObj = {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerHour,
        timeInEvents : [],
        timeOutEvents: [],
    }
    return empObj
}
function createEmployeeRecords (recordsArray){
    return recordsArray.map(createEmployeeRecord)
}

const createTimeInEvent = function (datestamp){
    let [date, hour] = datestamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return this  
};
const createTimeOutEvent = function (datestamp){
    let [date, hour] = datestamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
    return this  
};

const hoursWorkedOnDate = function (date){
    const inEvent = this.timeInEvents.find(inEvent=>inEvent.date === date);
    const outEvent = this.timeOutEvents.find(outEvent=>outEvent.date === date);
            return ((outEvent.hour - inEvent.hour)/100)
};

const wagesEarnedOnDate = function (date){
    return hoursWorkedOnDate.apply(this, [date])* this.payPerHour
};




function calculatePayroll(recordsArray){
   let payroll = recordsArray.reduce((acc, cur)=> {
       return acc + allWagesFor.call(cur)
   }, 0)
   return payroll
    }

function findEmployeeByFirstName(srcArray, firstName){
    let emp = srcArray.find((rec) => rec.firstName === firstName)
    return emp;
}



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

