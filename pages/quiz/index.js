import React, { useState, useEffect } from 'react';
import config from '../../config';
import Layout from '../../components/quiz/layout';



export default function Quiz({ staticPath }) {
  return (
    <Layout staticPath={staticPath}>
      <div className="container_in">
        <div className="main">
          <div className="loading">
            <img src={staticPath + "/assets/img/img_loading1.png"} alt="로딩 xxx" className="loading1" />
            <img src={staticPath + "/assets/img/img_loading2.png"} alt="로딩 코코" className="loading2" />
            <img src={staticPath + "/assets/img/img_loading3.png"} alt="로딩 오비스" className="loading3" />
          </div>
          <div class="btn"><a href="/quiz/1">xxx 캐릭터 테스트 &rarr;</a></div>
          {/* <div class="btn"><a href="/quiz/painter">xxx 얼굴 그리기 &rarr;</a></div> */}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req, query }) {
  return {
    props: {
      staticPath: config.staticPath,
    },
  }
}