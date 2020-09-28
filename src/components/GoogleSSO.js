/* global gapi */
import React from 'react';

var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

class GoogleSSO extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        document.body.appendChild(script);
    }

    initClient = () => {
        {
            // Retrieve the discovery document for version 3 of Google Drive API.
            // In practice, your app can retrieve one or more discovery documents.
            var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

            // Initialize the gapi.client object, which app uses to make API requests.
            // Get API key and client ID from API Console.
            // 'scope' field specifies space-delimited list of access scopes.
            gapi.client.init({
                'apiKey': 'AIzaSyCPN4HXCPIFRq-FeJPHKAkxhEymjCp8A3g',
                'clientId': '1008276052670-hs7djrmufj7numtkgflt5k7131nk0ms7.apps.googleusercontent.com',
                'discoveryDocs': [discoveryUrl],
                'scope': SCOPE
            }).then(function () {
                GoogleAuth = gapi.auth2.getAuthInstance();
                var user = GoogleAuth.currentUser.get();
                var isAuthorized = user.hasGrantedScopes(SCOPE);
                console.log(GoogleAuth);

            });
        }
    }

    initiateSignIn = () => {
        gapi.load('client:auth2', this.initClient);
    }

    render() {
        return (
            <button onClick={this.initiateSignIn}>Google SignIn</button>
        );
    }

}

export default GoogleSSO;