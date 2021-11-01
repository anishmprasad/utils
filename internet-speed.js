/**
    A small Util to calulate internet speed by using websocket 
    powered by measurementlab.net
*/

import ndt7 from '@m-lab/ndt7';

ndt7.test(
			{
				userAcceptedDataPolicy: true,
				uploadworkerfile: "/ndt7-upload-worker.min.js", 
				downloadworkerfile: "/ndt7-download-worker.min.js"
			},
			{
			  serverChosen: function (server) {
				  // console.log('serverChosen',server)
			  },
			  downloadStart: (data) => {
				  // console.log('downloadStart',data)
			  },
			  downloadMeasurement: (data) => {
				if(data?.Source === 'client'){
					// console.log('downloadMeasurement',data)
					console.log(data?.Data?.MeanClientMbps?.toFixed(2))
				}
			  },
			  downloadComplete: (data) => {
				  // console.log('downloadComplete',data)
			  },
			  uploadStart: (data) => {
				   // console.log('uploadStart',data)
			  },
			  uploadMeasurement: function(data) {
				  if(data.Source === 'client'){
					 // console.log('uploadMeasurement',data)
            				console.log(data?.Data?.MeanClientMbps?.toFixed(2))
				  }
			  },
			  uploadComplete: function (data) {
				  // console.log('uploadComplete',data)
			  },
			},
		).then(() => {}) // exit




