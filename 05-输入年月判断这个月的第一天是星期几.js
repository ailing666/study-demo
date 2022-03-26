// 判断这个月有多少天
function getDayOfMonth (month, year) {
  switch (month) {
    case 2:
      // 闰年29天，非闰年28天
      return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    default:
      return 31
  }
}

function weekDay (year, month) {
  // 得到这年以前的总天数，先以每年都是365天算出总数，再加上闰年的天数(闰年是366天)，再减去不是闰年的天数(100的倍数能被4整除但不是闰年)，再加上自己
  let totalDay = (year - 1) * 365 + Math.floor((year - 1) / 4) + Math.floor((year - 1) / 400) - Math.floor((year - 1) / 100) + 1
  // 循环加上每个月的天数
  for (var i = 1; i < month; i++) {
    totalDay += getDayOfMonth(i, year)
  }
  // 0代表星期日，1234560
  var week = totalDay % 7
  return week
}