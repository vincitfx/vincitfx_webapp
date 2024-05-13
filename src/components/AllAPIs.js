import React, { Component } from 'react';

class AllAPIs extends Component {

    webapiUrl = 'https://localhost:7156/api/';

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
