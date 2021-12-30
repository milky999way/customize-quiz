import React from 'react';
import Feature from './feature';

export default function ISFJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISFJ 성실의 아이콘
        <strong>타이고</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_tygo.png"} alt="타이고" /></div>
      <div className="character_text">
        <p className="text">
          검소하고 집념이 강하며, 올곧아서
          누구에게나 신뢰를 받는 스타일.
        </p>
        <p className="text">
          규칙과 법규를 준수하는 것을 중요하게 생각한다.
          자신이 해야 할 일을 묵묵히 해나가는 유형.
        </p>
        <p className="text">
          공적으로는 냉정하게 비치지만
          내 사람들에겐 따뜻하다!
          잘난 체하는 사람을 좋아하지 않는다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>
    
    : preferenceNum >= 2 && preferenceNum < 2.5 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISFJ 수줍은 츤데레
        <strong>로니</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_rony.png"} alt="로니" /></div>
      <div className="character_text">
        <p className="text">
          타인에게 자신의 속마음을 쉽게 터놓지 못한다.
          감정 표현이 서툴러 보고 싶은 상대에게
          부끄러워서 보고 싶단 말을 하지 못하는 성격.
        </p>
        <p className="text">
          누군가 자신을 필요로 할 때 가장 기뻐한다.
        </p>
        <p className="text">
          단독으로 주목받는 것을 부담스러워한다.
          하지만 외모 관리에 관심이 많다!
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>
    
    : preferenceNum >= 2.5 && preferenceNum <= 3 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISFJ 완벽주의자
        <strong>오키</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_okee.png"} alt="오키" /></div>
      <div className="character_text">
        <p className="text">
          늘 열심히 하려는 노력형 완벽주의자!
          목표를 세우고 달성시키는 것을 좋아한다.
        </p>
        <p className="text">
          제시간 안에 끝내지 못할 것 같으면
          쉬는 시간에도 일하는 스타일.
        </p>
        <p className="text">
          인간관계에서 스트레스를 많이 받으며,
          팀으로 일을 진행하는 것보다
          혼자서 하는 일을 더 편하다 느낀다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
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
        ISFJ 헌신적인
        <strong>오레스</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_ores.png"} alt="오레스" /></div>
      <div className="character_text">
        <p className="text">
          자신의 사람이라고 느끼는 사람에게
          매우 헌신적으로 대한다.
        </p>
        <p className="text">        
          주변 사람들이 때때로 이러한 호의를
          당연시 여겨, 이로 인한 상처를 받기도 한다.
        </p>
        <p className="text">
          현실적이며, 실용주의적인 성격으로
          목표를 달성하기 위해
          시간과 노력을 낭비하지 않으려 노력한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
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