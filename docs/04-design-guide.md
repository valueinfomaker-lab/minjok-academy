# 04. 디자인 가이드

> 민족 어학원 사이트의 시각 시스템. HTML/CSS 구현 시 그대로 변수화하여 사용.

---

## 1. 컨셉

**"16년 전통의 신뢰감 + 글로벌 인재양성의 프리미엄"**

- 메인 컬러: **딥블루** — 신뢰, 학문, 안정
- 포인트 컬러: **딥블루 계열의 단색 모노톤** (RISE 컨셉)
- 화이트 베이스 + 풍부한 여백 → RISE 풍의 정제된 느낌
- 사진 위주, 일러스트 최소화 → 실사 기반의 진정성

---

## 2. 컬러 토큰

### 브랜드 컬러

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-primary` | `#0B2E5B` | 메인 (헤더 로고, 푸터 배경, CTA 버튼, 주요 텍스트 강조) |
| `--color-primary-dark` | `#06203F` | 호버, 강조 |
| `--color-primary-light` | `#1E4A82` | Hero 그라데이션, eyebrow 라벨, 강조 라인 |
| `--color-accent` | `#1E4A82` | 포인트 (= primary-light, 모노톤 컨셉) |
| `--color-accent-dark` | `#0B2E5B` | accent 호버 (= primary) |
| `--color-accent-light` | `#B8C9DD` | 옅은 블루 배경, Hero highlight 텍스트 |

### 중립 컬러

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-bg` | `#FFFFFF` | 메인 배경 |
| `--color-bg-soft` | `#F4F7FB` | 섹션 교차 배경, 옅은 블루 그레이 |
| `--color-bg-cool` | `#E8EFF7` | 더 짙은 보조 배경 |
| `--color-text` | `#1A1A1A` | 본문 텍스트 |
| `--color-text-sub` | `#5A6270` | 서브 텍스트 |
| `--color-text-mute` | `#8B92A0` | 캡션, placeholder |
| `--color-border` | `#E4E7EB` | 일반 보더 |
| `--color-border-strong` | `#C9CED6` | 강조 보더 |

### 시스템 컬러 (보조)

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-success` | `#16A34A` | 폼 성공 메시지 |
| `--color-warning` | `#F59E0B` | 경고 |
| `--color-error` | `#DC2626` | 폼 에러 |
| `--color-info` | `#2563EB` | 안내 |

### 컬러 사용 비율 (메인 페이지 기준)

| 컬러 | 비율 | 적용 영역 |
|---|---:|---|
| 화이트/옅은 그레이블루 | 65% | 본문 배경, 카드 배경 |
| 딥블루 (Primary) | 30% | 헤더 로고, 푸터, Hero, 강조 텍스트, CTA, Promise 카드 |
| 옅은 블루 (Light) | 5% | eyebrow 라벨, Hero highlight, 강조 라인 |

> **모노톤 컨셉**. 별도의 골드/오렌지/레드 등 보색 액센트를 두지 않고, 딥블루 계열의 명도 차로 위계를 만든다 (RISE 스타일).

---

## 3. 타이포그래피

### 폰트 패밀리

```css
--font-sans: "Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont,
             "Segoe UI", "Helvetica Neue", Arial, sans-serif;

--font-serif: "Noto Serif KR", Georgia, serif;
/* 사용 한정: 인사말 페이지의 본문, 16년 연혁 강조 등 — 전통감 표현 시 */

--font-mono: "Pretendard Mono", "JetBrains Mono", Consolas, monospace;
/* 거의 사용 안 함 */
```

### 영문 폰트 (선택, 영문 키워드 강조 시)

```css
--font-en: "Inter", -apple-system, sans-serif;
```

### 폰트 사이즈 스케일

| 토큰 | px | 용도 |
|---|---:|---|
| `--fs-xs` | 12 | 캡션, 레이블 |
| `--fs-sm` | 14 | 푸터, 보조 텍스트 |
| `--fs-base` | 16 | 본문 |
| `--fs-md` | 18 | 강조 본문, 카드 제목 |
| `--fs-lg` | 20 | 작은 섹션 제목 |
| `--fs-xl` | 24 | 카드 제목, 서브 헤딩 |
| `--fs-2xl` | 32 | 페이지 제목 (모바일 Hero H1) |
| `--fs-3xl` | 40 | 섹션 헤딩 (PC) |
| `--fs-4xl` | 56 | Hero H1 (태블릿) |
| `--fs-5xl` | 72 | Hero H1 (PC) |

### 폰트 가중치

| 토큰 | 값 | 용도 |
|---|---:|---|
| `--fw-regular` | 400 | 본문 |
| `--fw-medium` | 500 | 강조 본문, 메뉴 |
| `--fw-semibold` | 600 | 카드 제목 |
| `--fw-bold` | 700 | 섹션 헤딩, 버튼 |
| `--fw-extrabold` | 800 | Hero H1, 신뢰 지표 숫자 |

### 행간 / 자간

| 토큰 | 값 | 용도 |
|---|---|---|
| `--lh-tight` | 1.2 | Hero, 큰 헤딩 |
| `--lh-snug` | 1.4 | 일반 헤딩 |
| `--lh-base` | 1.6 | 본문 |
| `--lh-relaxed` | 1.8 | 인사말, 긴 문단 |
| `--ls-tight` | -0.02em | 큰 헤딩 자간 |
| `--ls-normal` | 0 | 일반 |
| `--ls-wide` | 0.04em | 영문 키워드, 카테고리 라벨 |

### 타이포그래피 스타일 (사용 예시)

```
Hero H1   :  72px / 800 / -0.02em / 1.2
Section H2:  40px / 700 / -0.01em / 1.3
Card H3   :  24px / 600 / 0       / 1.4
본문      :  16px / 400 / 0       / 1.7
캡션      :  14px / 400 / 0       / 1.5
```

---

## 4. 간격 (Spacing)

8px 기반 스케일.

| 토큰 | px |
|---|---:|
| `--sp-1` | 4 |
| `--sp-2` | 8 |
| `--sp-3` | 12 |
| `--sp-4` | 16 |
| `--sp-5` | 24 |
| `--sp-6` | 32 |
| `--sp-7` | 48 |
| `--sp-8` | 64 |
| `--sp-9` | 96 |
| `--sp-10` | 128 |

### 섹션 / 컴포넌트 간격 표준

- 섹션 상하 패딩: 모바일 `--sp-7` (48px) / PC `--sp-9` (96px)
- 섹션 내 요소 간격: `--sp-6` (32px)
- 카드 내부 패딩: `--sp-5` (24px)
- 컨테이너 좌우 패딩: 모바일 `--sp-4` / 태블릿 `--sp-5` / PC `--sp-6`

---

## 5. 컨테이너 / 그리드

| 토큰 | 값 |
|---|---|
| `--container-max` | 1280px |
| `--container-narrow` | 960px (인사말, 정책 문서 등 글 위주) |
| `--grid-cols` | 12 |
| `--grid-gap` | 24px |

### 브레이크포인트

```css
--bp-sm: 480px;   /* 작은 모바일 */
--bp-md: 768px;   /* 태블릿 */
--bp-lg: 1024px;  /* 데스크탑 */
--bp-xl: 1280px;  /* 와이드 */
```

---

## 6. 라운딩 (Border Radius)

| 토큰 | px | 용도 |
|---|---:|---|
| `--radius-sm` | 6 | 작은 태그, 인풋 |
| `--radius-md` | 12 | 버튼, 카드 |
| `--radius-lg` | 24 | 큰 카드, 모달 |
| `--radius-pill` | 999 | 칩, pill 버튼 |
| `--radius-full` | 50% | 아바타, 동그라미 |

---

## 7. 그림자 (Shadow)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | 헤더 스크롤 시 |
| `--shadow-md` | `0 4px 16px rgba(11,46,91,0.08)` | 카드 |
| `--shadow-lg` | `0 12px 32px rgba(11,46,91,0.12)` | 카드 hover, 모달 |
| `--shadow-cta` | `0 8px 24px rgba(11,46,91,0.28)` | 딥블루 CTA 버튼 |

---

## 8. 컴포넌트 가이드

### 8.1 버튼

```
[ Primary 버튼 ] (메인 CTA, 일반 영역)
- 배경: --color-primary (딥블루)
- 텍스트: 화이트 - 700 weight
- 패딩: 16px 32px
- 라운드: --radius-md
- 호버: 배경 --color-primary-dark + translateY(-2px) + shadow-cta

[ White 버튼 ] (Hero 위 등 어두운 배경)
- 배경: 화이트
- 텍스트: --color-primary - 700 weight
- 호버: 배경 --color-bg-soft + translateY(-2px) + shadow-md

[ Secondary 버튼 ]
- 배경: 투명
- 보더: 2px solid --color-primary
- 텍스트: --color-primary
- 호버: 배경 --color-primary, 텍스트 화이트

[ Outline-White 버튼 ] (Hero 위 보조)
- 배경: 투명
- 보더: 2px solid 화이트
- 텍스트: 화이트
- 호버: 배경 화이트, 텍스트 --color-primary

[ Text 버튼 / 더 보기 링크 ]
- 보더 없음, 텍스트 --color-primary
- 호버: 밑줄 + 화살표(→) 4px 우측 이동
```

### 8.2 카드

```
.card {
  배경: --color-bg (화이트);
  보더: 1px solid --color-border;
  라운드: --radius-lg;
  패딩: --sp-5;
  shadow: --shadow-md;
  transition: 0.2s;
}
.card:hover {
  shadow: --shadow-lg;
  transform: translateY(-4px);
}
```

### 8.3 섹션 헤딩 패턴

```
┌─────────────────────────────────┐
│                                 │
│   ──── 블루 라인 (40px x 4px)    │
│                                 │
│   섹션 제목                      │
│   (40px / 700 / 딥블루)          │
│                                 │
│   서브타이틀                     │
│   (18px / 400 / --color-text-sub)│
│                                 │
└─────────────────────────────────┘
```

딥블루 짧은 라인이 섹션 헤딩 위에 시그니처로 들어간다 (모노톤 컨셉, 브랜드 일관성).

### 8.4 폼 인풋

```
.input {
  높이: 48px;
  보더: 1px solid --color-border;
  라운드: --radius-sm;
  패딩: 12px 16px;
  폰트: 16px / 400;
  배경: 화이트;
}
.input:focus {
  보더: 2px solid --color-primary;
  outline: none;
}
.input.error {
  보더: 1px solid --color-error;
}
```

### 8.5 헤더 / 네비게이션

- 높이: 80px (PC) / 64px (모바일)
- 배경: 화이트 (스크롤 0px 위치) → 스크롤 시 약간의 그림자
- 메뉴 텍스트: 16px / 500 / `--color-primary`
- 활성 메뉴: 텍스트 아래 골드 언더라인 (2px)
- 우측 [무료 상담] 버튼: 딥블루 솔리드 + 화이트 텍스트

### 8.6 푸터

- 배경: `--color-primary` (딥블루)
- 텍스트: 화이트 (70% 투명도)
- 헤딩: 화이트 100% / 600
- 링크 호버: --color-accent-light (옅은 블루)

### 8.7 갤러리

- 가로 스크롤 (snap-x mandatory) — 모바일 표준
- PC는 5~6컬럼 그리드 또는 슬라이드 (좌우 화살표)
- 이미지 비율: 4:3 또는 3:2
- hover 시 살짝 줌인 (scale 1.03)

### 8.8 후기 슬라이더

- 카드 형식 (인용 부호 + 본문 + 작성자)
- 모바일 1개, 태블릿 2개, PC 3개 노출
- 자동 슬라이드 5초 간격 (사용자 인터랙션 시 일시 정지)

### 8.9 플로팅 CTA

```
.floating-cta {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 64px (icon only) ~ 200px (full label);
  높이: 64px;
  배경: --color-primary (딥블루);
  텍스트: 화이트;
  shadow: --shadow-cta;
  라운드: --radius-pill;
}
```

스크롤 200px 후 fade-in 등장.

---

## 9. 아이콘

### 아이콘 라이브러리
- **Lucide Icons** (https://lucide.dev) — MIT 라이선스, SVG 인라인
- 또는 Heroicons (Tailwind 팀, MIT)

### 사용 규칙
- 스트로크 굵기 1.5~2px 일관 유지
- 아이콘 컬러: 본문은 `--color-text-sub`, 강조는 `--color-accent` 또는 `--color-primary`
- 신뢰 지표/철학 섹션: 큰 아이콘(48px) + 컬러 강조
- 푸터/메뉴 부속: 작은 아이콘(20px) + sub-text 컬러

---

## 10. 이미지 가이드

### 화면별 권장 사양

| 위치 | 권장 크기 | 비고 |
|---|---|---|
| Hero 배경 | 2880 × 1620 (16:9) | WebP 권장, 1MB 이하 |
| 프로그램 카드 | 800 × 600 (4:3) | WebP, 200KB 이하 |
| 갤러리 | 1200 × 900 (4:3) | WebP, 300KB 이하 |
| 강사 사진 | 400 × 400 (1:1) | WebP, 100KB 이하 |
| 원장 인사말 | 600 × 800 (3:4) | WebP, 200KB 이하 |
| 지도 임베드 | iframe — 별도 |

### 톤
- 자연광 또는 따뜻한 실내 조명
- 아이들의 자연스러운 표정 (연출 컷보다 일상 컷 선호)
- 색 보정: 채도 약간 낮춤, 따뜻한 색온도

### 더미 이미지 (1차 산출물용)
- **Unsplash** (https://unsplash.com) — 라이선스 표기 불필요
- 검색 키워드: "kids reading", "english class korea", "children learning", "kindergarten lunch", "after school"
- 임시로 사용하고, 실제 학원 사진으로 교체 예정 (05-assets-checklist.md 참고)

---

## 11. 모션 / 트랜지션

- 기본 transition: `0.2s ease`
- 카드 hover: `0.2s ease`
- 페이지 진입 페이드: `0.4s ease`
- Hero 텍스트 등장: `0.6s ease-out` + stagger 0.1s
- 갤러리 슬라이드: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`

> **접근성**: `prefers-reduced-motion: reduce` 사용자에게는 모든 모션 비활성화.

---

## 12. CSS 변수 한 줄 요약 (참고용)

```css
:root {
  /* Brand — RISE-style deep blue + white monochrome */
  --color-primary: #0B2E5B;
  --color-primary-dark: #06203F;
  --color-primary-light: #1E4A82;
  --color-accent: #1E4A82;
  --color-accent-dark: #0B2E5B;
  --color-accent-light: #B8C9DD;

  /* Neutral */
  --color-bg: #FFFFFF;
  --color-bg-soft: #F4F7FB;
  --color-bg-cool: #E8EFF7;
  --color-text: #1A1A1A;
  --color-text-sub: #5A6270;
  --color-text-mute: #8B92A0;
  --color-border: #E4E7EB;
  --color-border-strong: #C9CED6;

  /* System */
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-error: #DC2626;
  --color-info: #2563EB;

  /* Typography */
  --font-sans: "Pretendard", "Noto Sans KR", sans-serif;
  --font-serif: "Noto Serif KR", Georgia, serif;
  --font-en: "Inter", sans-serif;
  --fs-xs: 12px; --fs-sm: 14px; --fs-base: 16px; --fs-md: 18px;
  --fs-lg: 20px; --fs-xl: 24px; --fs-2xl: 32px; --fs-3xl: 40px;
  --fs-4xl: 56px; --fs-5xl: 72px;
  --fw-regular: 400; --fw-medium: 500; --fw-semibold: 600;
  --fw-bold: 700; --fw-extrabold: 800;

  /* Spacing */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px;
  --sp-5: 24px; --sp-6: 32px; --sp-7: 48px; --sp-8: 64px;
  --sp-9: 96px; --sp-10: 128px;

  /* Layout */
  --container-max: 1280px;
  --container-narrow: 960px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(11,46,91,0.08);
  --shadow-lg: 0 12px 32px rgba(11,46,91,0.12);
  --shadow-cta: 0 8px 24px rgba(11,46,91,0.28);
}
```

이 CSS 변수 블록을 그대로 `assets/css/main.css` 최상단에 복사해서 사용한다.

---

## 13. 접근성 가이드

- **컬러 대비**: 본문 텍스트 vs 배경 WCAG AA 이상 (4.5:1) 확보
  - `--color-text` (#1A1A1A) on `--color-bg` (#FFFFFF) → 17.7:1 ✓
  - `--color-primary` (#0B2E5B) on `--color-bg` → 11.8:1 ✓
  - `--color-text-sub` (#5A6270) on `--color-bg` → 6.4:1 ✓
- **포커스 표시**: 모든 클릭/탭 가능한 요소는 `:focus-visible` 시 골드 outline (2px) 표시
- **이미지 alt**: 모든 `<img>`에 의미 있는 alt 텍스트 (장식용은 `alt=""`)
- **시맨틱 마크업**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` 활용
- **헤딩 계층**: 페이지당 `<h1>` 1개, 이후 h2 → h3 순차적

---

## 14. 디자인 시스템 활용 우선순위

기획안 컨펌 후 HTML 구현 시:

1. 먼저 `assets/css/main.css`에 위 CSS 변수 블록 + base reset 작성
2. 헤더/푸터 공통 컴포넌트 구현
3. 메인 페이지 섹션 1~3 구현 → **여기서 디자인 시스템 확정**
4. 확정된 시스템으로 나머지 섹션 / 페이지 빠르게 구현
