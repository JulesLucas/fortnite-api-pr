var options;
const fetch = require('node-fetch')

class Client {
    constructor(keyAPI) {
        if (!keyAPI) {
            throw new Error('You must enter a Fortnite Tracker API key');
        }

        this.keyAPI = keyAPI;

        options = {
            headers: {
                'TRN-Api-Key': this.keyAPI
            }
        };
    }

    _request(link) {
        return fetch(link, {headers: options.headers}).then(reponse => {
            if (!reponse.ok) return Promise.reject(reponse.statusText);

            return reponse.json();
        }).catch(error => {return error});
    }

    async getPowerRanking(username, platform, region) {
        return this._request(`https://api.fortnitetracker.com/v1/powerrankings/${platform}/${region}/${encodeURI(username)}`).then(reponse => {
            if (reponse == 'Not Found') return `No data for this players (${username})`
            else return reponse
        })
    }
}

module.exports = Client;
