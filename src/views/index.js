import axios from 'axios';

/**
 * Returns the balance of an address using BlockCypher's test faucet
 * @param  {string} address [Address of the query]
 * @return {JSON}         [JSON containing the unconfirmed_balance and final_balance]
 */
async function nlp(sentence) {
	try {
		let data = {'s': sentence}
		console.log("in nlp")
		let result = await axios.post(`https://52f43078.ngrok.io/nlp`, data)
		console.log(result)
		return result.data
	} catch (error) {
		console.log('error', error) // catch errors
		return {
			errors: error
		}

	}
}
async function nlp_zh(sentence) {
	try {
		let data = {'s': sentence}
		console.log("in nlp")
		let result = await axios.post(`https://52f43078.ngrok.io/nlp_zh`, data)
		console.log(result)
		return result.data
	} catch (error) {
		console.log('error', error) // catch errors
		return {
			errors: error
		}

	}
}


export {
	nlp,
	nlp_zh
}