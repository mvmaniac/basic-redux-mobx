# Basic Redux & Mobx

### 1. 강의 실습 예제 기반

- [Redux vs MobX (둘 다 배우자!)](https://www.inflearn.com/course/redux-mobx-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%8F%84%EA%B5%AC# "Redux vs MobX (둘 다 배우자!)") 참고
- [웹 게임을 만들며 배우는 React에 TypeScript 적용하기](https://www.inflearn.com/course/react-typescript-webgame "웹 게임을 만들며 배우는 React에 TypeScript 적용하기") 참고

### 2. 차이점

- EditorConfig 설정 추가
- ESLint & Prettier 설정 추가

### 3. TODO

-

### 4. Setting

- redux-toolkit (redux, redux-devtools-extension, immer를 따로 설치할 필요 없음, 내장되어 있음)

  ```javascript
  npm i react-redux @reduxjs/toolkit
  ```

- redux

  ```javascript
  npm i react-redux redux redux-devtools-extension
  ```

- mobx

  ```javascript
  npm i mobx
  npm i mobx-react
  ```

- react

  ```javascript
  npm i react react-dom
  ```

- react refresh

  ```javascript
  npm i -D react-refresh
  ```

- react refresh with webpack5, babel-loader

  ```javascript
  npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin
  ```

- react refresh with webpack5, ts-loader

  ```javascript
  npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin
  npm i -D react-refresh-typescript
  ```

- webpack5

  ```javascript
  npm i -D webpack webpack-cli webpack-merge webpack-dev-server
  npm i -D clean-webpack-plugin eslint-webpack-plugin
  npm i -D babel-loader core-js
  ```

- webpack5 with typescript

  .ts 파일로 작성 할 경우 ts-node가 필요함
  babel-loader or ts-loader 둘 중에 하나 선택 (예제는 babel-loader 기준)

  ```javascript
  npm i -D webpack webpack-cli webpack-merge webpack-dev-server
  npm i -D clean-webpack-plugin fork-ts-checker-webpack-plugin
  npm i -D babel-loader core-js
  npm i -D ts-node
  ```

- immer

  ```javascript
  npm i immer
  ```

- babel

  ```javascript
  npm i -D @babel/core @babel/preset-env @babel/preset-react
  npm i -D babel-loader
  ```

- eslint with js & prettier

  ```javascript
  npm i -D eslint
  npm i -D eslint-config-airbnb-base eslint-plugin-import
  npm i -D prettier eslint-config-prettier
  ```

- eslint with react & prettier

  ```javascript
  npm i -D eslint
  npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
  npm i -D prettier eslint-config-prettier
  npm i -D @babel/eslint-parser
  ```

- eslint with react, typescript & prettier

  ```javascript
  npm i -D eslint
  npm i -D eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
  npm i -D prettier eslint-config-prettier
  npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
  ```

- babel

  ```javascript
  npm i -D @babel/core @babel/preset-env @babel/preset-react
  ```

- babel with typescript (without ts-loader)

  ```javascript
  npm i -D @babel/core @babel/preset-env @babel/preset-react
  npm i -D @babel/preset-typescript
  ```

- types

  ```javascript
    npm i -D @types/react @types/react-dom
    npm i -D @types/react-redux
  ```
