describe("도서 상세 페이지 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-testid="bookItem"]', { timeout: 10000 }).first().click();
  });

  it("도서 상세 페이지가 정상적으로 로드되어야 한다", () => {
    cy.url().should("include", "/book/");
    cy.get('[data-testid="bookDetail"]').should("exist");
  });

  it("도서 정보가 올바르게 표시되어야 한다", () => {
    cy.get('[data-testid="bookDetail"]').within(() => {
      cy.get('[data-testid="bookImage"]').should("exist");
      cy.get('[data-testid="bookImage"] img').should("have.attr", "src");

      cy.get('[data-testid="bookTitle"]').should("exist").and("not.be.empty");

      cy.get('[data-testid="bookSubTitle"]')
        .should("exist")
        .and("not.be.empty");

      cy.get('[data-testid="bookAuthor"]').should("exist").and("not.be.empty");

      cy.get('[data-testid="bookPublisher"]')
        .should("exist")
        .and("not.be.empty");
    });

    cy.get('[data-testid="bookDescription"]')
      .should("exist")
      .and("not.be.empty");
  });

  it("로딩 상태가 올바르게 표시되어야 한다", () => {
    cy.visit("/book/2");

    cy.get('[data-testid="bookDetail"]', { timeout: 10000 }).should("exist");
  });

  it("존재하지 않는 도서 ID로 접근시 에러 처리가 되어야 한다", () => {
    cy.visit("/book/404");

    cy.get('[data-testid="notFound"]', { timeout: 10000 }).should("exist");
  });
});
