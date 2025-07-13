# Next.js 북스토어 프로젝트

이 프로젝트는 **Next.js 15**를 기반으로 생성된 온라인 북스토어 애플리케이션입니다.  
사용자는 추천 도서 확인, 모든 도서 목록 확인, 도서 검색, 상세 정보 조회를 통해 도서들을 탐색할 수 있으며,  
SSR(Server-Side Rendering)과 React Query를 활용한 효율적인 데이터 관리로 최적화된 사용자 경험을 제공합니다.

스켈레톤 UI 확인을 위한 1초 딜레이 코드가 적용되어 있습니다.
```ts
await new Promise((resolve) => setTimeout(resolve, 1000));
```

---

## 🛠 사용된 기술 스택

- **Next.js**: 15.3.5 - React 기반 풀스택 프레임워크
- **React**: ^19.0.0 - UI 라이브러리
- **TypeScript**: ^5 - 정적 타입을 지원하는 JavaScript
- **React Query**: ^5.82.0 - 서버 상태 관리 및 데이터 패칭 라이브러리
- **Tailwind CSS**: ^4 - 유틸리티 기반 CSS 프레임워크
- **Cypress**: ^14.5.1 - E2E(End-to-End) 테스트 도구

---

## ✨ 주요 기능

1. **추천 도서** - 메인 페이지에서 추천 도서 3권을 확인할 수 있습니다.
2. **도서 목록** - 무한 스크롤을 통해 모든 도서를 페이지네이션으로 탐색할 수 있습니다.
3. **도서 검색** - 제목과 저자명으로 원하는 도서를 검색할 수 있습니다.
4. **도서 상세 정보** - 각 도서의 상세 정보(제목, 저자, 출판사, 설명 등)를 확인할 수 있습니다.
5. **SSR & 하이드레이션** - 서버 사이드 렌더링으로 초기 로딩 속도를 최적화했습니다.
6. **반응형 디자인** - 모바일과 데스크톱 환경에서 모두 최적화된 UI를 제공합니다.

---

## 🚀 설치 및 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-repo/nextjs-book-store.git
cd nextjs-book-store
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```
애플리케이션은 http://localhost:3000 에서 확인할 수 있습니다.

### 4. E2E 테스트 실행 (Cypress)

GUI 실행
```bash
npm run cypress:open
```

CLI 실행
```bash
npm run cypress:run
```

---

## 📁 디렉토리 구조

```
nextjs-book-store/
├── cypress/                          # Cypress 테스트 관련 파일
│   ├── e2e/                          # E2E 테스트 파일
│   │   ├── bookDetail.cy.ts          # 도서 상세 페이지 테스트
│   │   ├── main.cy.ts                # 메인 페이지 테스트
│   │   └── search.cy.ts              # 검색 페이지 테스트
│   └── support/                      # 공통 설정 및 커스텀 명령어
│       ├── commands.ts               # Cypress 커스텀 명령어
│       └── e2e.ts                    # Cypress 설정 파일
├── src/                              # 소스 코드
│   ├── app/                          # Next.js App Router 페이지
│   │   ├── book/                     # 도서 관련 페이지
│   │   │   └── [id]/                 # 동적 라우팅 (도서 상세)
│   │   │       ├── page.tsx          # 도서 상세 페이지
│   │   │       ├── loading.tsx       # 도서 상세 페이지 로딩 UI
│   │   │       └── error.tsx         # 도서 상세 페이지 에러 UI
│   │   ├── search/                   # 검색 페이지
│   │   │   ├── page.tsx              # 검색 결과 페이지
│   │   │   ├── loading.tsx           # 검색 페이지 로딩 UI
│   │   │   └── error.tsx             # 검색 페이지 에러 UI
│   │   ├── layout.tsx                # 전역 레이아웃
│   │   ├── page.tsx                  # 메인 페이지
│   │   ├── loading.tsx               # 전역 로딩 UI
│   │   ├── error.tsx                 # 전역 에러 UI
│   │   ├── not-found.tsx             # 404 페이지
│   │   └── globals.css               # 전역 CSS
│   ├── components/                   # UI 컴포넌트
│   │   ├── book/                     # 도서 관련 컴포넌트
│   │   │   ├── AllBook.tsx           # 전체 도서 목록 컴포넌트
│   │   │   ├── BookDetail.tsx        # 도서 상세 정보 컴포넌트
│   │   │   ├── BookItem.tsx          # 도서 아이템 컴포넌트
│   │   │   └── RecommendBook.tsx     # 추천 도서 컴포넌트
│   │   ├── error/                    # 에러 관련 컴포넌트
│   │   │   └── ErrorMessage.tsx      # 에러 메시지 컴포넌트
│   │   ├── layout/                   # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx            # 헤더 컴포넌트
│   │   │   ├── Footer.tsx            # 푸터 컴포넌트
│   │   │   └── SkipNavigation.tsx    # 스킵 네비게이션 컴포넌트
│   │   ├── search/                   # 검색 관련 컴포넌트
│   │   │   ├── SearchInput.tsx       # 검색 입력 컴포넌트
│   │   │   ├── SearchResult.tsx      # 검색 결과 컴포넌트
│   │   │   └── NoResult.tsx          # 검색 결과 없음 컴포넌트
│   │   └── skeleton/                 # 스켈레톤 UI 컴포넌트
│   │       └── SkeletonUi.tsx        # 로딩 스켈레톤 컴포넌트
│   ├── hooks/                        # 커스텀 훅
│   │   └── useBook.tsx               # 도서 관련 React Query 훅
│   ├── interfaces/                   # TypeScript 인터페이스
│   │   └── bookStore.interface.ts    # 북스토어 관련 타입 정의
│   ├── lib/                          # 유틸리티 및 설정
│   │   ├── bookApi.ts                # 도서 API 함수
│   │   └── queryClient.ts            # React Query 클라이언트 설정
│   ├── mock/                         # 목 데이터
│   │   └── book.json                 # 도서 목 데이터
│   └── provider/                     # 프로바이더 컴포넌트
│       └── QueryProvider.tsx         # React Query 프로바이더
├── cypress.config.ts                 # Cypress 설정 파일
├── next.config.ts                    # Next.js 설정 파일
├── tsconfig.json                     # TypeScript 설정 파일
├── eslint.config.mjs                 # ESLint 설정 파일
├── postcss.config.mjs                # PostCSS 설정 파일
├── package.json                      # 프로젝트 설정 파일
├── package-lock.json                 # 의존성 잠금 파일
└── README.md                         # 프로젝트 설명 파일
```

---

## 🎯 주요 특징

### SSR (Server-Side Rendering)
- Next.js App Router를 활용한 서버 사이드 렌더링
- React Query의 `prefetchQuery`와 `HydrationBoundary`를 통한 데이터 사전 로딩

### 데이터 관리
- React Query를 통한 효율적인 관리
- 무한 스크롤을 위한 `useInfiniteQuery` 활용

### 반응형 디자인
- Tailwind CSS를 활용한 모바일 퍼스트 디자인
- 다양한 화면 크기에 최적화된 레이아웃

---

## 🧪 테스트

프로젝트는 Cypress를 통한 E2E 테스트를 포함하고 있습니다:

- **메인 페이지 테스트**: 추천 도서 및 전체 도서 목록 렌더링 확인
- **검색 기능 테스트**: 도서 검색 및 결과 표시 확인
- **도서 상세 페이지 테스트**: 개별 도서 정보 페이지 확인

---

감사합니다 :)