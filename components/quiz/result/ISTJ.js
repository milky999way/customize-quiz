import React from 'react';
import Feature from './feature';

export default function ISTJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISTJ 병적으로 깔끔한
        <strong>무하</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_muha.png"} alt="무하" /></div>
      <div className="character_text">
        <p className="text">
          집에 있으면 쉬지 않고 청소할 만큼
          깔끔한 성격의 소유자.
        </p>
        <p className="text">
          집에 불필요한 물건이 있는 것은 딱 질색!
          청소하면서 발견하는 불필요한 물건들을
          중고장터에서 판매하거나,
          필요한 사람에게 나눠주는 것을 좋아한다.
        </p>
        <p className="text">
          도움을 받으면 반드시 은혜를 갚는 성격이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
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
        ISTJ 빈틈없이 완벽한
        <strong>제프</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_jeff.png"} alt="제프" /></div>
      <div className="character_text">
        <p className="text">
          궁금한 것이 많아 늘 탐구하는 스타일. 
          목표가 생기면 굉장한 집중력을 발휘한다.
        </p>
        <p className="text">
          타인과 함께 일하는 것보다
          혼자서 일하는 것이 더 편하고, 업무효율이 높다.
        </p>
        <p className="text">
          굉장히 꼼꼼하고, 깔끔하며 냉철한 성격이다.
          하지만 마음은 따뜻한 츤데레 유형.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
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
        ISTJ 덕질이 최고
        <strong>부기</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_boogy.png"} alt="부기" /></div>
      <div className="character_text">
        <p className="text">
          오로지 자신이 좋아하는 분야만을
          파고드는 덕후 기질이 있다.
        </p>
        <p className="text">
          굉장한 집중력의 소유자라서 한번 집중하면
          주변 소리를 듣지 못하는 정도라고...
        </p>
        <p className="text">
          한번 시작하면 끝을 봐야 하는 성격이다.
          말수가 적고, 과묵하므로
          다소 능력이 저평가되는 편이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
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
        ISTJ 감정표현이 서툰
        <strong>오비스</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_ovis.png"} alt="오비스" /></div>
      <div className="character_text">
        <p className="text">
          말없이 365일 무표정으로
          무슨 생각을 하는지 알 수 없는 신비주의자.
        </p>
        <p className="text">
          굉장히 현실적으로 살아가는 유형이다.
        </p>
        <p className="text">
          뚜렷하게 좋아하는 것은 없으나, 수집하는 것이 취미!
          소소한 물건일지라도 '나중에 쓸모 있겠지'라며 모아둔다.
          모아둔 물건을 버리기 어려워한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
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