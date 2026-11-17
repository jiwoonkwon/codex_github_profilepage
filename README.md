# GitHub Pages 프론트엔드 포트폴리오

빌드 과정 없이 GitHub Pages에서 바로 제공할 수 있는 정적 포트폴리오입니다. 한국어 중심의 다크 테크 디자인과 모바일 화면을 포함합니다.

## 콘텐츠 수정

실제 정보는 **`content.js`만** 수정하면 됩니다.

- `profile`: 이름, 이니셜, 소개, 이메일, GitHub, LinkedIn, 이력서 URL
- `skills`: 기술 스택 그룹과 항목
- `projects`: 프로젝트명, 설명, 기술, 외부 링크, 기간
- `experience`: 경력 또는 학력의 기간, 역할, 소속, 설명

각 프로젝트의 `url`은 GitHub 저장소 또는 배포 사이트의 전체 URL을 사용하세요. 이력서 `resume`도 Notion, Google Drive 또는 공개 PDF 같은 외부 URL을 넣으면 됩니다.

`index.html`의 제목과 검색 설명은 페이지가 열릴 때 `content.js`의 이름과 역할로 자동 설정됩니다.

## 로컬에서 보기

`index.html` 파일을 브라우저에서 열면 됩니다. 모든 경로는 상대 경로를 사용하므로 GitHub Pages의 프로젝트 URL에서도 동작합니다.

## GitHub Pages 배포

`.github/workflows/pages.yml`이 포함되어 있습니다. `main` 브랜치에 push하면 GitHub Actions가 저장소 루트의 정적 파일을 GitHub Pages에 배포합니다. Node.js, `npm`, 빌드 폴더는 사용하지 않습니다.

1. 저장소의 **Settings → Pages**를 엽니다.
2. **Build and deployment**의 Source에서 **GitHub Actions**를 선택합니다.
3. `main` 브랜치에 push한 뒤 **Actions** 탭에서 배포 결과를 확인합니다.

저장소 이름이 `username.github.io`이면 `https://username.github.io`로, 일반 저장소라면 `https://username.github.io/repository-name/`으로 제공됩니다.
