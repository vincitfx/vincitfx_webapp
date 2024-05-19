import React, { Component } from 'react';

class AllAPIs extends Component {

    webapiUrl = 'https://vincitfx-web-api-a2d39a85e841.herokuapp.com/api/';

    sendRecoveryPassoword = (email) => {
        const response = fetch( this.webapiUrl + 'account/sendemail/' + email, {
            method: 'GET'
        });

        return response;
    }

    canLogin = (logindata) => {
        const response = fetch( this.webapiUrl + 'account/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(logindata)
        });

        return response;
    }
    

    checkEmailExist = (email) => {
        const response = fetch( this.webapiUrl + 'account/checkemailexist/' + email, {
            method: 'GET'
        });

        return response;
    }

    signUp = (userData) => {
        const response = fetch( this.webapiUrl + 'account/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return response;
    }

    addCallBackUser = (userData)=> {
        const response = fetch( this.webapiUrl + 'callbackuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return response;
    };

    render() {
        return null;
    }
}

export default AllAPIs;
