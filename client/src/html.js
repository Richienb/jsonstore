import React from 'react';
import App from './components/app';

const Html = () =>
	<html>
		<head>
			<title>jsonstore.io / Store your data just by sending us HTTP Requests</title>

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<link rel="icon" href="images/favicon.ico" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,700,700i" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
			<link rel="stylesheet" type="text/css" href="css/main.css" />
		</head>
		<body>
			<App />
			
			<script src="js/drift.js" />
		</body>
	</html>;

export default Html;
