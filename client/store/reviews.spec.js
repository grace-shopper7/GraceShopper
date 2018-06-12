/* global describe beforeEach afterEach it */

import { expect } from "chai";
import { gotUserReviews, addedReview } from "./reviews";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("Reviews thunk creators", () => {
  let store;
  let mockAxios;

  const initialState = { reviews: [] };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });

  describe("reviews", () => {
    it("eventually dispatches the GET ALL USER REVIEWS action", () => {
      const fakeReviews = [
        { rating: "1", text: "Could've been better!" },
        { rating: "5", text: "Awesome book, buy again!" },
        { rating: "3", text: "It's a book. You read it." }
      ];
      mockAxios.onGet("/api/reviews").replyOnce(200, fakeReviews);
      return store.dispatch(gotUserReviews()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal("GET_ALL_USER_REVIEWS");
        expect(actions[0].reviews).to.be.deep.equal(fakeReviews);
      });
    });

    it("eventually dispatches the ADD REVIEW action", () => {
      const fakeReview = { rating: "5", text: "So wow, much good!!!" };
      mockAxios.onPost("/api/reviews").replyOnce(200, fakeReview);
      return store.dispatch(addedReview()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal("ADD_REVIEW");
        expect(actions[0].review).to.be.deep.equal(fakeReview);
      });
    });
  });
});
