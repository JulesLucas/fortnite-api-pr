const fetch = require('node-fetch')
var options;

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
    /** 
    * Makes the request to the API
    * @private
    * @param {string} link URL endpoint of API
    * @returns {Promise<Object>}
    * @memberof Client
    */
    _request(link) {
        return fetch(link, {headers: options.headers}).then(reponse => {
            if (!reponse.ok) return Promise.reject(reponse.statusText);

            return reponse.json();
        }).catch(error => {return error});
    }

    async getPowerRanking(platform, region, epicgames) {
        return this._request(`https://api.fortnitetracker.com/v1/powerrankings/${platform}/${region}/${encodeURI(epicgames)}`).then(reponse => {
            if (reponse == 'Not Found') return new Error('The players were not found')
            else return reponse
        })
    }

    async getBRStats(platform, epicgames) {
        return this._request(`https://api.fortnitetracker.com/v1/profile/${platform}/${encodeURI(epicgames)}`).then(reponse => {
            if (reponse == 'Not Found') return new Error('The players were not found')
            else return reponse
        })
    }
}

module.exports = Client;
