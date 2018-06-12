/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {gotBooks} from './books'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Books thunk creators', () => {
  let store
  let mockAxios

  const initialState = {books: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('books', () => {
    it('eventually dispatches the GET ALL BOOKS action', () => {
      const fakeBooks = [{genre: 'Mystery'}, {genre: 'Drama'}, {genre: 'Thriller'}]
      mockAxios.onGet('/api/books').replyOnce(200, fakeBooks)
      return store.dispatch(gotBooks())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_ALL_BOOKS')
          expect(actions[0].books).to.be.deep.equal(fakeBooks)
        })
    })
  })
})
