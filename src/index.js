import { twitterShort, twitterLong } from '../index.js'
import moment from 'moment'

let date = new moment("20111031", "YYYYMMDD")

console.log(twitterShort(date))
console.log(twitterLong(date))

date = new moment().startOf('day')

console.log(twitterShort(date))
console.log(twitterLong(date))

date = new moment().startOf('hour')

console.log(twitterShort(date))
console.log(twitterLong(date))