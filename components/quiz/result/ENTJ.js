import React from 'react';
import Feature from './feature';

export default function ENTJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ENTJ 한다면 한다
        <strong>그리포</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_greepo.png"} alt="그리포" /></div>
      <div className="character_text">
        <p className="text">
          맡은 일은 끝까지 해내고 만다.
          시도도 해보지도 않고
          "못한다"는 말을 가장 싫어한다.
        </p>
        <p className="text">
          이 유형의 경우, 운동을 시작하면
          중도 포기, 요요현상은 상상할 수 없다.
        </p>
        <p className="text">
          매의 눈으로 예리하게 상황을 판단하며
          논리를 기반으로 대화를 하는 스타일이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>

    : preferenceNum >= 2 && preferenceNum <= 3 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ENTJ 본투비 리더
        <strong>하라비</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_harabi.png"} alt="하라비" /></div>
      <div className="character_text">
        <p className="text">
          나서는 것을 선호하진 않지만
          남들이 하는 게 마음에 들지 않을 경우
          자신이 총대를 메고 이끄는 스타일!
        </p>
        <p className="text">
          겉으로 보면 카리스마가 넘치는데
          사석에서는 무장해제 되는 반전매력의 소유자.
        </p>
        <p className="text">
          호기심이 많고, 새로운 것에
          도전하는 것을 두려워하지 않는 편이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>
    
    : preferenceNum > 3 && preferenceNum <= 4 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ENTJ 빠르고 효율적인
        <strong>쳇</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_chet.png"} alt="쳇" /></div>
      <div className="character_text">
        <p className="text">
          빠르고 효율적인 것을 선호하는 유형.
          비효율적인 관습을 가장 싫어한다.
        </p>
        <p className="text">
          일을 중요시하는 완벽주의자로
          항상 일 또는 자기 계발을 하고 있다.
          심지어 꿈에서 일을 할 때도 있다고...
        </p>
        <p className="text">
          그래서 일 못 하는 것을 싫어한다.
          자신의 한계를 느끼면 자괴감에 빠진다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>
    
    :
    <div className="result">
      <div className="unknown">
        <p>결과가 존재하지않습니다. 다시 시도해주세요.</p>
        <a href="/quiz/1" className="btn">처음으로</a>
      </div>
    </div>
    }
    </>
  )
}