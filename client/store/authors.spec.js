/* global describe beforeEach afterEach it */

import { expect } from "chai";
import { gotAuthors } from "./authors";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("Authors thunk creators", () => {
  let store;
  let mockAxios;

  const initialState = { books: [] };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });

  describe("authors", () => {
    it("eventually dispatches the GET ALL AUTHORS action", () => {
      const fakeAuthors = [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Doe" },
        { firstName: "Billy", lastName: "Bob" }
      ];
      mockAxios.onGet("/api/authors").replyOnce(200, fakeAuthors);
      return store.dispatch(gotAuthors()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal("GET_ALL_AUTHORS");
        expect(actions[0].authors).to.be.deep.equal(fakeAuthors);
      });
    });
  });
});
