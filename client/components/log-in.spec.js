import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'
import AuthForm from './auth-form'

const adapter = new Adapter()
enzyme.configure({ adapter })


describe('AuthForm', () => {
  let root;
  beforeEach('render the root', () => { root = shallow(<AuthForm />) })

  it('shows a login form', () => {
    expect(root.find('input[name="email"]')).to.have.length(1)
    expect(root.find('input[name="password"]')).to.have.length(1)
  })

  it('shows a password field', () => {
    const password = root.find('input[name="password"]')
    expect(password).to.have.length(1)
    expect(password.at(0)).to.have.attr('type').equals('password')
  })

  it('has a login button', () => {
    const submit = root.find('input[type="submit"]')
    expect(submit).to.have.length(1)
  })

  describe('when submitted', () => {
    const login = spy()
    const submitEvent = {
      preventDefault: spy(),
      target: {
        username: { value: 'happy@example.com' },
        password: { value: '123' },
      }
    }

    beforeEach('submit', () => {
      login.reset()
      submitEvent.preventDefault.reset()
      root.simulate('submit', submitEvent)
    })

    it('calls props.login with credentials', () => {
      expect(login).to.have.been.calledWith(
        submitEvent.target.username.value,
        submitEvent.target.password.value,
      )
    })
  })
})

// Invariant Violation: ReactShallowRenderer render(): Shallow rendering works only with custom components, but the provided element type was `undefined`