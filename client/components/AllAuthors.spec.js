/* global describe beforeEach it */

import { expect } from "chai";
import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AllAuthors } from "./AllAuthors";

const adapter = new Adapter();
enzyme.configure({ adapter });

describe("AllAuthors", () => {
  let wrapper;

  describe("renders one AuthorPreview", () => {
    beforeEach(() => {
      let author = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe"
        }
      ];
      wrapper = shallow(<AllAuthors authors={author} />);
    });

    it("renders a AuthorPreview component", () => {
      expect(wrapper.text()).to.equal("<AuthorPreview />");
    });

    it("renders one AuthorPreview component with one author", () => {
      expect(wrapper.find("AuthorPreview").length).to.equal(1);
    });
  });

  describe("renders multiple AuthorPreview", () => {
    beforeEach(() => {
      let authors = [
        { id: 2, firstName: "Jane", lastName: "Doe" },
        { id: 3, firstName: "Billy", lastName: "Bob" },
        { id: 4, firstName: "Jessica", lastName: "Gold" }
      ];
      wrapper = shallow(<AllAuthors authors={authors} />);
    });

    it("renders multiple AuthorPreview components with multiple authors", () => {
      expect(wrapper.find("AuthorPreview").length).to.equal(3);
    });
  });
});
