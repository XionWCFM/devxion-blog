# devxion blog

[😁 blog 바로 방문해보기!](https://devxion-blog.vercel.app)

next.js 13의 app dir을 이용하여 만든 개인 블로그입니다.

배포는 vercel을 이용했으며

실제 포스트는 `contentlayer` 라이브러리를 이용해

mdx로 작성한 포스트 글을 보여주는 형태로 구현했습니다.

# 로컬 환경에서는

clone 후 로컬에서 실행을 할 수 있습니다.

프로젝트는 패키지매니저 `npm`을 이용하여 만들어져있습니다.

```
git clone https://github.com/XionWCFM/devxion-blog.git
```

```
npm i
```

```
npm run dev
```

를 통해 실행해볼 수 있습니다.

```
npm run cl
```

추가해둔 스크립트를 통하여 contentlayer build를 간편하게 진행할 수 있습니다.

---

## 사용된 폰트

```tsx
import { Noto_Sans_KR } from 'next/font/google';

const notosanskr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
```

next/font에서 제공해주는 기능을 통하여

Noto_Sans_KR을 사용했습니다.

---

## google-search-console 등록방법

```tsx
  verification: {
    google: '9NnnQfV-i-vmJVWpSMD99dmCxRKDwljQMqr5CQGUmN8',
  },
```

기존 head 태그내부에 작성하던 방식에서

metadata 객체를 이용한 방식으로 큰 변화가 있었습니다.

하지만 이에 대한 레퍼런스를 찾기가 어려운 부분도 컸습니다.

대부분 Head 태그를 이용한 방식으로 구현이 되어있었고

Next.js 공식문서에서도 자세한 레퍼런스가 존재하지 않은 상태였습니다.

혹시 힌트가 있을까 싶어

next.js에서 제공하는 MetaData 태그의 타입 정의 부분을 찾아보기로 했습니다.

````tsx
twitter?: null | Twitter;
    /**
     * The common verification tokens for the document.
     * @example
     * ```tsx
     * { verification: { google: "1234567890", yandex: "1234567890", "me": "1234567890" } }
     * <meta name="google-site-verification" content="1234567890" />
     * <meta name="yandex-verification" content="1234567890" />
     * <meta name="me" content="@me" />
     * ```
     */
    verification?: Verification;
    /**
     * The Apple web app metadata for the document.
     *
     * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
     * @example
     * ```tsx
     * { capable: true, title: "My Website", statusBarStyle: "black-translucent" }
     * <meta name="apple-mobile-web-app-capable" content="yes" />
     * <meta name="apple-mobile-web-app-title" content="My Website" />
     * <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
     * ```
     *
     */
````

주석 처리 된 부분을 자세히 읽어보면

verification key에 google 프로퍼티를 전달하면

google-search-console에서 요구하는 대로

name이 google-site-verification인 meta 태그에 값을 전달해줄 수 있다는 것을 알 수 있습니다.

---

## Public 폴더 경로 문제

로컬에서 이미지등을 사용해본 경험이 적어 asset들을 어떻게 가져올 수 있을지

고민이 있었습니다.

다른 레포지토리의 코드들을 참고해보며 public 폴더 내부의 파일들에 접근하기 위해

단순히 /~~~ 형태로 접근하기만하면 된다는 것을 알게 되었습니다.
