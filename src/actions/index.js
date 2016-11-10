import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ADMIN, AUTH_ERROR, UI_MESSAGE} from './types';
//API ROOT
const ROOT_URL = 'localhost:8080/api';

export function signinUserNew(email,password) {
  return function(dispatch) {
    console.log('NEW FUNC ');
    //const response = await axios.post(`${ROOT_URL}/auth/login`, { email,password });
    //console.log(response);
  }
}

//sends an error to be displayed via redux
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signinUser(email,password) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/login`, { email,password })
      .then( response => {
        //console.log('data from request: ' , response.data);
        //if request is good,
        //--we need to update state to indicate user is auth'd
        dispatch({type: AUTH_USER});
        dispatch({
          type: SAVE_USER,
          payload: response.data
        });

        //save localStorage as well as IDB

        //--save JWT token
        localStorage.setItem('token', response.data.token);
        //save personal info - for future - profile page etc
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('firstName', response.data.forename);
        localStorage.setItem('lastName', response.data.surname);
        localStorage.setItem('lastName', response.data.surname);

        //putting checks in for IDB
        if (window.indexedDB) {
          //IDB save
          var db = new Dexie('Stir');
          db.version(1).stores({
            posts: '_id, title, user_id, text, offline',
            users: 'user_id, email, firstName, lastName, token'
          });

          // Open the database
        	// db.open().catch(function(error) {
        	// 	alert('Uh oh : ' + error);
        	// });
          //IDB add
        	db.users.add({
        		user_id: response.data.user_id,
        		email: response.data.email,
            firstName: response.data.forename,
            lastName: response.data.surname,
            token: response.data.token
        	});
        }

        //--redirect to '/posts'
        //stops spinner
        dispatch(endLoading());
        browserHistory.push('/posts/create');

      } )
      .catch( (err) => {
        //if request is bad
        //--show error to user
      //  console.log('error from sign in', err);
        if (err.response.status === 503) {
          dispatch(endLoading());
          dispatch(authError('No internet connection :('));
        } else {
          dispatch(endLoading());
          dispatch(authError('Incorrect Login Information'));
        }
        //  console.log(err.response.status);
      } );
  }
}
