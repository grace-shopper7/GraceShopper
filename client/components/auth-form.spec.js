import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import AuthForm from './auth-form'


describe('AuthForm', () => {
  let testform;
  beforeEach('render the root', () => { testform = shallow(<AuthForm />) })

  it('login form has an email field', () => {
    const email = testform.find('input[name="email"]')
    expect(email).to.have.length(1)

  })

  it('login form has a password field', () => {
    const password = testform.find('input[name="password"]')
    expect(password).to.have.length(1)
  })

  it('login form has a submit button', () => {
    const submit = testform.find('button[type="submit"]')
    expect(submit).to.have.length(1)
  })
})