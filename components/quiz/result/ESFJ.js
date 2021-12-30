import React from 'react';
import Feature from './feature';

export default function ESFJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ESFJ 친절한 미소
        <strong>아크</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_arc.png"} alt="아크" /></div>
      <div className="character_text">
        <p className="text">
          사람들에게 늘 친절하게 대한다.
          조용하고 얌전한 성격에다
          표정도 밝아서 첫인상부터 호감형!
        </p>
        <p className="text">       
          참을성이 많고, 타인의 말을 잘 들어준다.
          갈등이 있을 땐 주로 중재자 역할.
        </p>
        <p className="text">
          자신보다 남을 챙기는 성격으로
          자신이 상처를 받더라도
          남에게 싫은 소리를 못 한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="펜부" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
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
        ESFJ 프로 문제 해결러
        <strong>쿠리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_kuri.png"} alt="쿠리" /></div>
      <div className="character_text">
        <p className="text">
          타고난 분위기 메이커로,
          상당히 쾌활한 성격이다.
        </p>
        <p className="text">
          내 사람들을 잘 챙기는 편.
          주로 동생들을 잘 챙기는 스타일로
          책임감이 강한 맏이 스타일이다.
        </p>
        <p className="text">
          동료애가 많고, 주변 친구들에게
          늘 친절하게 대하기 때문에
          사회생활 잘한다는 소리를 자주 듣는다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/mata.png"} alt="마타" /></li>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
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
        ESFJ 낙천적 자랑꾼
        <strong>비바</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_viva.png"} alt="비바" /></div>
      <div className="character_text">
        <p className="text">
          인정욕구가 강한 성격으로
          자신이 이룬 것, 혹은 가진 것을
          주변에 자랑하는 것을 좋아한다.
        </p>
        <p className="text">
          꾸미는 것에 솜씨가 있으며,
          소품 수집 또는 집 꾸미기를 즐긴다.
        </p>
        <p className="text">
          낙천적이고, 심성이 착하다.
          사람들과 함께 시간 보내는 것을 좋아해서
          집에 손님을 종종 초대한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/eucalie.png"} alt="유칼리" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
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