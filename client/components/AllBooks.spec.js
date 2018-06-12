/* global describe beforeEach it */

import { expect } from "chai";
import React from "react";
import { Link } from "react-router-dom";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AllBooks } from "./AllBooks";

const adapter = new Adapter();
enzyme.configure({ adapter });

describe("AllBooks", () => {
  let wrapper;

  describe("renders one BookPreview", () => {
    beforeEach(() => {
      let books = [{ id: 1, genre: "Horror" }];
      wrapper = shallow(<AllBooks books={books} />);
    });

    it("renders a BookPreview component", () => {
      expect(wrapper.text()).to.equal("<BookPreview />");
    });

    it("renders one BookPreview component with one book", () => {
      expect(wrapper.find("BookPreview").length).to.equal(1);
    });
  });

  describe("renders multiple BookPreview", () => {
    beforeEach(() => {
      let books = [
        { id: 2, genre: "Fantasy" },
        { id: 3, genre: "Action" },
        { id: 4, genre: "Drama" }
      ];
      wrapper = shallow(<AllBooks books={books} />);
    });

    it("renders multiple BookPreview components with multiple books", () => {
      expect(wrapper.find("BookPreview").length).to.equal(3);
    });
  });
});
