/* global gapi */
import React from 'react';

var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

class GoogleSSO extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 'googleData': null }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        script.onload = "this.onload=function(){};this.initiateSignIn()"
        script.onreadystatechange = "if (this.readyState === 'complete') this.onload()"
        document.body.appendChild(script);
    }

    initClient = () => {
        const updateSigninStatus = () => {
            this.setSigninStatus();
        }
        var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
        gapi.client.init({
            'apiKey': 'AIzaSyCPN4HXCPIFRq-FeJPHKAkxhEymjCp8A3g',
            'clientId': '1008276052670-kpvq523j2009g7016lsql3s0t1kvhkl7.apps.googleusercontent.com',
            'discoveryDocs': [discoveryUrl],
            'scope': SCOPE
        }).then(function () {
            GoogleAuth = gapi.auth2.getAuthInstance();
            GoogleAuth.signIn();
            // Listen for sign-in state changes.
            GoogleAuth.isSignedIn.listen(updateSigninStatus);
            // Handle initial sign-in state. (Determine if user is already signed in.)
        });
    }

    setSigninStatus() {
        GoogleAuth = gapi.auth2.getAuthInstance();
        var user = GoogleAuth.currentUser.get();
        if(!user)
            GoogleAuth.signIn();
        var isAuthorized = user.hasGrantedScopes(SCOPE);
        console.log('GoogleAuth.isAuthorized.get()', isAuthorized);
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