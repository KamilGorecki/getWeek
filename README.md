# getWeek

Get week(dates array) or weeks(week array) of a specific year.

Be carreful!

1. 1st week of a year starts from sunday(last sunday of Dec or first sunday of Jan).
- if 1st of Jan is < Thursday => last Sun of Dec.
- else => first Sun of Jan.

2. new Date(<empty>) gives a date 'now' specific for a timezone of a server. 
3. new Date(2020,0,1) without timestamp => 2020/12/31 T23:00:00:00 .toLocalDateString() => 2020/1/1
