
var c3configs = {
config1 : function() {
	return {
		size: {
			  height: 500
			},
	    data: {
	    	x: 'x',
	    	xFormat: '%d-%m-%Y',
	        columns: [
	        ],
 	        type: 'bar',
	        names: {
	        },
	        labels: false
	    },
	    zoom: {
	        enabled: true
	    },
	    bar: {
	        width: {
	            ratio: 0.6 // this makes bar width 60% of length between ticks
	        }
	        // or
//	        width: 10 // this makes bar width 100px
	    },
	    axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%d-%m-%Y',
                  rotate: -90,
                  culling: true
              },
              height: 100
          },
          y : {
              tick: {
                  format: null
              }
          }
      }
	}
},
config2 : function() {
	return {
		size: {
			  height: 500
			},
	    data: {
	        columns: [
	        ],
 	        type: 'bar',
	        names: {
	        },
	        labels: false
	    },
	    zoom: {
	        enabled: true
	    },
	    bar: {
	        width: {
	            ratio: 0.6 // this makes bar width 60% of length between ticks
	        }
	        // or
//	        width: 10 // this makes bar width 100px
	    },
	    axis: {
          x: {
              type: 'category'
          },
          y : {
              tick: {
                  format: null
              }
          }
      }
	}
},
config3 : function() {
	return {
	    data: {
	        columns: [
	            ['data1', 400, 150],
	            ['data2', 200, 350],
	            ['data3', 300, 250]
	        ],
	        type: 'bar',
//	        groups: [
//	                 ['data1', 'data2']
//	                 ],
             names: {
                 data1: 'Jyväskylä',
                 data2: 'Tampere',
                 data3: 'Oulu'
             }
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: ['Nopeusrajoitukset', 'Tien leveys']
	        }
	    }
	}
}
}

module.exports = c3configs;