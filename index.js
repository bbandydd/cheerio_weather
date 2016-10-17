var cheerio = require('cheerio')
var request = require('request')

var url = 'http://www.cwb.gov.tw/V7/forecast/f_index3.htm'

request.post(url, function(err, res, body) {
	var $ = cheerio.load(body)

	var regions = ['NorthArea', 'CenterArea', 'EastArea', 'SouthArea', 'Archipelagoes']

	regions.map(function(region) {

		$('.' + region + ' tr').map(function(idx, ele) {
			if ($(ele).attr('id')) {
				var id = $(ele).attr('id')
				var city = $('#' + id + ' td:nth-child(1) a').text()
				var temperature = $('#' + id + ' td:nth-child(2) a').text()
				var rainProbability = $('#' + id + ' td:nth-child(3) a').text()
				var weather = $('#' + id + ' td:nth-child(4) .spic img').attr('title')
				var weatherImg = 'http://www.cwb.gov.tw' + $('#' + id + ' td:nth-child(4) .spic img').attr('src')

				console.log(city + ' ' + temperature + ' ' + rainProbability + ' ' + weather)
			}
		})
	})
})