# 기여자 가이드 개요
이 프로젝트는 Microsoft의 Minesweeper를 기반으로 합니다.
타일을 열거나, 깃발을 설정하거나, 타일에 지뢰가 있는 경우 폭발시킬 수 있습니다.

## 이 프로젝트의 목표

## 이 저장소를 테스트하는 방법

1. **저장소 포크**: 저장소 페이지 오른쪽 상단의 "Fork" 버튼을 클릭하여 GitHub 계정 아래에 저장소의 복사본을 만듭니다.
2. **저장소 클론**: 포크된 저장소를 로컬 머신에 클론합니다:
  ```bash
  git clone https://github.com/your-username/minesweeper-client.git
  ```
3. **브랜치 생성**: 기능 또는 버그 수정을 위한 새 브랜치를 생성합니다:
  ```bash
  git checkout -b feature-or-bugfix-name
  ```
4. **변경 사항 적용**: 코드베이스에 변경 사항을 적용합니다.
5. **변경 사항 커밋**: 의미 있는 커밋 메시지와 함께 변경 사항을 커밋합니다:
  ```bash
  git commit -m "변경 사항에 대한 설명"
  ```
6. **변경 사항 푸시**: 포크된 저장소에 변경 사항을 푸시합니다:
  ```bash
  git push origin feature-or-bugfix-name
  ```
7. **풀 리퀘스트 생성**: 원본 저장소로 이동하여 포크된 저장소에서 풀 리퀘스트를 생성합니다.
