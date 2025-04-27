# Javis - 자소서 비서 서비스


- [프로젝트 소개](#프로젝트-소개)
- [배경](#배경)
- [기술 스택](#기술-스택)
- [AWS 인프라 설계](#aws-인프라-설계)
- [프론트엔드 주요 화면 및 기능](#프론트엔드-주요-화면-및-기능)
- [프론트엔드 제작과정 및 핵심 기술](#프론트엔드-제작과정-및-핵심-기술)
- [소감](#소감)

## 프로젝트 소개
취업 준비자들이 자소서 작성을 위해 필요한 정보를 효율적으로 저장하고 관리할 수 있도록 돕는 아카이빙 웹 서비스


### 발표자료
- [발표자료](https://www.canva.com/design/DAGYnAsfluA/GbfKrpRBVEmJLaE-UQ108w/edit?utm_content=DAGYnAsfluA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
### 소스코드 리포지토리

- [프론트엔드 소스코드 (javis-front)](https://github.com/hojin535/javis-front)
- [백엔드 소스코드 (javis-backend)](https://github.com/hojin535/javis-backend)

## 배경
취업 준비자들은 자소서 작성에 필요한 정보나 경험을 체계적으로 관리하는 데 어려움을 겪는다.
기업들이 요구하는 개인정보(한자 이름, 취득 자격증, 수상 경력 등)와 자소서 작성에 필요한 다양한 경험을 한 곳에 아카이빙하고, 이를 쉽게 검색 및 활용할 수 있도록 돕기 위해 Javis를 개발하였다.


## 기술 스택
### 프론트
- React.js
- Recoil
- Material-UI (Mui)
- Styled-Component
- S3(정적 웹 호스팅)

## 🛠️백엔드
- node.js
- DynamoDB
- RDS(MYSQL)

## ☁️ 인프라 (AWS)
- AWS S3 (정적 웹 호스팅)
- AWS EC2 (프록시 서버, 오토스케일링 적용)
- AWS ELB (Elastic Load Balancer)
- AWS Certificate Manager (SSL 인증서 관리)
- AWS API Gateway (내부 통신 최적화)
- 외부 DNS 서비스 연동

## DB 다이어그램

사용자(User), 자기소개서(Post), 경험(Experience) 데이터를 관리하기 위한 DB 다이어그램.
사용자와 자소서, 경험 간의 1:N 관계를 통해, 개인별 자소서 작성 및 경험 아카이빙을 체계적으로 지원

![Javis 이미지](https://github.com/hojin535/aws-javis/blob/main/readmeImages/javis.png)



## AWS 제한 사항

본 프로젝트는 학교 과제 환경 및 예산 제한으로 인해 다음과 같은 제약사항이 있었음

- ❌ Amazon Cloud Front
- ❌ Route 53
- 💵 예산 최대 50$

이러한 제한사항을 고려하여, 외부 DNS 서비스와 수동 SSL 인증 방식 등을 통해 대안을 마련


## aws 인프라 설계
- S3: 프론트엔드 호스팅
- EC2 + ELB: 백엔드 서버 운영
- RDS (MySQL): 구조화된 데이터 저장
- DynamoDB: 비정형 데이터 저장
- ACM: SSL 인증서 관리
- API Gateway: 내부 통신 비용 절감

![AWS 다이어그램](https://github.com/hojin535/aws-javis/blob/main/readmeImages/aws%20cloud.png)

## 프론트엔드 주요 화면 및 기능

### 주요 화면 소개 (UI/UX)
### 로그인화면 / 회원가입 화면

| 로그인 화면 | 회원가입 화면 |
|-------------|--------------|
| ![로그인화면](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/로그인화면.png) | ![회원가입 화면](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/회원가입%20화면.png) |

### 내 정보

| 내 정보 |
|---------|
| ![내 정보 1](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/내정보1.png) |
| ![내 정보 2](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/내정보2.png) |

### 내 자소서

| 내 자소서 |
|-----------|
| ![내 자소서](https://github.com/hojin535/aws-javis/blob/main/readmeImages//front/내자소서.png) |
| ![내 자소서 카드 추가](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/내자소서%20카드%20추가.png) |

### 내 공고

| 내 공고 |
|---------|
| ![내 공고](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/내공고.png) |
| ![공고 추가](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/공고추가.png) |
| ![공고 내부](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/공고%20내부.png) |

### 에디터

| 에디터 |
|--------|
| ![카드 에디터](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/카드%20에디터.png) |

### 사이드 메뉴

| 내자소서 | 내공고 |
|-------------|-------------|
| ![내 자소서 사이드 메뉴](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/사이드메뉴%20내%20자소서.png) | ![내 공고 사이드 메뉴](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/사이드메뉴%20내공고.png) |

---
### 프론트엔드 제작과정 및 핵심 기술
- #### Debounce

    에디터 부분에서 노션처럼 저장버튼 없이 자동으로 입력 내용을 저장하는 기능을 구현하고자 했다. <br/>
그러나 사용자가 입력할 때마다 서버로 요청을 보내면 트래픽이 과다 발생하고 서버 부하 및 사용자 경험이 저하 될 수 있다고 생각했다.<br/>
이를 해결하기위해 **Debounce 기법**을 적용하여, 입력이 멈춘 후 일정 시간 이후에만 서버 요청을 보내도록 최적화 하였다.
구현 방법으로는 useEffect 훅 내에서 setTimeout과 clearTimeout을 활용하여 입력이 멈춘 후 일정 시간 이후에 서버 요청을 보내도록 하여 불필요한 서버 트래픽을 줄였다.

```
  const putData = async () => {
    try {
      await  fetchData(`/card/${id}`, "PUT",{ title, text })
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  useEffect(() => {
    const delayDebounceTimer = setTimeout(async () => {
      await putData();
      setSave("저장완료");
    }, 1000);

    // Quill 인스턴스에서 텍스트 길이 가져오기
    if (quilRef.current) {
      const editorInstance = quilRef.current.getEditor();
      const length = editorInstance.getLength();
      setTextLength(length - 1);
    }

    return () => clearTimeout(delayDebounceTimer);
  }, [title, text]);
```


### 검색

| 검색 |
|------|
| ![검색창](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/검색창.png) |
| ![태그 검색](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/태그검색.png) |
| ![태그 검색 결과](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/태그%20검색결과.png) |
| ![직접 검색](https://github.com/hojin535/aws-javis/blob/main/readmeImages/front/직접검색.png) |

### 프론트엔드 기술 구조
- **React.js** 
- **Recoil**로 전역 상태 관리 (로그인 정보, 자소서 리스트 등)
- **Material-UI (MUI)**
- **Styled-Components**
- **Axios**
- **React Router**

### 주요 기능 요약
- 사용자 로그인/회원가입 기능 (JWT 기반 인증)
- 자소서 CRUD 기능 (작성, 수정, 삭제)
- 입력 폼 유효성 검증 및 사용자 친화적 피드백 제공
- 반응형 레이아웃 및 모바일 최적화 지원


### 제한사항 극복 과정
- #### DNS,HTTPS 설정 불가 문제
    프로젝트는 수업용 러너 랩으로 진행하여 **Route 53**과 **Amazon CloudFront**를 사용할 수 없었다.
프론트와 백엔드에 HTTPS와 DNS 설정이 필요했기 때문에 외부 DNS 서버를 활용하여 백엔드 로드밸런서와 DNS CNAME 레코드를 등록하였고, SSL 인증서 역시 외부 인증 기관을 통해 발급받아 **AWS Certificate Manager**에 연결하는 방식으로 문제를 해결하였다. <br/>
    또한 Route 53과 IAM 관련 권한 제한으로 인해 AWS Certificate Manager의 자동 인증 기능을 사용할 수 없어, 외부에서 SSL 인증서와 체인 파일을 직접 발급받아 수동 등록하였다.

    아래는 가비아와 zeroSSL을 이용하여 DNS 설정과 인증서 수동 등록 과정이다.
    ![DNS 및 인증서 설정](https://github.com/hojin535/aws-javis/blob/main/readmeImages/DNS-SSL.png)


- ####  프록시 서버 고가용성 및 인증 우회 설정

    S3는 웹호스팅 엔드포인트에서 HTTPS를 직접 지원하지 않기 때문에 nginx 프록시 서버를 EC2 상에 구축하고 SSL 인증서를 적용한 후 요청을 S3로 전달하는 구조로 구성하였다.

    프록시 서버 자체에도 ALB(Applicaion Load Balancer)와 Auto Scaling 적용하여 단일 장애 지점을 제거했다.
    이를 통해 S3의 장점인 고가용성을 유지하면서 HTTPS 인증 문제도 해결할 수 있었다.

---
- ####  프록시 서버 오토스케일링 & 로드밸런서 구성
    <img src="https://github.com/hojin535/aws-javis/blob/main/readmeImages/proxy-autoscaling.png?raw=true" width="700"/>


- ####  ALB(로드밸런서) 상세 설정
    <img src="https://github.com/hojin535/aws-javis/blob/main/readmeImages/proxy-lb-config.png?raw=true" width="700"/>

- ####  nginx를 활용한 프록시 서버 자동 설정 스크립트 (user-data)
    <img src="https://github.com/hojin535/aws-javis/blob/main/readmeImages/proxy-nginx-script.png?raw=true" width="600"/>


- #### 금액절감
    금액적인 부분도 50달러를 초과하면 해당 계정에 접속이 불가했기때문에 글로벌 서비스인 s3와 dynamoDB에 내부통신은 **Gateway VPC Endpoint**를 통해 내부 통신하여 금액적인 부분도 절감했다.




## 소감
매번 프론트엔드 프로젝트만 했었는데 이번엔 백엔드와 AWS 아키텍처까지 직접 구축하면서 새로운 재미를 느낄 수 있었다.<br>
특히 AWS 환경에서 서버를 구성하고 배포하는 과정을 통해, 서비스 운영에 필요한 전체 흐름을 체계적으로 이해할 수 있었다.

또한 제한된 상황 속에서도 문제를 발견하고 대안을 찾아 해결해 나가는 과정이 매우 흥미로웠다.<br/>
홈서버나 로컬 환경에서는 경험할 수 없는 AWS 인프라 비용 최적화와 고가용성 설계에 대해 깊이 있게 이해할 수 있었던 좋은 경험이었다.

debounce를 구현하기 위해 공부하면서 단순히 동작하는 코드 작성을 넘어 
**사용자 경험(UX)을 고려한 성능 최적화**에 대해 고민해보는 계기가 되었다.  

