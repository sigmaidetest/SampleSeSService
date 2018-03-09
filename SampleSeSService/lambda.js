let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {


	ses.sendEmail({
		Destination: {
			ToAddresses: ['randikanavagamuwa@gmail.com'],
			CcAddresses: ['randikanavagamuwa@gmail.com', 'randika@adroitlogic.com'],
			BccAddresses: ['randikanavagamuwa@gmail.com', 'randika@adroitlogic.com']
		},
		Message: {
			Body: {
				Text: {
					Data: 'Sample SES Service body'
				}
			},
			Subject: {
				Data: 'Sample SES Service'
			}
		},
		Source: 'randika@adroitlogic.com',
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});



	callback(null, 'Successfully executed');
}