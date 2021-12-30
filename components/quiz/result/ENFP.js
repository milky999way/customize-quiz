import React from 'react';
import Feature from './feature';

export default function ENFP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ENFP 자유로운 영혼
        <strong>알폰스</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_alphonse.png"} alt="알폰스" /></div>
      <div className="character_text">
        <p className="text">
          물 흘러가는 듯이 살아야 한다'는
          철학을 가지고 있다.
        </p>
        <p className="text">
          계획 세우는 것을 귀찮아하는 스타일로
          즉흥적이며, 충동구매를 자주 하는 편.
          그래서 약속도 그때그때 잡는다.
        </p>
        <p className="text">
          익숙함보다는 새로운 것을 선호하며
          새로운 인간관계에 대한
          두려움이 전혀 없다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
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
        ENFP 웃으면 복이 와요
        <strong>브레이</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_bray.png"} alt="브레이" /></div>
      <div className="character_text">
        <p className="text">
          자신의 삶에 만족하는 유형.
          늘 웃고 있으며, 화도 잘 내지 않는다.
        </p>
        <p className="text">
          매우 낙천적인 성격이며,
          위기 대처능력이 높은 편이라
          웬만한 문제 앞에서도 미소를 잃지 않는다!
        </p>
        <p className="text">
          타인을 기분 좋게 만드는 능력이 탁월하다.
          이성보단 감성이 우선시 되는 스타일.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
            <li><img src={staticPath + "/assets/img/match/goro.png"} alt="고로" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
            <li><img src={staticPath + "/assets/img/match/rocky.png"} alt="록키" /></li>
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
        ENFP 깍쟁이 아티스트
        <strong>바이올렛</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_violet.png"} alt="바이올렛" /></div>
      <div className="character_text">
        <p className="text">
          감정이 풍부한 예술가 유형.
          자유를 추구하기 때문에
          구속, 간섭받는 것을 극도로 싫어한다.
        </p>
        <p className="text">
          늘 새로운 것을 추구하며,
          패션에 관심이 많은 패피☆
        </p>
        <p className="text">
          감정이 표정에 즉각적으로 나타나므로
          숨기는 것을 잘 못 한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/melly.png"} alt="멜리" /></li>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
            <li><img src={staticPath + "/assets/img/match/keeney.png"} alt="키니" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
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
        ENFP 뭐 재밌는거 없나?
        <strong>xxx</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_xxx.png"} alt="xxx" /></div>
      <div className="character_text">
        <p className="text">
          낙천적이고 열정 넘치는 유형.
          새로운 인연을 맺는 것을 좋아한다!
        </p>
        <p className="text">
          호기심이 많아 주변 일에 관심이 많고,
          주변 사람들의 일에 적극적으로 나서서 돕는다.
        </p>
        <p className="text">
          순간 집중력이 매우 뛰어나다.
          하지만 끈기는 부족하여
          반복적인 일상을 매우 지루해한다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
            <li><img src={staticPath + "/assets/img/match/mai.png"} alt="마이" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
            <li><img src={staticPath + "/assets/img/match/darkmidori.png"} alt="다크 미도리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
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