import React from 'react';
import Feature from './feature';

export default function ESFP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ESFP 모성애 넘치는
        <strong>아루</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_aroo.png"} alt="아루" /></div>
      <div className="character_text">
        <p className="text">
          심각한 상황 속에서도
          여유를 유지하는 낙관주의자.
        </p>
        <p className="text">
          다정다감한 성격으로
          주변 사람들을 가족같이 잘 챙긴다.
        </p>
        <p className="text">
          요리하는 것을 좋아하고,
          주변에 나눠주는 것도 좋아한다.
          폰에 다양한 음식 사진을 소장하고 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
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
        ESFP 독립을 꿈꾸는
        <strong>포포</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_popo.png"} alt="포포" /></div>
      <div className="character_text">
        <p className="text">
          자유로운 삶을 추구하기 때문에
          혼자 독립해서 사는 것이 꿈!
        </p>
        <p className="text">
          하지만 외향적인 스타일이라
          집에 있는 시간은 그리 많지 않다.
          친구들과 노는 것을 매우 좋아한다.
        </p>
        <p className="text">
          생각이 단순한 편이라
          좋은 게 좋은 거라 생각하며 즐겁게 산다.
          혼자 있을 때 갑자기 흥얼거리기도 한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
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
        ESFP 핵인싸
        <strong>재키</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_jackee.png"} alt="재키" /></div>
      <div className="character_text">
        <p className="text">
          집에 혼자 있는 건 따분하기 때문에
          쉴 틈 없이 약속을 잡는다.
        </p>
        <p className="text">
          처음 보는 사람과도 놀 수 있을 정도의
          엄청난 친화력을 지니고 있다.
          새로운 친구 사귀는 것을 좋아한다.
        </p>
        <p className="text">
          상호 존중을 중시하기 때문에
          무례한 사람을 싫어하며
          표정에서 좋고, 싫음이 티가 난다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
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
        ESFP 재치있는
        <strong>스노우</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_snow.png"} alt="스노우" /></div>
      <div className="character_text">
        <p className="text">
          주목받는 것을 좋아하는 성격!
          자칭 분위기 메이커로
          어색한 분위기를 참지 못한다.
        </p>
        <p className="text">
          진행 병과 개그 욕심을 가지고 있으며
          최신 트렌드에 강하다.
        </p>
        <p className="text">
          정이 많아 주변 사람을 잘 챙기고,
          타인의 부탁을 잘 거절하지 못한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rosay.png"} alt="로제" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
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