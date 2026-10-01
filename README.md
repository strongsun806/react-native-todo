<div align="center">

# 📱 React Native Todo App

> **미니멀하고 직관적인 일상 관리 모바일 애플리케이션**  
> React Native와 Expo 생태계를 기반으로 컴포넌트 주도 설계(CDD)와 상태 흐름을 학습하기 위해 제작된 프로젝트입니다.

<br/>

![React Native](https://img.shields.io/badge/React%20Native-0.7x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-Latest-000000?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

</div>

---

## 📌 Overview

**React Native Todo**는 불필요한 요소를 배제하고 직관적인 UX를 목표로 설계된 크로스 플랫폼 투두 앱입니다. 모바일 환경에서의 이벤트 처리, 리스트 렌더링 최적화, 컴포넌트 간 단방향 데이터 흐름을 명확하게 분리하여 구현했습니다.

### ✨ Key Features
- **Task Management**: 실시간 할 일 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)
- **Status Toggle**: 탭 인터랙션을 통한 완료/미완료 상태 즉시 전환
- **Component-Driven Architecture**: 화면(Screen)과 재사용 가능한 원자 단위 컴포넌트(Component)의 엄격한 관심사 분리
- **Cross-Platform**: 단일 코드베이스로 iOS 및 Android 환경 동시 지원

---

## 🛠 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | React Native | 크로스 플랫폼 네이티브 모바일 애플리케이션 프레임워크 |
| **Tooling** | Expo (CLI / Managed Workflow) | 빠른 프로토타이핑 및 일관된 런타임 환경 제공 |
| **Language** | JavaScript (ES6+) | 모던 자바스크립트 문법 활용 |
| **Storage (예정)** | AsyncStorage | 디바이스 로컬 데이터 영속성 관리 (오프라인 지원) |

---

## 📂 Project Architecture

```plaintext
react-native-todo/
├── src/
│   ├── components/       # 재사용 가능한 UI 컴포넌트 모음
│   │   └── TodoItem.js   # 개별 투두 아이템 렌더링 및 인터랙션 처리
│   └── screens/          # 화면 단위 컴포넌트
│       └── HomeScreen.js # 투두 메인 뷰 및 비즈니스 로직 연동
├── App.js                # 앱 엔트리 포인트 및 글로벌 프로바이더 설정
├── app.json              # Expo 애플리케이션 구성 설정
├── babel.config.js       # 바벨 트랜스파일러 설정
└── package.json          # 프로젝트 의존성 및 스크립트 정의
