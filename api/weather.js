var cheerio = require('cheerio')
var request = require('request')

module.exports = function(req, res) {
    var status = req.params.status
    var url = 'http://www.cwb.gov.tw/V7/forecast/f_index.htm'

    switch(status) {
        case '1':
            url = 'http://www.cwb.gov.tw/V7/forecast/f_index.htm'
            break;
        case '2':
            url = 'http://www.cwb.gov.tw/V7/forecast/f_index2.htm'
            break;
        case '3':
            url = 'http://www.cwb.gov.tw/V7/forecast/f_index3.htm'
            break;
    }

    var data = []

    request.post(url, function(err, response, body) {
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

                    data.push({
                        id : id,
                        city: city,
                        temperature: temperature,
                        rainProbability: rainProbability,
                        weather: weather,
                        weatherImg: weatherImg
                    })
    			}
    		})
    	})

        res.json(data)
    })
}
