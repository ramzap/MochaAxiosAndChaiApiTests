const axios = require('axios').default;

export async function createClient(){
 const clientCreateApi = '/api/clients';
 const timestamp = new Date().toLocaleString();

 const clientData = {
    'organization': `Name of organization ${timestamp}`,
    'currency': null,
    'primaryContact': {
        'email': 'soculyke@mailinator.com',
        'firstName': 'Contact name',
        'lastName': 'Surname',
        'homePhone': null,
        'mobilePhone': null
    },
    'contacts': [],
    'primaryCountry': null,
    'primaryCity': null,
    'primaryPostalCode': null,
    'primaryProvince': null,
    'primaryStreet1': null,
    'primaryStreet2': null,
    'secondaryCity': null,
    'secondaryPostalCode': null,
    'secondaryProvince': null,
    'secondaryStreet1': null,
    'secondaryStreet2': null,
    'workPhone': null,
    'fax': null,
    'internalNotes': null
};

 try{
     return axios.post(clientCreateApi, clientData);
 }catch(error){
     console.log(error.message);
 }
}