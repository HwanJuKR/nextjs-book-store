describe("메인 페이지 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("홈페이지가 정상적으로 로드되어야 한다", () => {
    cy.get("h1").should("contain", "📚 BOOK STORE");
  });

  it("추천 도서 목록이 표시되어야 한다", () => {
    cy.contains("지금 추천하는 도서").should("exist");
  });

  it("모든 도서 목록이 표시되어야 한다", () => {
    cy.contains("모든 도서").should("exist");
  });

  it("도서 목록이 로드되어야 한다", () => {
    cy.get('[data-testid="bookItem"]', { timeout: 10000 }).should(
      "have.length.greaterThan",
      0
    );

    cy.get('[data-testid="bookItem"]')
      .first()
      .within(() => {
        cy.get("img").should("exist");
        cy.get('[data-testid="bookTitle"]').should("exist");
      });
  });

  it("무한 스크롤이 작동해야 한다", () => {
    cy.get('[data-testid="bookItem"]', { timeout: 10000 }).should(
      "have.length.greaterThan",
      0
    );

    cy.get('[data-testid="bookItem"]').then((book) => {
      const initialCount = book.length;

      cy.scrollTo("bottom");

      cy.get('[data-testid="bookItem"]', { timeout: 10000 }).should(
        "have.length.greaterThan",
        initialCount
      );
    });
  });

  it("헤더가 표시되어야 한다", () => {
    cy.get('[data-testid="header"]').should("exist");
    cy.get('[data-testid="logo"]').should("exist");
    cy.get('[data-testid="searchInput"]').should("exist");
  });

  it("푸터가 표시되어야 한다", () => {
    cy.get('[data-testid="footer"]').should("exist");
  });
});
