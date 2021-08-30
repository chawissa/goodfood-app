import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const previousButton = `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
       </button>
    `;

    const nextButton = `
      <button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;

    // Page 1 and there are other pages
    if (currentPage === 1 && numOfPages > 1) {
      return nextButton;
    }

    // Last page
    if (currentPage === numOfPages && numOfPages > 1) {
      return previousButton;
    }

    // Other page
    if (this._data.page < numOfPages) {
      return [previousButton, nextButton];
    }

    // Page 1 and there are no other pages
    return "";
  }
}

export default new PaginationView();
