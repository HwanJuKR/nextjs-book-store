describe("검색 페이지 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("검색 입력 필드가 존재해야 한다", () => {
    cy.get('[data-testid="searchInput"]').should("exist");
    cy.get('[data-testid="searchInput"]').should("have.attr", "placeholder");
  });

  it("검색어 입력 시 검색 페이지로 이동해야 한다", () => {
    const searchText = "자바스크립트";

    cy.get('[data-testid="searchInput"]').type(searchText);
    cy.get('[data-testid="searchInput"]').type("{enter}");

    cy.url().should("include", "/search");
    cy.url().should("include", encodeURIComponent(searchText));
  });

  it("검색 결과가 올바르게 표시되어야 한다", () => {
    cy.visit("/search?q=" + encodeURIComponent("자바스크립트"));

    cy.get('[data-testid="searchResult"]').should("exist");

    cy.get('[data-testid="bookItem"]').should("have.length.greaterThan", 0);

    cy.get('[data-testid="bookItem"]')
      .first()
      .within(() => {
        cy.get("img").should("exist");
        cy.get('[data-testid="bookTitle"]').should("exist");
      });
  });

  it("검색 결과가 없을 때 적절한 메시지가 표시되어야 한다", () => {
    cy.visit("/search?q=" + encodeURIComponent("테스트"));

    cy.get('[data-testid="noResult"]').should("exist");
    cy.get('[data-testid="noResult"]').should(
      "contain",
      "검색 결과가 없습니다"
    );
  });

  it("검색 결과 항목 클릭 시 상세 페이지로 이동해야 한다", () => {
    cy.visit("/search?q=" + encodeURIComponent("자바스크립트"));

    cy.get('[data-testid="bookItem"]').first().click();

    cy.url().should("include", "/book/");
    cy.get('[data-testid="bookDetail"]').should("exist");
  });

  it("빈 검색어로 검색할 수 없어야 한다", () => {
    cy.get('[data-testid="searchInput"]').type("   ");
    cy.get('[data-testid="searchInput"]').type("{enter}");

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("검색 페이지에서 새로운 검색을 할 수 있어야 한다", () => {
    cy.visit("/search?q=" + encodeURIComponent("자바스크립트"));

    const newSearchText = "리액트";

    cy.get('[data-testid="searchInput"]').clear().type(newSearchText);
    cy.get('[data-testid="searchInput"]').type("{enter}");

    cy.url().should("include", encodeURIComponent(newSearchText));
    cy.get('[data-testid="searchResult"]').should("exist");
  });

  it("검색 페이지에서 홈으로 돌아갈 수 있어야 한다", () => {
    cy.visit("/search?q=" + encodeURIComponent("자바스크립트"));

    cy.get('[data-testid="logo"]').click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
