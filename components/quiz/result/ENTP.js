import React from 'react';
import Feature from './feature';

export default function ENTP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ENTP 호탕함의 대명사
        <strong>슈디</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_shudy.png"} alt="슈디" /></div>
      <div className="character_text">
        <p className="text">
          호탕한 성격으로, 매우 솔직하다.
          시원시원하게 웃는 스타일.
        </p>
        <p className="text">
          굳세고, 꼼꼼한 성격으로
          복잡한 문제를 해결하는 것을 좋아한다.
        </p>
        <p className="text">
          자기주장이 확실하여 다소 고집스럽지만
          최대한 중립적인 입장을
          유지하고자 노력한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
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
        ENTP 중립을 지키는
        <strong>덴버</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_denver.png"} alt="덴버" /></div>
      <div className="character_text">
        <p className="text">
          효율적인 문제 해결에 능한 유형.
          말을 잘하고, 평소 중립을 지키는 태도를
          가지고 있어 중재자 역할을 도맡는다.
        </p>
        <p className="text">
          처음 보는 사람과도 잘 지내기 때문에
          외향적인 성격이라고 생각할 수 있으나
          의외로 소심한 면이 있다.
        </p>
        <p className="text">
          창작 분야에 재능이 있으며
          폭넓은 관심사와 취미를 가지고 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
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
        ENTP 솔직한 변덕쟁이
        <strong>페리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_perry.png"} alt="페리" /></div>
      <div className="character_text">
        <p className="text">
          솔직하게 필터 없이 말하는 유형.
          없는 말을 지어내는 것을 못 하며,
          자신의 잘못은 빠르게 인정한다.
        </p>
        <p className="text">
          변덕이 심하지만, 그때그때
          자신의 감정에 솔직한 것뿐이다.
        </p>
        <p className="text">
          일 벌이는 것을 좋아하는 편으로,
          항상 새로운 것을 추구한다.
          반면, 한곳에 정착하는 것을 어려워한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
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