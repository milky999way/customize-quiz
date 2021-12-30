import React from 'react';
import Feature from './feature';

export default function INFP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        INFP 낯 가리는 금손
        <strong>모카</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_moca.png"} alt="모카" /></div>
      <div className="character_text">
        <p className="text">
          낯을 가리지만 모두에게 친절한 성격으로
          타인의 부탁을 거절하지 못한다.
        </p>
        <p className="text">
          생각이 많아 때때로 잠을 못 이룬다.
          내적 성장을 매우 중요하게 여기며,
          자기반성을 자주 하는 편이다.
        </p>
        <p className="text">
          한 가지 일에 몰두하는 스타일로
          좋아하는 것엔 더욱더 열정적이다!
          (하지만 종종 뒷심이 부족하단 소리를 듣는다)
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
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
        INFP 술 한잔의 행복
        <strong>텐부</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_tenboo.png"} alt="텐부" /></div>
      <div className="character_text">
        <p className="text">
          다정하고, 차분한 성격의 소유자.
          낯가림이 조금 있지만
          술이 들어가면 조금은 대범해진다.
        </p>
        <p className="text">
          적응력이 좋고 관대한 성격이다.
          개방적이고 이해심이 넓다.
        </p>
        <p className="text">
          삶에서 가장 중요한 것은 바로 여유!
          그래서 여유롭게 경치 감상하는 것을 즐긴다.
          개인적인 가치를 추구하는 이상주의자이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
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
        INFP 예술은 숭고해
        <strong>젤리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_zelly.png"} alt="젤리" /></div>
      <div className="character_text">
        <p className="text">
          손으로 만드는 것은 뭐든 잘하는 금손!
          예술가 스타일로 유행보단
          자신만의 개성을 추구한다.
        </p>
        <p className="text">
          맡은 일에는 완벽을 추구하기 때문에
          타인이 봤을 땐 괜찮은 부분도
          스스로 용납할 수 없어 다시 한다.
        </p>
        <p className="text">
          빈둥거리면서 노는 사람을 한심스럽게 생각한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
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
        INFP 마음이 여린
        <strong>미도리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_midori.png"} alt="미도리" /></div>
      <div className="character_text">
        <p className="text">
          마음이 여리고, 낯가림이 있다.
        </p>
        <p className="text">
          내향적인 성격이지만
          사람들에게 관심받고 싶어 한다.
          자신의 가치를 존중해주는 사람에겐 올인!
        </p>
        <p className="text">
          자신의 의견을 말하기보다는
          타인의 의견에 따른다.
          속마음을 주변 사람들에게 말하지 않는 편.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
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