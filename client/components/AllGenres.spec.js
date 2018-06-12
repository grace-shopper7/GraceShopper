/* global describe beforeEach it */

import { expect } from "chai";
import React from "react";
import { Link } from "react-router-dom";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AllGenres } from "./AllGenres";

const adapter = new Adapter();
enzyme.configure({ adapter });

describe("AllGenres", () => {
  let wrapper;

  describe("renders a Link", () => {
    beforeEach(() => {
      let resultArr = [];
      let books = [{ genre: "Horror" }];
      wrapper = shallow(<AllGenres books={books} />);
    });

    it("renders one Link with only one book", () => {
      expect(wrapper.find("Link").length).to.equal(1);
    });
  });

  describe("renders multiple Links for multiple books", () => {
    beforeEach(() => {
      let resultArr = [];
      let books = [
        { genre: "Horror" },
        { genre: "Fantasy" },
        { genre: "Romance" }
      ];
      wrapper = shallow(<AllGenres books={books} />);
    });

    it("renders more than one Link with multiple books", () => {
      expect(wrapper.find("Link").length).to.equal(3);
    });
  });
});
