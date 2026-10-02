
<div align="center">

# 📱 React Native Todo App

> **미니멀하고 직관적인 일상 관리 모바일 애플리케이션**  
> React Native와 Expo 생태계를 기반으로 컴포넌트 주도 설계(CDD)와 상태 흐름을 학습하기 위해 제작된 프로젝트입니다.

<br/>

![React Native](https://img.shields.io/badge/React%20Native-0.71.14-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-v48.0.0-000000?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-4E5EE4?style=for-the-badge&logo=googlechrome&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

</div>

---

## 📌 Overview

**React Native Todo**는 불필요한 요소를 배제하고 직관적인 UX를 목표로 설계된 크로스 플랫폼 투두 앱입니다. 모바일 환경에서의 이벤트 처리, 리스트 렌더링 최적화, 컴포넌트 간 단방향 데이터 흐름을 명확하게 분리하여 구현했습니다.

### ✨ Key Features
- **Task Management**: 실시간 할 일 생성(Create), 조회(Read), 삭제(Delete)
- **Status Toggle**: 탭 인터랙션을 통한 완료/미완료 상태 즉시 전환
- **Component-Driven Architecture**: 화면(Screen)과 재사용 가능한 원자 단위 컴포넌트(Component)의 엄격한 관심사 분리
- **Cross-Platform**: 단일 코드베이스로 iOS, Android 및 Web 브라우저 환경 지원
- **UX Optimization**: `KeyboardAvoidingView` 및 플랫폼별 적응형 레이아웃 구성

---

## 🛠 Tech Stack

| Category | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Framework** | React Native | `0.71.14` | 크로스 플랫폼 모바일 애플리케이션 프레임워크 |
| **Tooling** | Expo (Managed Workflow) | `^48.0.0` | 개발 오케스트레이션 및 통합 런타임 환경 제공 |
| **Web Support** | React Native Web | `~0.18.10` | 웹 브라우저 DOM 렌더링 대응 레이어 |
| **Language** | JavaScript | `ES6+` | 모던 자바스크립트 표준 문법 |
| **Storage (예정)** | AsyncStorage | - | 디바이스 로컬 데이터 영속성 관리 (오프라인 캐싱) |

---

## 📂 Project Architecture

```plaintext
react-native-todo/
├── src/
│   ├── components/       # 재사용 가능한 UI 컴포넌트 모음
│   │   └── TodoItem.js   # 개별 할 일 렌더링, 완료 토글 및 삭제 핸들링
│   └── screens/          # 화면 단위 컴포넌트
│       └── HomeScreen.js # 투두 메인 비즈니스 로직, 입력 폼 및 FlatList 뷰
├── App.js                # SafeAreaView 및 플랫폼별 최상위 레이아웃 래퍼
├── index.js              # registerRootComponent 기반 통합 엔트리 포인트
├── app.json              # Expo 애플리케이션 구성 메타데이터
├── babel.config.js       # Babel 트랜스파일러 프리셋 설정
└── package.json          # 프로젝트 의존성 및 실행 스크립트 정의

```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 이상 권장)
* npm 혹은 yarn
* 모바일 테스트 시 **Expo Go** 앱 (iOS App Store / Google Play Store)

### Installation & Run

1. 저장소를 클론합니다.
```bash
git clone [https://github.com/strongsun806/react-native-todo.git](https://github.com/strongsun806/react-native-todo.git)
cd react-native-todo

```


2. 종속성 패키지를 설치합니다.
```bash
npm install

```


3. 원하는 플랫폼 모드로 개발 서버를 실행합니다.
```bash
# Expo 개발 서버 구동 (터미널에서 QR 코드 스캔)
npm start

# 웹 브라우저에서 바로 미리보기
npm run web

# 시뮬레이터 / 에뮬레이터 실행
npm run ios
npm run android

```



---

## 📸 Screenshots

| 메인 목록 화면 | 할 일 추가 / 완료 토글 |
| --- | --- |
|  |  |

> *추후 실제 구동 캡처 이미지로 교체할 수 있습니다.*

---

## 🗺 Roadmap

* [x] 컴포넌트 주도 아키텍처(CDD) 기반 분리 및 기본 CRUD 구현
* [x] Web 브라우저 런타임 호환성 확보 (`react-native-web`)
* [ ] `@react-native-async-storage/async-storage`를 활용한 로컬 데이터 영속화
* [ ] 카테고리 태그 및 필터링 기능 추가
* [ ] TypeScript 마이그레이션 (`.js` → `.tsx`)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

```

```