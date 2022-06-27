import { put } from "redux-saga/effects"
import { loginSuccess } from "../actionCreators/authenticateActions";
import qs from 'qs'
import { makereq, toaster } from "./utils";

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

export function* loginSaga({ payload }) {
  try {
    var data = qs.stringify({
      'email': payload.email,
      'password': payload.password,
      'deviceType': 'ios',
      'deviceToken': 'ddd'
    });

    const res = yield makereq('auth/login', 'post', data, headers)
    const { email, token, userType, _id } = (res.data)
    yield put(loginSuccess({
      email,
      token,
      userType,
      _id
    }))
    localStorage.setItem('userData', JSON.stringify(res.data))
    toaster('success', 'Logged In Successfully')
  }
  catch (error) {
    toaster('error', error.message)
    console.log(error.message)
  }
}

export function* signupSaga({ payload }) {

  try {
    var FormData = require('form-data')
    var data = new FormData()
    data.append('userName', payload.userName)
    data.append('password', payload.password)
    data.append('email', payload.email)
    data.append('userType', 'admin')
    data.append('deviceType', 'ios')
    data.append('deviceToken', 'tonek')
    data.append('loginType', 'normal')


    const res = yield makereq('auth/register', 'post', data, headers)
    console.log(res)
    const { email, token, userType, _id } = (res.data)
    yield put(loginSuccess({
      email,
      token,
      userType,
      _id
    }))
    localStorage.setItem('userData', JSON.stringify(res.data))
    toaster('success', 'Registered Successfully')
    toaster('success', 'Logged In Successfully')


  }
  catch (error) {
    console.log(error)
    toaster('error', error.data.message || error.message)
  }
}
