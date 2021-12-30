import React from 'react';
import Feature from './feature';

export default function ESTP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ESTP 끝없는 의심
        <strong>도니</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_donnie.png"} alt="도니" /></div>
      <div className="character_text">
        <p className="text">
          주변에 일어나는 일들에 관심이 많다.
          사실에 기반한 객관적인 내용을
          기록하는 습관이 있다.
        </p>
        <p className="text">
          앉아서 말로만 일하는 것을 싫어하며
          몸으로 부딪치며 알아가는 것을 더 선호한다.
        </p>
        <p className="text">
          모든 것이 객관적이고 공평해야 하며,
          편법을 용납하지 않는다.
          다소 직설적인 화법을 쓰는 경향이 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
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
        ESTP 웃으며 돌직구
        <strong>펭</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_peng.png"} alt="펭" /></div>
      <div className="character_text">
        <p className="text">
          타인의 눈치를 보지 않고
          자신이 하고 싶을 것을 하며 사는 스타일.
          뒤끝 없는 쿨한 성격이다.
        </p>
        <p className="text">
          뒷담화를 좋아하지 않으며,
          할 말은 다 하는 스타일.
          웃는 얼굴로 독설을 날린다.
        </p>
        <p className="text">
          소심한 친구를 대신하여
          대변하는 등 따뜻한 마음을 가졌다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
            <li><img src={staticPath + "/assets/img/match/jeff.png"} alt="제프" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
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
        ESTP 욜로 라이프
        <strong>로제</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_rosay.png"} alt="로제" /></div>
      <div className="character_text">
        <p className="text">
          과감하게 모험을 개척하며
          즐기는 욜로 라이프를 지향한다.
          그래서 다양한 곳을 여행하는 것이 취미!
        </p>
        <p className="text">
          깊게 생각하는 것은 머리 아파서
          뒤끝 없는 성격이다.
        </p>
        <p className="text">
          웃으면 온화해 보이지만, 사실 팩폭의 대가.
          말싸움에서 진 경험이 거의 없다고…
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/ores.png"} alt="오레스" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
            <li><img src={staticPath + "/assets/img/match/perry.png"} alt="페리" /></li>
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