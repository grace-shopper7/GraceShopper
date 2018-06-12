const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Book = db.model('book')


describe('Book routes', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/books', () => {

  it('responds with an array via JSON', () => {
    return request(app)
    .get('/api/books')
    .expect(200)
    .expect((res) => {
      expect(res.body).to.be.an.instanceOf(Array);
      expect(res.body).to.have.length(0)
    })
  })

  it('returns an article if there is one in the DB', () => {
    let book = Book.build({
      title: 'Test Title',
      publicationDate: new Date(),
      publisher: 'Test Publisher',
      Quantity: 4,
      price: 5,
      genre: 'Comedy',
      condition: 'new',
      description: 'Test Description'
    })

    return book.save().then(() => {
      return request(app)
      .get('/api/books')
      .expect(200)
      .expect((res) => {
        expect(res.body).to.be.an.instanceOf(Array);
        expect(res.body[0].title).to.equal('Test Title')
      })
    })


  })






  })
})
