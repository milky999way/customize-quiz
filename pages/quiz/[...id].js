import React, { useState, useEffect } from 'react';

import config from '../../config';
import Layout from '../../components/quiz/layout';
import Loading from '../../components/quiz/view/loading';

import ENFJ from '../../components/quiz/result/ENFJ';
import ENFP from '../../components/quiz/result/ENFP';
import ENTJ from '../../components/quiz/result/ENTJ';
import ENTP from '../../components/quiz/result/ENTP';
import ESFJ from '../../components/quiz/result/ESFJ';
import ESFP from '../../components/quiz/result/ESFP';
import ESTJ from '../../components/quiz/result/ESTJ';
import ESTP from '../../components/quiz/result/ESTP';

import INFJ from '../../components/quiz/result/INFJ';
import INFP from '../../components/quiz/result/INFP';
import INTJ from '../../components/quiz/result/INTJ';
import INTP from '../../components/quiz/result/INTP';
import ISFJ from '../../components/quiz/result/ISFJ';
import ISFP from '../../components/quiz/result/ISFP';
import ISTJ from '../../components/quiz/result/ISTJ';
import ISTP from '../../components/quiz/result/ISTP';


export default function QuizView({ staticPath, query, post, realServerDetectIp, devServerDetectIp }) {
  const [activeChapter, setActiveChapter] = useState();


  const [mbtiType, setMbtiType] = useState(["", "", "", ""]);
  
  const [countE, setCountE] = useState(1);
  const [countS, setCountS] = useState(1);
  const [countT, setCountT] = useState(1);
  const [countJ, setCountJ] = useState(1);
  const [countPrefer, setCountPrefer] = useState(1);

  const [scoreE, setScoreE] = useState([]);
  const [scoreS, setScoreS] = useState([]);
  const [scoreT, setScoreT] = useState([]);
  const [scoreJ, setScoreJ] = useState([]);
  const [scorePrefer, setScorePrefer] = useState([]);

  const [paramMbti, setParamMbti] = useState();
  const [paramPreference, setParamPreference] = useState();



  const checkMbtiE = (sum, count) => {
    if (sum/count >= 2.5) {
      return 'E';
    } else {
      return 'I';
    }
  }
  const checkMbtiS = (sum, count) => {
    if (sum/count >= 2.5) {
      return 'S';
    } else {
      return 'N';
    }
  }
  const checkMbtiT = (sum, count) => {
    if (sum/count >= 2.5) {
      return 'T';
    } else {
      return 'F';
    }
  }
  const checkMbtiJ = (sum, count) => {
    if (sum/count >= 2.5) {
      return 'J';
    } else {
      return 'P';
    }
  }

  

  const InProgress = (chapterIndex, chapterType, answerScore, e) => {
    e.preventDefault();
    // console.log(answerIndex);
    // console.log(typeMbti);
    // console.log(typePreference);

    // setTypeMbti(["a", "b", "c", "d"]);
    // console.log(typeMbti.join(""));
    // console.log(chapterType);
    // console.log(answerIndex);

    if (chapterType === 'extroversion') {
      /* E항목 선택값 합계 */
      scoreE.push(answerScore);
      let sumE = scoreE.reduce((sumValue, currValue) => { return sumValue + currValue });
      /* E항목 선택 횟수 */
      setCountE(countE+1);
      let mbtiValue = checkMbtiE(sumE, countE);
      mbtiType.splice(0, 1, mbtiValue);
    }
    if (chapterType === 'sensing') {
      /* S항목 선택값 합계 */
      scoreS.push(answerScore);
      let sumS = scoreS.reduce((sumValue, currValue) => { return sumValue + currValue });
      /* S항목 선택 횟수 */
      setCountS(countS+1);
      let mbtiValue = checkMbtiS(sumS, countS);
      mbtiType.splice(1, 1, mbtiValue);
    }
    if (chapterType === 'thinking') {
      /* T항목 선택값 합계 */
      scoreT.push(answerScore);
      let sumT = scoreT.reduce((sumValue, currValue) => { return sumValue + currValue });
      /* T항목 선택 횟수 */
      setCountT(countT+1);
      let mbtiValue = checkMbtiT(sumT, countT);
      mbtiType.splice(2, 1, mbtiValue);
    }
    if (chapterType === 'judging') {
      /* J항목 선택값 합계 */
      scoreJ.push(answerScore);
      let sumJ = scoreJ.reduce((sumValue, currValue) => { return sumValue + currValue });
      /* J항목 선택 횟수 */
      setCountJ(countJ+1);
      let mbtiValue = checkMbtiJ(sumJ, countJ);
      mbtiType.splice(3, 1, mbtiValue);
    }
    //////////////////////////////////////////// console.log(sumE);

    let preferNum = 0;
    if (chapterType === 'preference') {
      /* 취향항목 선택값 합계 */
      scorePrefer.push(answerScore);
      let sumPrefer = scorePrefer.reduce((sumValue, currValue) => { return sumValue + currValue });
      /* 취향항목 선택 횟수 */
      setCountPrefer(countPrefer+1);
      let avgPrefer = sumPrefer/countPrefer;
      let avgPreferValue = Math.round(avgPrefer * 10) / 10;
      preferNum += avgPreferValue;
    }
    setParamMbti(mbtiType.join(""));
    setParamPreference(preferNum);


    setActiveChapter(chapterIndex);
  }


  // const onLoading = (e) => {
  //   e.preventDefault();
  //   console.log('aaa');
  //   const aaa = e.target.parentNode;
  //   setInterval(() => {
  //     aaa.classList.remove('loading');
  //     aaa.classList.remove('start');
  //     // window.location.href = '/quiz/1?mbti=ENFJ&preference=11';
  //     setTimeout(() => {
  //       aaa.classList.add('loading');
  //     }, 750)
  //   }, 3000);
  // }


  
  // console.log(start);
  // console.log(score);
  // console.log(navArray);
  // console.log(activeChapter);
  // console.log(query.mbti);
  const lastChapter = post[0].chapter.length;
  console.log('===== real server detect IP: '+realServerDetectIp+' / dev server detect IP: '+devServerDetectIp+' =====');
  return (
    <Layout staticPath={staticPath}>
      <div className="container_in">


        {realServerDetectIp === '222.96.157.2' || realServerDetectIp === '221.148.196.125' || devServerDetectIp === 'localhost' ?



          <div className="contents">
            {query.mbti === undefined || query.preference === undefined ?
            <div className="contents_qna">
              <ul className="qna">

                <li className={activeChapter === undefined ? "qna_start on" : "qna_start"}>
                  <h2><img src={staticPath + "/assets/img/title_sub.png"} alt={post[0].title} /></h2>
                  <h1><img src={staticPath + "/assets/img/title.png"} alt="xxx 캐릭터 테스트" /></h1>
                  <div className="img_mbti"><img src={staticPath + "/assets/img/main.png"} alt="MBTI" /></div>
                  <div className="btn_start"><button onClick={(e) => InProgress(0, "", 0, e)}>시작하기</button></div>
                  <p className="caution">* 해당 콘텐츠는 사내용으로 제작되었으므로, 화면 캡처 및 공유는 지양해 주십시오.</p>
                </li>

                {post[0].chapter.map((chapterData, i) => {
                  const qIndex = i+1;
                  const qImg = post[0].img.filter(url => url.src.split('/').reverse()[0] === 'Q'+qIndex+'.gif');
                  const qImgSrc = qImg[0] !== undefined ? qImg[0].src : null;
                  const navList = post[0].chapter.map((nav, n) => { return n });

                  return (
                    <li className={activeChapter === i ? "qna_chapter on" : "qna_chapter"} key={i}>
                      <nav className="progress">
                        <ul>
                          {navList.map((j) => {
                            return (
                              <li key={j} className={activeChapter === j ? "active" : null}>{j+1}</li>
                            )
                          })}
                        </ul>
                      </nav>
                      <strong className="question">
                        <span>Q.</span>
                        {chapterData.question}
                      </strong>
                      <div className="picture">
                        <img src={qImgSrc} alt="" />
                      </div>
                      <ul className="answer">
                        {chapterData.answers.map((answerData, k) => {
                          return (
                            <li key={k}><button onClick={(e) => InProgress(qIndex, chapterData.type, k+1, e)}>{answerData.answer}</button></li>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}

                {activeChapter === lastChapter ?
                  <Loading staticPath={staticPath} paramMbti={paramMbti} paramPreference={paramPreference} /> : null
                }
                {/* <li className={activeChapter === lastChapter ? 'on' : null}>
                  <div className="qna_result_loading loading start" onLoad={onLoading}>
                    <p>나와 닮은 xxx<br />캐릭터 찾는 중</p>
                    <img src={staticPath + "/assets/img/img_loading1.png"} alt="" className="loading1" />
                    <img src={staticPath + "/assets/img/img_loading2.png"} alt="" className="loading2" />
                    <img src={staticPath + "/assets/img/img_loading3.png"} alt="" className="loading3" />
                  </div>
                </li> */}

              </ul>
            </div>



            :
            <div className="contents_result">
              {query.mbti === 'ENFJ' ?
                <ENFJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ENFP' ?
                <ENFP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ENTJ' ?
                <ENTJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ENTP' ?
                <ENTP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ESFJ' ?
                <ESFJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ESFP' ?
                <ESFP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ESTJ' ?
                <ESTJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ESTP' ?
                <ESTP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'INFJ' ?
                <INFJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'INFP' ?
                <INFP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'INTJ' ?
                <INTJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'INTP' ?
                <INTP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ISFJ' ?
                <ISFJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ISFP' ?
                <ISFP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ISTJ' ?
                <ISTJ staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : query.mbti === 'ISTP' ?
                <ISTP staticPath={staticPath} mbti={query.mbti} preference={query.preference} />

              : 
                <div className="result">
                  <div className="unknown">
                    <p>결과가 존재하지않습니다. 다시 시도해주세요.</p>
                    <a href="/quiz/1" className="btn">처음으로</a>
                  </div>
                </div>
              }
            </div>
            }
          </div>



          :
          <div className="contents">
            <p style={{ margin: '50px 0', textAlign: 'center' }}>xxxIP의 자세한 콘텐츠를 확인하고 싶으시면, 사내망으로 접속해주세요 :)</p>
          </div>
        }



      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params, req, query }) {
  const realServerDetectIp = req.headers['x-forwarded-for'] ? (req.headers['x-forwarded-for']).split(',')[0] : ''; // 사내IP만 접속을 위한 설정(rc/live 환경)
  const devServerDetectIp = req.headers['x-apigateway-event'] ? JSON.parse(decodeURIComponent(req.headers['x-apigateway-event']))['requestContext']['identity']['sourceIp'] : ''; // 로컬-개발환경 자신의 IP만 허용하기 위한 변수
  // console.log('===== (real)Nextjs 라우팅-서버사이드 체크 IP: '+realServerCheckIp+' =====');
  // console.log('===== (dev)Nextjs 라우팅-서버사이드 체크 IP: '+devServerCheckIp+' =====');

  const res = config.serverName === 'www.xxx.com' ? await fetch(`https://xxx.xxx.com/quiz-data?index=${params.id.join('/')}`) : await fetch(`https://rc-xxx.xxx.com/quiz-data?index=${params.id.join('/')}`);
  const post = await res.json();

  return {
    props: {
      staticPath: config.staticPath,
      query,
      post: post !== undefined ? post : null,
      realServerDetectIp: realServerDetectIp !== undefined ? realServerDetectIp : null,
      devServerDetectIp: devServerDetectIp !== undefined ? devServerDetectIp : null,
    },
  }
}