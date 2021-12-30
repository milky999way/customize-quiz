import React from 'react';
import Feature from './feature';

export default function INTJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        INTJ 신중하고 섬세한
        <strong>멜리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_melly.png"} alt="멜리" /></div>
      <div className="character_text">
        <p className="text">
          섬세하고, 예민한 성격의 소유자.
          통찰력과 분석력으로 고집이 센 편이다.
        </p>
        <p className="text">
          자기관리가 매우 철저하여
          사적인 이야기는 거의 하지 않는다.
          (회식도 별로 선호하지 않는다)
        </p>
        <p className="text">
          그래서 대인관계에서 차가운 인상으로
          보이기 쉬우나 속이 굉장히 여리다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
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
        INTJ 전부 다 궁금해
        <strong>하리나</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_harina.png"} alt="하리나" /></div>
      <div className="character_text">
        <p className="text">
          이 구역의 호기심 왕은 나!
          궁금한 것이 생기면 어떻게 해서든 알아낸다.
        </p>
        <p className="text">
          해보고 싶은 것이 있으면
          위험도 마다하지 않고 시도한다.
          매사에 진심을 다하는 성격!
        </p>
        <p className="text">
          철학 및 자연과학 분야에 관심이 많다.
          논리로 이기고 싶어 하는 욕구가 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
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
        INTJ 초긍정 마인드
        <strong>마이</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_mai.png"} alt="마이" /></div>
      <div className="character_text">
        <p className="text">
          어려운 일이 있어도
          언제나 씩씩하게 이겨내는 초긍정 마인드!
          자신의 능력에 대한 자신감이 있으며
          자신을 높게 평가한다.
        </p>
        <p className="text">
          목표지향적인 성향이라
          목표를 달성하면 매우 큰 보람을 느낀다.
          어려운 일도 곧잘 도전하며 그 과정 자체를 즐긴다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
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
        INTJ 할 말은 해야지
        <strong>다크 미도리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_darkmidori.png"} alt="다크 미도리" /></div>
      <div className="character_text">
        <p className="text">
          답답한 것을 극도로 싫어한다.
          속에 담아두지 않고 내뱉기 때문에
          상대에게 상처를 주기도 하지만,
          그만큼 뒤끝 없는 시원한 성격.
        </p>
        <p className="text">
          거짓과 위선을 싫어해서
          솔직함과 사실에 기반하여 행동한다.
        </p>
        <p className="text">
          혼자 있는 것을 즐기며,
          주변에 누군가 많은 것을 꺼린다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
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