/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllGenres} from './AllGenres'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllGenres', () => {
  let wrapper;

  beforeEach(() => {
    let resultArr = [];
    let books = [{genre: 'Horror'}];
    wrapper = shallow(<AllGenres books={books} />)
  })

    it('renders Link with genre name', () => {
    expect(wrapper.find('Link').text()).to.equal('Horror')
  })
})
