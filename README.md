# 민족 어학원 (Minjok Language Academy)

남가좌·북가좌 지역 영어 명문 어학원 — 공식 홈페이지 정적 사이트.

> **Status**: 1차 산출물 (기획안 + HTML 정적 사이트). 학원 실제 자산(로고·사진·정확한 정보)은 추후 교체 예정.

## 구성

```
.
├── index.html                          메인 페이지 (9 섹션)
├── about.html                          학원소개 (인사말/연혁/교육철학/강사진)
├── campus.html                         캠퍼스 시설 안내
├── contact.html                        상담·오시는길
├── programs/
│   ├── kindergarten.html               유치부 (5~7세, 6층 유치관)
│   ├── elementary.html                 초등부 (1~6학년, 5층 초중등관)
│   └── secondary.html                  중·고등부 (내신/특목고)
├── assets/
│   ├── css/main.css                    디자인 토큰 + 31개 컴포넌트
│   └── js/main.js                      partial include + 인터랙션
├── partials/
│   ├── header.html                     공통 헤더
│   └── footer.html                     공통 푸터 + 플로팅 CTA
└── docs/                               기획안 (Markdown 6개)
    ├── 00-overview.md
    ├── 01-sitemap.md
    ├── 02-content-strategy.md
    ├── 03-wireframes.md
    ├── 04-design-guide.md
    └── 05-assets-checklist.md
```

## 로컬에서 보기

`partials/`를 `fetch()`로 include하므로 `file://`이 아닌 로컬 HTTP 서버가 필요합니다.

```bash
python -m http.server 8000
# 브라우저: http://localhost:8000
```

## 디자인 시스템

- **컬러**: 딥블루 `#0B2E5B` + 화이트 모노톤 (RISE 컨셉)
- **폰트**: Pretendard / Noto Sans KR (국문), Inter (영문)
- **아이콘**: Lucide (인라인 SVG)
- **이미지**: 현재는 [picsum.photos](https://picsum.photos) 플레이스홀더 사용
- 전체 토큰은 [`docs/04-design-guide.md`](docs/04-design-guide.md) 참고.

## 기획 배경

레퍼런스: [RISE Korea](https://www.risekorea.com/)
차별화 포인트:

1. **16년 전통, 지역의 신뢰** (2010년 개원)
2. **듀얼 트랙 강사진** (원어민 + 명문대 출신 한국인 베테랑)
3. **수준별 세분화 + 특목고 진학 전략**

타겟: 유아 5~7세, 초등 1~6학년 (메인) + 중·고등 (보조)

## 후속 작업

- [ ] 실제 학원 자산 (로고·사진·정확한 정보) 교체 — `docs/05-assets-checklist.md`
- [ ] 카카오맵/네이버맵 임베드
- [ ] 상담 폼 실제 전송 연결 (Google Form / Netlify Forms 등)
- [ ] 접근성 / 성능 점검 (Lighthouse)

## License

학원 내부 사용. 외부 배포·재사용 금지.
