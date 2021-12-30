import React, { useState, useEffect } from 'react';
import config from '../../../config';
import Layout from '../../../components/quiz/layout';



export default function Painter({ staticPath }) {
  // console.log(paintResults.createDate);
  const [paintResults, setPaintResults] = useState([]);
  useEffect(() => {
    fetch('/quiz/painter/api/getListSketch', {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      setPaintResults(data);
    });
  }, []);

  return (
    <Layout staticPath={staticPath}>
      <div className="container_in">
        <div className="painter_result">
          <h2>xxx 얼굴 그리기 전시회</h2>
          <div className="results">
            {paintResults.length > 0 ?
              paintResults.sort((a, b) => {
                // 등록날짜일시순으로 정렬
                const x = parseInt(a.createDate);
                const y = parseInt(b.createDate);
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
              }).map((result, i) => {
                return (
                  <div>
                    <strong>{result.paint.title}</strong>
                    {/* <img src={result.paint.src.replace("xxx-static-web.s3.ap-northeast-2.amazonaws.com/", "")} alt={result.paint.title} /> */}
                    <object data={result.paint.src.replace("xxx-static-web.s3.ap-northeast-2.amazonaws.com/", "")} type="image/svg+xml"></object>
                  </div>
                );
              })
              :null
            }
          </div>
          <div className="buttons">
            <a href="/quiz/painter">다시하기</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req, query }) {
  // const res = await fetch('https://rc-www.xxx.com/quiz/painter/api/getListSketch');
  // const paintResults = await res.json();
  // // console.log(req);
  // // console.log(query);

  return {
    props: {
      staticPath: config.staticPath,
      // paintResults,
    },
  }
}