# 다꿀 - Server
## SOPT 29th 'WE SOPT' - Team Dakkul 🌰🔨
   
### 💬 서비스 소개 💬
☑️ 서비스명: 다꿀 Dakkul   
☑️ 슬로건: 어제도 당하지 않았는가? 하찮은 종이, 작은 레고, 낮은 문지방에! 이제는 우리가 복수할 때! 모두 다함께 꿀밤, 다꿀로 모여!   
☑️ 소개: 일상 속 작은 불운들에 시달릴 때, 다함께 불운에 꿀밤을 날리며 스트레스를 해소할 수 있는 서비스   
   
   
### 👦 파트 분배 👧
| 이름   | 담당 부분 |
| ------ | --------- |
| 💙효식  |불운 한 마디 작성, 한 마디 리스트 및 전체 개수 조회|
| ❤️지원 |전체 불운 조회, 불운 태그별 조회, 불운 상세 조회|   
   
   
### 📝 코드 컨벤션 📝   
- **constants**
    
    responseMessage.js
    
    ```jsx
    module.exports = {
      NULL_VALUE: '필요한 값이 없습니다',
      OUT_OF_VALUE: '파라미터 값이 잘못되었습니다',
      WRONG_QUERY: '쿼리 값이 잘못되었습니다',
    
      // 회원가입
      CREATED_USER: '회원 가입 성공',
      DELETE_USER: '회원 탈퇴 성공',
      ALREADY_EMAIL: '이미 사용중인 이메일입니다.',
    
      // 로그인
      LOGIN_SUCCESS: '로그인 성공',
      LOGIN_FAIL: '로그인 실패',
      NO_USER: '존재하지 않는 회원입니다.',
      MISS_MATCH_PW: '비밀번호가 맞지 않습니다.',
    
      // 프로필 조회
      READ_PROFILE_SUCCESS: '프로필 조회 성공',
    
    	// 종이
    	LIKE_SUCCESS: '좋아요 변환 성공',
    
    	// 조회
      READ_SUCCESS: '조회 성공',
    	NO_SEARCH_RESULT: '검색 결과 없음',
    	
    };
    ```
    
    statusCode.js
    
    ```jsx
    module.exports = {
      OK: 200,
      CREATED: 201,
      NO_CONTENT: 204,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      INTERNAL_SERVER_ERROR: 500,
      SERVICE_UNAVAILABLE: 503,
      DB_ERROR: 600,
    };
    ```
    
- **lib**
    
    util.js
    
    ```jsx
    module.exports = {
      success: (status, message, data) => {
        return {
          status,
          success: true,
          message,
          data,
        };
      },
      fail: (status, message) => {
        return {
          status,
          success: false,
          message,
        };
      },
    };
    ```
    
- .eslintrc.js
    
    ```jsx
    module.exports = {
      env: {
        node: true,
        commonjs: true,
        es2021: true,
      },
      extends: ["eslint:recommended", "eslint-config-prettier"],
      parserOptions: {
        ecmaVersion: 12,
      },
      rules: {
        "no-prototype-builtins": "off",
        "no-self-assign": "off",
        "no-empty": "off",
        "no-case-declarations": "off",
        "consistent-return": "off",
        "arrow-body-style": "off",
        camelcase: "off",
        quotes: "off",
        "no-unused-vars": "off",
        "comma-dangle": "off",
        "no-bitwise": "off",
        "no-use-before-define": "off",
        "no-extra-boolean-cast": "off",
        "no-empty-pattern": "off",
        curly: "off",
        "no-unreachable": "off",
      },
    };
    ```
    
- .prettierrc.js
    
    ```jsx
    module.exports = {
      bracketSpacing: true,
      jsxBracketSameLine: true,
      singleQuote: true,
      trailingComma: "all",
      arrowParens: "always",
      printWidth: 200,
      tabWidth: 2,
    };
    ```
       
### 🌲 브랜치 전략 🌲   
* main 브랜치에서 dev 브랜치 생성
* dev 브랜치에서 기능별로 'func_기능이름'으로 브챈치 생성
* 기능 구현 후, dev 브랜치에 merge
* 최종 구현 후, main 브랜치에 merge
   
### 📃 커밋 컨벤션 📃   
영어로 작성, 동사원형으로 시작, 모두 소문자로 작성
- feat: 새로운 기능 추가
- fix: 버그를 고친 경우
- style: 코드 포맷 변경
- refactor: 코드 리팩토링
- merge: 브랜치 머지
- docs: 문서 작성
- rename: 파일, 클래스, 메서드명, 폴더명 수정
- chore: 설정 파일 등
   
### 📁 프로젝트 폴더링 📁
