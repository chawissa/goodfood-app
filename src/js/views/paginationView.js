import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkup() {
    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numOfPages);

    // Page 1 and there are other pages
    if (this._data.page === 1 && numOfPages > 1) {
      return "page 1, others";
    }

    // Last page
    if (this._data.page === numOfPages && numOfPages > 1) {
      return "last page";
    }

    // Other page
    if (this._data.page < numOfPages) {
      return "other page";
    }

    // Page 1 and there are no other pages
    return "only 1 page";
  }
}

export default new PaginationView();
