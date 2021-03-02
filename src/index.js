const cros = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cros());

app.get('/:cep', async(request, response)=>{	
	const { cep } = request.params;
	console.log('https://ws.apicep.com/cep/'+cep+'.json');
	try{
		const { data } = await axios('https://ws.apicep.com/cep/'+cep+'.json');
		
		if(data.status == 400){
			return response.status(400).json(data);
		}		
		return response.status(200).json(data);
	}catch(error){
		console.error(error);
	}
});

app.listen(3333);