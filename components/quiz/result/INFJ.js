import React from 'react';
import Feature from './feature';

export default function INFJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        INFJ 마음 치료사
        <strong>헨리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_henry.png"} alt="헨리" /></div>
      <div className="character_text">
        <p className="text">
          모든 사람에게 다정다감하고 친절하다.
        </p>
        <p className="text">
          친구들의 고민 상담을 잘해준다.
          상대방의 마음에 공감하고,
          위로의 말로 마음을 치유하는 능력이 있다.
        </p>
        <p className="text">
          때로 슬프거나 흥분을 하면
          방어적으로 자기도 모르게
          날카로워지는 경향이 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
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
        INFJ 투머치 걱정
        <strong>고로</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_goro.png"} alt="고로" /></div>
      <div className="character_text">
        <p className="text">
          걱정이 많은 성격으로
          잠자기 직전에 머리가 복잡하다.
          그 때문에 자주 불면증에 시달린다.
        </p>
        <p className="text">
          감성적인 성향으로,
          주기적으로 우울해진다.
        </p>
        <p className="text">
          새로운 사람 만나는 것과
          새로운 것을 시도하는 것을 선호하지 않는다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
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
        INFJ 세심한 성격
        <strong>코코</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_coco.png"} alt="코코" /></div>
      <div className="character_text">
        <p className="text">
          마음씨가 따뜻한 것이 특징!
          주변 사람들을 항상 챙겨주고 싶어 한다.
        </p>
        <p className="text">
          내가 피곤하더라도
          타인을 배려하는 것이 편하다.
        </p>
        <p className="text">
          사고가 생겼을 경우
          당황하지 않고 의연하게 대처한다.
          화를 잘 내지 않고 참는 성격이나
          가끔 한계를 넘으면 폭발하기도 한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
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
        INFJ 혼자 조용히 바쁜
        <strong>몬타</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_monta.png"} alt="몬타" /></div>
      <div className="character_text">
        <p className="text">
          혼자 조용히 지내는 것을 선호한다.
          사람 많은 곳은 딱 질색!
        </p>
        <p className="text">
          매사에 모든 일을 열심히 하기
          때문에 늘 확고한 자신감에 차 있다!
        </p>
        <p className="text">
          난처한 상황이 벌어져도
          도움 없이 혼자 해결하려고 하지만...
          종종 더 큰 난관에 봉착하는 편이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/shudy.png"} alt="슈디" /></li>
            <li><img src={staticPath + "/assets/img/match/denver.png"} alt="덴버" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
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