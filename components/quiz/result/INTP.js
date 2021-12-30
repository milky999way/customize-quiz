import React from 'react';
import Feature from './feature';

export default function INTP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        INTP 느긋~한
        <strong>유칼리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_eucalie.png"} alt="유칼리" /></div>
      <div className="character_text">
        <p className="text">
          느릿느릿한 성격의 소유자로
          게으른 천재 유형.
        </p>
        <p className="text">
          무덤덤한 스타일로, 별생각 없이
          풍경 감상하는 것을 좋아한다.
          생각에 몰입해 실행을 미루는 편.
        </p>
        <p className="text">
          사교활동도 거의 하지 않는다.
          친한 친구와도 별일 없다면
          연락을 잘 하지 않는다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
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
        INTP 몽상가
        <strong>마타</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_mata.png"} alt="마타" /></div>
      <div className="character_text">
        <p className="text">
          말이 별로 없는 스타일이다.
          하지만 자신이 관심 있는 분야에 대해선
          말을 논리정연하게 한다.
        </p>
        <p className="text">
          호기심이 많으며, 목적이 없을지라도
          지식 탐구하는 것을 좋아한다.
        </p>
        <p className="text">
          타인에게 큰 관심을 두지 않는다.
          그래서 자신의 뒷담화에 관심이 없고,
          타인을 욕하지도 않는다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
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
        INTP 솔직함이 매력
        <strong>노이</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_noy.png"} alt="노이" /></div>
      <div className="character_text">
        <p className="text">
          자기주관이 뚜렷하며 호불호가 확실하다.
          깊게 생각하지 않고 직설적으로 말해서
          타인에게 상처를 주기도 하지만 악의는 전혀 없다.
        </p>
        <p className="text">
          감수성이 풍부하고, 생각의 흐름이 자유롭다.
          독창적인 자신만의 세계가 있다!
        </p>
        <p className="text">
          자기애가 강하며, 굉장한 미식가이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
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