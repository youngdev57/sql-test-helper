export default [
    {
        id: 20010101,
        question: "다음 SQL문의 실행 결과를 쓰시오.",
        history: "2020년 1회 정보처리기사 필기",
        sql: `SELECT 가격 FROM 도서가격 WHERE 책번호 = (SELECT 책번호 FROM 도서 WHERE 책명='자료구조');`,
        tables: [
            {
                name: "도서",
                table: [
                    ["책번호", "책명"],
                    ["111", "운영체제"],
                    ["222", "자료구조"],
                    ["333", "컴퓨터구조"]
                ]
            }, {
                name: "도서가격",
                table: [
                    ["책번호", "가격"],
                    ["111", "20000"],
                    ["222", "25000"],
                    ["333", "10000"],
                    ["444", "15000"]
                ]
            }
        ],
        result: "25000"
    },
    {
        id: 20010201,
        question: "STUDENT 테이블에서 컴퓨터과 학생 50명, 인터넷과 학생 100명, 사무자동화과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL문의 실행 결과에 따른 튜플의 수는? (단, DEPT 칼럼은 학과명이다.)",
        history: "2020년 1회 정보처리기사 실기",
        sql: `1) SELECT DEPT FROM STUDENT;<br/>2) SELECT DISTINCT DEPT FROM STUDENT;<br/>3) SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '컴퓨터과';`,
        tables: null,
        result: [
            ["1", "200"],
            ["2", "3"],
            ["3", "1"]
        ]
    },
    {
        id: 20020101,
        question: "관계 데이터베이스인 테이블 R1에 대한 아래 SQL 문의 실행결과를 쓰시오.",
        history: "2020년 2회 정보처리기사 필기",
        sql: `SELECT DISTINCT 학년 FROM R1;`,
        tables: [
            {
                name: "R1",
                table: [
                    ["학번", "이름", "학년", "학과", "주소"],
                    ["1000", "홍길동", "1", "컴퓨터공학", "서울"],
                    ["2000", "김철수", "1", "전기공학", "경기"],
                    ["3000", "강남길", "2", "전자공학", "경기"],
                    ["4000", "오말자", "3", "컴퓨터공학", "경기"],
                    ["5000", "장미화", "4", "전자공학", "서울"],
                ]
            }
        ],
        result: [
            ["학년"],
            ["1"],
            ["2"],
            ["3"]
        ]
    },
    {
        id: 20020102,
        question: "다음 R과 S 두 릴레이션에 대한 Division 연산의 수행 결과를 쓰시오.",
        history: "2020년 2회 정보처리기사 필기",
        sql: ``,
        tables: [
            {
                name: "R",
                table: [
                    ["D1", "D2", "D3"],
                    ["a", "1", "A"],
                    ["b", "1", "A"],
                    ["c", "2", "A"],
                    ["d", "2", "B"],
                ]
            },
            {
                name: "S",
                table: [
                    ["D2", "D3"],
                    ["1", "A"]
                ]
            }
        ],
        result: [
            ["D1"],
            ["a"],
            ["b"]
        ]
    },
    {
        id: 20020201,
        question: "학생 테이블은 학번, 이름, 학년, 수강과목, 점수, 연락처를 속성으로 가진다. 아래 조건을 만족하는 SQL문을 작성하시오.",
        history: "2020년 2회 정보처리기사 실기",
        sql: `1) 학생 테이블에서 3, 4학년인 학생의 학번, 이름을 조회한다.<br/>2) IN 연산자를 사용해야 한다.`,
        tables: [
            {
                name: "학생",
                table: [
                    ["학번", "이름", "학년", "수강과목", "점수", "연락처"],
                    ["1000", "김이름", "1", "수학", "90", "010-1111-1111"],
                    ["2000", "장이름", "2", "과학", "95", "010-2222-2222"],
                    ["3000", "허이름", "3", "미술", "90", "010-3333-3333"],
                    ["4000", "조이름", "4", "음악", "95", "010-4444-4444"]
                ]
            }
        ],
        result: "SELECT 학번, 이름 FROM 학생 WHERE 학번 IN (3,4);"
    },
    {
        id: 20020202,
        question: "학생 테이블의 NAME 속성에 IDX_NAME 이름으로 인덱스를 생성하는 SQL문을 작성하시오.",
        history: "2020년 2회 정보처리기사 실기",
        sql: ``,
        tables: [
            {
                name: "학생",
                table: [
                    ["STDID", "NAME", "SCORE", "DEPID"],
                    ["1000", "김이름", "90", "1"],
                    ["2000", "허이름", "95", "2"],
                    ["3000", "조이름", "90", "3"],
                    ["4000", "장이름", "95", "4"]
                ]
            }
        ],
        result: "CREATE INDEX IDX_NAME ON 학생(NAME)"
    },
    {
        id: 20030101,
        question: "다음 SQL문에서 빈칸에 들어갈 내용을 쓰시오.",
        history: "2020년 3회 정보처리기사 필기",
        sql: `UPDATE 회원 ______ 전화번호 = '010-1234' WHERE 회원번호 = 'N4';`,
        tables: null,
        result: "SET"
    },
    {
        id: 20030102,
        question: "DBA가 사용자 PARK에게 테이블 STUDENT의 데이터를 갱신할 수 있는 시스템 권한을 부여하고자 하는 SQL문을 작성하고자 한다. 다음에 주어진 SQL문의 빈칸을 알맞게 채우시오.",
        history: "2020년 3회 정보처리기사 필기",
        sql: `GRANT ( 1 ) ( 2 ) STUDENT TO PARK;`,
        tables: null,
        result: [
            ["1", "UPDATE"],
            ["2", "ON"]
        ]
    },
    {
        id: 20030103,
        question: "다음 SQL문의 실행 결과를 쓰시오.",
        history: "2020년 3회 정보처리기사 필기",
        sql: `SELECT 과목이름 FROM 성적 WHERE EXISTS (<br/>SELECT 학번 FROM 학생 WHERE 학생.학번 = 성적.학번 AND 학생.학과 IN (’전산’, ‘전기’) AND 학생.주소 = ‘경기’);`,
        tables: [
            {
                name: "학생",
                table: [
                    ["학번", "이름", "학년", "학과", "주소"],
                    ["1000", "김철수", "1", "전산", "서울"],
                    ["2000", "고영준", "1", "전기", "경기"],
                    ["3000", "유진호", "2", "전자", "경기"],
                    ["4000", "김영진", "2", "전산", "경기"],
                    ["5000", "정현영", "3", "전자", "서울"]
                ]
            },
            {
                name: "성적",
                table: [
                    ["학번", "과목번호", "과목이름", "학점", "점수"],
                    ["1000", "A100", "자료구조", "A", "91"],
                    ["2000", "A200", "DB", "A+", "99"],
                    ["3000", "A100", "자료구조", "B+", "88"],
                    ["3000", "A200", "DB", "B", "85"],
                    ["4000", "A200", "DB", "A", "94"],
                    ["4000", "A300", "운영체제", "B+", "89"],
                    ["5000", "A300", "운영체제", "B", "88"]
                ]
            },
        ],
        result: [
            ["과목이름"],
            ["DB"],
            ["DB"],
            ["운영체제"]
        ]
    },
    {
        id: 20030201,
        question: "다음 조건을 만족하면서, 과목별 점수의 평균이 90이 상인 과목이름, 최소점수, 최대점수를 구하는 SQL문을 작성하시오.",
        history: "2020년 3회 정보처리기사 실기",
        sql: `- 대소문자를 구분하지 않는다.<br/>- WHERE 구분을 사용하지 않는다.<br/>- GROUP BY, HAVING 구문을 반드시 사용한다.<br/>- 세미콜론(;)은 생략 가능하다.<br/>- 별칭(AS)을 사용해야 한다.`,
        tables: [
            {
                name: "성적",
                table: [
                    ["과목코드", "과목이름", "학점", "점수"],
                    ["1000", "컴퓨터과학", "A+", "95"],
                    ["2000", "운영체제", "B+", "85"],
                    ["1000", "컴퓨터과학", "B+", "85"],
                    ["2000", "운영체제", "B", "80"]
                ]
            },
            {
                name: "결과",
                table: [
                    ["과목이름", "최소점수", "최대점수"],
                    ["컴퓨터과학", "85", "95"]
                ]
            }
        ],
        result: "SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90;"
    },
    {
        id: 20030202,
        question: "학생 테이블에서 이름이 민수인 튜플을 삭제하는 SQL문을 작성하시오.",
        history: "2020년 3회 정보처리기사 실기",
        sql: ``,
        tables: [
            {
                name: "학생",
                table: [
                    ["학번", "이름", "점수", "과목이름"],
                    ["1000", "김정미", "90", "알고리즘"],
                    ["2000", "강은미", "95", "데이터베이스"],
                    ["3000", "홍길동", "90", "전산수학"],
                    ["4000", "민수", "95", "운영체제"]
                ]
            }
        ],
        result: "DELETE FROM 학생 WHERE 이름 = '민수';"
    },
    {
        id: 20030203,
        question: "학생 테이블에 주소 속성을 추가하는 SQL문을 작성하시오.",
        history: "2020년 3회 정보처리기사 실기",
        sql: `( 1 ) TABLE 학생 ( 2 ) 주소 VARCHAR(20);`,
        tables: null,
        result: [
            ["1", "ALTER"],
            ["2", "ADD"]
        ]
    },
    {
        id: 20040201,
        question: "다음 조건을 만족하면서 학과별로 튜플 수가 얼마인지 구하는 SQL문을 작성하시오.",
        history: "2020년 4회 정보처리기사 실기",
        sql: `- 대소문자를 구분하지 않는다.<br/>- WHERE 구분을 사용하지 않는다.<br/>- GROUP BY를 사용한다.<br/>- 세미콜론(;)은 생략 가능하다.<br/>- 별칭(AS)을 사용해야 한다. (별칭 사용 시 별칭은 작은 따옴표를 써야 함)<br/>- 집계 함수를 사용해야 한다.`,
        tables: [
            {
                name: "학생",
                table: [
                    ["학과", "학생"],
                    ["전기", "이순신"],
                    ["컴퓨터", "안중근"],
                    ["컴퓨터", "윤봉길"],
                    ["전자", "이봉창"],
                    ["전자", "강우규"]
                ]
            },
            {
                name: "결과",
                table: [
                    ["학과", "학과별튜플수"],
                    ["전기", "1"],
                    ["컴퓨터", "2"],
                    ["전자", "2"]
                ]
            }
        ],
        result: "SELECT 학과, COUNT(학과) AS 학과별튜플수 FROM 학생 GROUP BY 학과;"
    },
    {
        id: 21010101,
        question: "다음 질의를 실행할 때 SQL의 실행 결과를 쓰시오.",
        history: "2021년 1회 정보처리기사 필기 변형",
        sql: `SELECT * FROM 공급자 WHERE 공급자명 LIKE '%신%';`,
        tables: [
            {
                name: "공급자",
                table: [
                    ["공급자번호", "공급자명", "위치"],
                    ["16", "대신공업사", "수원"],
                    ["27", "삼진사", "서울"],
                    ["39", "삼양사", "인천"],
                    ["62", "진아공업사", "대전"],
                    ["70", "신촌상사", "서울"]
                ]
            }
        ],
        result: [
            ["공급자번호", "공급자명", "위치"],
            ["16", "대신공업사", "수원"],
            ["70", "신촌상사", "서울"]
        ]
    },
    {
        id: 21010102,
        question: "아래의 SQL문을 실행한 결과를 쓰시오.",
        history: "2021년 1회 정보처리기사 필기",
        sql: `SELECT 이름 FROM R1 WHERE 학번 IN (
            SELECT 학번 FROM R2 WHERE 과목번호 = 'C100');`,
        tables: [
            {
                name: "R1",
                table: [
                    ["학번", "이름", "학년", "학과", "주소"],
                    ["1000", "홍길동", "4", "컴퓨터", "서울"],
                    ["2000", "김철수", "3", "전기", "경기"],
                    ["3000", "강남길", "1", "컴퓨터", "경기"],
                    ["4000", "오말자", "4", "컴퓨터", "경기"],
                    ["4000", "장미화", "2", "전자", "서울"],
                ]
            },
            {
                name: "R2",
                table: [
                    ["학번", "과목번호", "학점", "점수"],
                    ["1000", "C100", "A", "91"],
                    ["1000", "C200", "A", "94"],
                    ["2000", "C300", "B", "85"],
                    ["3000", "C400", "A", "90"],
                    ["3000", "C500", "C", "75"],
                    ["3000", "C100", "A", "90"],
                    ["4000", "C400", "A", "95"],
                    ["4000", "C500", "A", "91"],
                    ["4000", "C100", "B", "80"],
                    ["4000", "C200", "C", "74"],
                    ["5000", "C400", "B", "85"],
                ]
            }
        ],
        result: [
            ["이름"],
            ["홍길동"],
            ["강남길"],
            ["오말자"]
        ]
    },
    {
        id: 21010201,
        question: "다음 SQL 실행 결과를 숫자만 쓰시오.",
        history: "2021년 1회 정보처리기사 실기",
        sql: `SELECT COUNT(*) FROM 급여 WHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;`,
        tables: [
            {
                name: "EMP",
                table: [
                    ["EMPNO", "SAL"],
                    ["100", "1000"],
                    ["200", "3000"],
                    ["300", "1500"],
                ]
            }
        ],
        result: "1"
    },
    {
        id: 21020101,
        question: "테이블 R1, R2에 대하여 다음 SQL문의 결과를 쓰시오.",
        history: "2021년 2회 정보처리기사 필기",
        sql: `(SELECT 학번 FROM R1) INTERSECT (SELECT 학번 FROM R2)`,
        tables: [
            {
                name: "R1",
                table: [
                    ["학번", "학점수"],
                    ["20201111", "15"],
                    ["20202222", "20"]
                ]
            },
            {
                name: "R2",
                table: [
                    ["학번", "과목번호"],
                    ["20202222", "CS200"],
                    ["20203333", "CS300"]
                ]
            }
        ],
        result: [
            ["학번"],
            ["20202222"]
        ]
    },
    {
        id: 21020102,
        question: "다음 테이블 R1, R2에 대하여 SQL문을 실행했을 때 그 결과를 쓰시오.",
        history: "2021년 2회 정보처리기사 필기 변형",
        sql: `SELECT 과목번호, 과목이름 FROM R1, R2<br/>WHERE R1.학번 = R2.학번 AND R1.학과 = '전자공학' AND R1.이름 = '강남길';`,
        tables: [
            {
                name: "R1",
                table: [
                    ["학번", "이름", "학년", "학과", "주소"],
                    ["1000", "홍길동", "1", "컴퓨터공학", "서울"],
                    ["2000", "김철수", "1", "전기공학", "경기"],
                    ["3000", "강남길", "2", "전자공학", "경기"],
                    ["4000", "오말자", "2", "컴퓨터공학", "경기"],
                    ["5000", "장미화", "3", "전자공학", "서울"]
                ]
            },
            {
                name: "R2",
                table: [
                    ["학번", "과목번호", "과목이름", "학점", "점수"],
                    ["1000", "C100", "컴퓨터구조", "A", "91"],
                    ["2000", "C200", "데이터베이스", "A+", "99"],
                    ["3000", "C100", "컴퓨터구조", "B+", "89"],
                    ["3000", "C200", "데이터베이스", "B", "85"],
                    ["4000", "C200", "데이터베이스", "A", "93"],
                    ["4000", "C300", "운영체제", "B+", "88"],
                    ["5000", "C300", "운영체제", "B", "82"]
                ]
            }
        ],
        result: [
            ["과목번호", "과목이름"],
            ["C100", "컴퓨터구조"],
            ["C200", "데이터베이스"]
        ]
    },
    {
        id: 21020201,
        question: "다음은 테이블을 수정할 때의 상황이다. SQL 보기에서 괄호 안에 알맞는 문장을 작성하시오.",
        history: "2021년 2회 정보처리기사 실기",
        sql: `( 1 ) 테이블명 ( 2 ) 컬럼 = 값 WHERE 점수 >= 90;`,
        tables: null,
        result: [
            ["1", "UPDATE"],
            ["2", "SET"]
        ]
    },
    {
        id: 21020202,
        question: "다음 SQL 보기에서 JOIN 할 경우 괄호 안에 알맞는 문장을 작성하시오.",
        history: "2021년 2회 정보처리기사 실기",
        sql: `SELECT ... FROM 학생정보 a JOIN 학과정보 b ( 1 ) a.학과 = b.( 2 )`,
        tables: null,
        result: [
            ["1", "ON"],
            ["2", "학과"]
        ]
    },
    {
        id: 21020203,
        question: "다음 SQL문에서 괄호 안에 알맞은 답안을 작성하시오.",
        history: "2021년 2회 정보처리기사 실기",
        sql: `SELECT ... FROM ... WHERE 이름 LIKE ( 1 ) ORDER BY ( 2 )`,
        tables: [
            {
                name: "결과",
                table: [
                    ["이름"],
                    ["이순신"],
                    ["이강훈"]
                ]
            }
        ],
        result: [
            ["1", "이%"],
            ["2", "DESC"]
        ]
    },
    {
        id: 21030101,
        question: "다음 두 릴레이션 R1과 R2의 카티션 프로덕트 수행 결과를 쓰시오.",
        history: "21년 3회 정보처리기사 필기",
        sql: ``,
        tables: [
            {
                name: "R1",
                table: [
                    ["학년"],
                    ["1"],
                    ["2"],
                    ["3"]
                ]
            },
            {
                name: "R2",
                table: [
                    ["학과"],
                    ["컴퓨터"],
                    ["국문"],
                    ["수학"]
                ]
            }
        ],
        result: [
            ["학년", "학과"],
            ["1", "컴퓨터"],
            ["1", "국문"],
            ["1", "수학"],
            ["2", "컴퓨터"],
            ["2", "국문"],
            ["2", "수학"],
            ["3", "컴퓨터"],
            ["3", "국문"],
            ["3", "수학"],
        ]
    },
    {
        id: 21030201,
        question: "다음은 테이블에서 조건값을 실행한 화면이다. 이에 대한 알맞는 결과 값을 작성하시오.",
        history: "2021년 3회 정보처리기사 실기",
        sql: `SELECT COUNT(*) CNT FROM T1 A CROSS JOIN T2 B WHERE A.NAME LIKE B.RULE;`,
        tables: [
            {
                name: "T1",
                table: [
                    ["CODE", "NAME"],
                    ["3258", "smith"],
                    ["4324", "allen"],
                    ["5432", "scott"]
                ]
            },
            {
                name: "T2",
                table: [
                    ["NO", "RULE"],
                    ["12", "s%"],
                    ["32", "%t%"]
                ]
            }
        ],
        result: "4"
    },
    {
        id: 22010101,
        question: "테이블 R과 S에 대한 SQL문이 실행되었을 때, 실행 결과를 쓰시오.",
        history: "2022년 1회 정보처리기사 필기",
        sql: `SELECT A FROM R UNION ALL SELECT A FROM S;`,
        tables: [
            {
                name: "R",
                table: [
                    ["A", "B"],
                    ["1", "A"],
                    ["3", "B"]
                ]
            },
            {
                name: "S",
                table: [
                    ["A", "B"],
                    ["1", "A"],
                    ["2", "B"]
                ]
            }
        ],
        result: [
            ["1"],
            ["3"],
            ["1"],
            ["2"]
        ]
    },
    {
        id: 22010201,
        question: "다음 SQL 결과에 알맞는 쿼리를 작성하시오.",
        history: "2022년 1회 정보처리기사 실기",
        sql: `SELECT name, score FROM 성적 ( 1 ) BY ( 2 ) ( 3 )`,
        tables: [
            {
                name: "성적",
                table: [
                    ["index", "name", "score"],
                    ["1", "Kim", "95"],
                    ["2", "Gun", "90"],
                    ["3", "Son", "80"],
                    ["4", "Jung", "60"]
                ]
            }
        ],
        result: [
            ["1", "ORDER"],
            ["2", "score"],
            ["3", "DESC"]
        ]
    },
    {
        id: 22020101,
        question: "사용자 'PARK'에게 테이블을 생성할 수 있는 권한을 부여하기 위한 SQL문의 구성으로 빈칸에 적합한 내용을 작성하시오.",
        history: "2022년 2회 정보처리기사 필기",
        sql: `GRANT ______ PARK;`,
        tables: null,
        result: "CREATE TABLE TO"
    },
    {
        id: 22020201,
        question: "H 회사의 전체 제품 단가보다 큰 제품을 출력하고자 한다. 괄호 안에 들어갈 알맞는 용어를 작성하시오.",
        history: "2022년 2회 정보처리기사 실기",
        sql: `SELECT 제조사, 제품명, 단가 FROM 제품<br/>WHERE 단가 > ______ (SELECT 단가 FROM 제품 WHERE 제조사 = 'H'`,
        tables: [
            {
                name: "제품",
                table: [
                    ["제조사", "제품명", "단가"],
                    ["A", "과자", "1,000"],
                    ["B", "초콜릿", "6,000"],
                    ["H", "사탕", "2,000"],
                    ["C", "아이스크림", "5,000"],
                    ["H", "사탕", "3,000"],
                ]
            }
        ],
        result: "ALL"
    },
    {
        id: 22020202,
        question: "다음 SQL 결과에 알맞는 답을 작성하시오.",
        history: "2022년 2회 정보처리기사 실기",
        sql: `SELECT COUNT(col2) FROM 테이블 WHERE col1 IN(2,3) OR col2 IN(3,5)`,
        tables: [
            {
                name: "테이블",
                table: [
                    ["index", "col1", "col2"],
                    ["1", "2", "Null"],
                    ["2", "3", "6"],
                    ["3", "5", "5"],
                    ["4", "6", "3"],
                    ["5", "Null", "3"]
                ]
            }
        ],
        result: "4"
    },
    {
        id: 22020203,
        question: "다음 테이블에서 πTTL(employee)에 대한 연산 결과 값을 작성하시오.",
        history: "2022년 2회 정보처리기사 실기",
        sql: ``,
        tables: [
            {
                name: "employee",
                table: [
                    ["INDEX", "AGE", "TTL"],
                    ["1", "55", "부장"],
                    ["2", "35", "대리"],
                    ["3", "42", "과장"],
                    ["4", "45", "차장"]
                ]
            },
            {
                name: "결과",
                table: [
                    ["1"],
                    ["2"],
                    ["3"],
                    ["4"],
                    ["5"]
                ]
            }
        ],
        result: [
            ["1", "TTL"],
            ["2", "부장"],
            ["3", "대리"],
            ["4", "과장"],
            ["5", "차장"]
        ]
    }
]