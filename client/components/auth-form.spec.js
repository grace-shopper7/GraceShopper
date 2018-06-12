import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import { spy } from 'sinon'
import AuthForm from './auth-form'
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('AuthForm', () => {
  let testform;
  beforeEach('the login form', () => { testform = shallow(<AuthForm />) })

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

describe('submitt functionality', () => {
  let testform2;
  const loginSpy = spy();
  const submitEvent = {
    preventDefault: spy(),
    target: {
      username: { value: 'happy@fullstack.com' },
      password: { value: '123' },
    }
  }

  beforeEach('submit', () => {
    testform2 = shallow(<AuthForm handleSubmit={loginSpy} />)
  })
  it('calls login function', () => {
    testform2.find('form').simulate('submit')
    expect(loginSpy.called).to.be.true;
  })
})
