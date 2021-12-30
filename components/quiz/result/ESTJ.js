import React from 'react';
import Feature from './feature';

export default function ESTJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ESTJ 약자에게 따뜻한
        <strong>빅</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_vic.png"} alt="빅" /></div>
      <div className="character_text">
        <p className="text">
          첫인상은 다소 무서워 보이지만
          알면 알수록 다정한 성격이다.
        </p>
        <p className="text">
          카리스마 있는 성격으로
          추진력과 결단력이 있으며,
          항상 자신의 선택에 자신감이 있다.
        </p>
        <p className="text">
          도움이 필요하면 먼저 나서서 도와주는 스타일.
          쑥스러움이 많아 감사 인사를 받으면 어쩔 줄 모른다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
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
        ESTJ 가면 쓴 영웅
        <strong>리키</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_ricky.png"} alt="리키" /></div>
      <div className="character_text">
        <p className="text">
          평소 말이 별로 없고 쿨한 성격이다.
          불의를 보면 가만두지 못하고
          꼭 정의구현을 해야만 한다!
        </p>
        <p className="text">
          냉철한 성격으로 현실적인 사고방식을 가졌다.
          고민 상담 시 객관적으로 조언해 준다.
        </p>
        <p className="text">
          일 못 하는 사람을 지켜보는 것을
          참지 못하여 자신이 대신 해결하는 유형.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
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
        ESTJ 이 구역의 의리왕
        <strong>벨</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_bell.png"} alt="벨" /></div>
      <div className="character_text">
        <p className="text">
          차분하고 긍정적인 성격의 소유자.
        </p>
        <p className="text">
          고민 상담해 주는 것을 좋아한다.
          주변 상황을 빠르고, 정확하게 파악하여
          결론을 내리는 능력이 있다.
        </p>
        <p className="text">
          정직하고 헌신적인 스타일로,
          주변 친구를 잘 챙기며, 늘 응원하고 믿어준다.
          (단, 위로를 잘하는 편은 아니다)
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
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
        ESTJ 모 아니면 도
        <strong>쿠쿠</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_kuku.png"} alt="쿠쿠" /></div>
      <div className="character_text">
        <p className="text">
          애매한 것을 극도로 싫어한다.
          호불호가 확실하여
          고집이 세다는 이야기를 종종 듣는다.
        </p>
        <p className="text">
          무뚝뚝한 성격으로, 사람을 사귈 때
          다정한 성격보단 똑 부러지는 성격을 선호한다. 
        </p>
        <p className="text">
          자기발전을 위해 새로운 것에
          도전하는 것을 즐기는 스타일!
          타인에게 인정받는 것을 좋아한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
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