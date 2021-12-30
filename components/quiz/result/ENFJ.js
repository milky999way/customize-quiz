import React from 'react';
import Feature from './feature';

export default function ENFJ({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ENFJ 근심 한가득
        <strong>티미</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_timmy.png"} alt="티미" /></div>
      <div className="character_text">
        <p className="text">
          걱정, 근심 전문가로 모든 일에 노심초사.
          작은 걱정으로도 두통에 시달린다.
        </p>
        <p className="text">
          모든 일에 꼼꼼히 계획을 세워
          대비해야 안심이 되는 스타일!
        </p>
        <p className="text">
          인류애가 넘치는 유형이라
          일이 생겼을 때 미리 대비한 것을
          주변에 나눠주는 넓은 마음을 가지고 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
            <li><img src={staticPath + "/assets/img/match/dudu.png"} alt="두두" /></li>
            <li><img src={staticPath + "/assets/img/match/harina.png"} alt="하리나" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/ovis.png"} alt="오비스" /></li>
            <li><img src={staticPath + "/assets/img/match/muha.png"} alt="무하" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
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
        ENFJ 소문난 사냥꾼
        <strong>아리스</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_aris.png"} alt="아리스" /></div>
      <div className="character_text">
        <p className="text">
          감성 충만한 성향으로
          주변인들의 피드백에 민감한 편이다.
          다소 우유부단한 면이 있다
        </p>
        <p className="text">
          연애할 땐 상대방에게 푹 빠져서
          헌신하는 스타일이다.
          상대방이 하자고 하는 것은 무조건 따른다.
        </p>
        <p className="text">
          계획 세우는 것을 좋아하며
          계획대로 사람들을 이끄는 데 능숙하다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kroog.png"} alt="크루그" /></li>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/rony.png"} alt="로니" /></li>
            <li><img src={staticPath + "/assets/img/match/peng.png"} alt="펭" /></li>
            <li><img src={staticPath + "/assets/img/match/adam.png"} alt="아담" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
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
        ENFJ 불타는 열정
        <strong>베리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_berrie.png"} alt="베리" /></div>
      <div className="character_text">
        <p className="text">
          늘 웃고 있는 해피 페이스:)
          붙임성이 좋고, 감수성이 풍부하다.
        </p>
        <p className="text">
          타인의 눈치를 많이 보는 성격으로
          멀리서 들리는 대화마저 잘 듣는 편이다.
        </p>
        <p className="text">
          칭찬 및 인정을 받는 것을 좋아하며,
          반대로 비판에는 민감하게 반응한다.
          그러나 특유의 밝은 성격으로
          금방 잊고 웃는 얼굴로 돌아온다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/pepe.png"} alt="페페" /></li>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/okee.png"} alt="오키" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
            <li><img src={staticPath + "/assets/img/match/donnie.png"} alt="도니" /></li>
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