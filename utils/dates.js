const getHumanReadableDate = (isoDate) => {
    var mainSplit = isoDate.split(' ')
    var date = mainSplit.shift().split('-').reverse().join('/')
    var hour = mainSplit.shift().split(':').slice(0,2).join(':')

    return date.concat(' às ', hour)
}

export { getHumanReadableDate }
