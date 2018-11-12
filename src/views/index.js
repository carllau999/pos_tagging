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
		let result = await axios.post(`https://taggingnlp.herokuapp.com/nlp`, data)
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
	nlp
}