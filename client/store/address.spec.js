/* global describe beforeEach afterEach it */

import { expect } from "chai";
import { gotAddress, addAddress, editAddress } from "./address";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("Address thunk creators", () => {
  let store;
  let mockAxios;

  const initialState = { address: {} };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });

  describe("address", () => {
    it("eventually dispatches the GET USER ADDRESS action", () => {
      const fakeAddress = {
        street: "123 St",
        city: "New York",
        state: "NY",
        zipcode: "10065"
      };
      mockAxios.onGet("/api/addresses/6").replyOnce(200, fakeAddress);
      return store.dispatch(gotAddress(6)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal("GET_USER_ADDRESS");
        expect(actions[0].address).to.be.deep.equal(fakeAddress);
      });
    });

    it("send a dispatch to add a new address", () => {
      const newAddress = {
        street: "321 Pl",
        city: "New York",
        state: "NY",
        zipcode: "10009"
      };
      mockAxios.onPost("/api/addresses/add/6").replyOnce(200, newAddress);
      return store.dispatch(addAddress(6, newAddress)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal("GET_USER_ADDRESS");
        expect(actions[0].address).to.be.deep.equal(newAddress);
      });
    });

    it("send a dispatch to edit an address", () => {
      const updatedAddress = {
        street: "600 Park Ave",
        city: "New York",
        state: "NY",
        zipcode: "10015"
      };
      mockAxios.onPut("/api/addresses/edit/6").replyOnce(200, updatedAddress);
      return store.dispatch(editAddress(6, updatedAddress)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal("GET_USER_ADDRESS");
        expect(actions[0].address).to.be.deep.equal(updatedAddress);
      });
    });
  });
});
