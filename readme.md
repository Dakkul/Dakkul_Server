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
Naming Convention   
* 변수명, 함수명은 lowerCamelCase로 작성
* 변수명, 함수명 20자 이내, 약어 사용 지양
* 함수명은 동사 + 명사
       
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
<img src="https://user-images.githubusercontent.com/76513385/142734662-034daa3b-cf39-447f-90fa-b9182d0b1300.png">   
   
### 📑 package.json 캡처 📑   
<img src="https://s3-joint-seminar.s3.ap-northeast-2.amazonaws.com/images/package_json.png">
   
### 📜 ERD 📜    
<img src="https://s3-joint-seminar.s3.ap-northeast-2.amazonaws.com/images/table/ERD.png">
   
### 📋 테이블 정의 📋   
<img src="https://s3-joint-seminar.s3.ap-northeast-2.amazonaws.com/images/table/post.png">   
<img src="https://s3-joint-seminar.s3.ap-northeast-2.amazonaws.com/images/table/comment.png">   
<img src="https://s3-joint-seminar.s3.ap-northeast-2.amazonaws.com/images/table/tag.png">   
<img src="https://s3-joint-seminar.s3.ap-northeast-2.amazonaws.com/images/table/post_tag.png">
