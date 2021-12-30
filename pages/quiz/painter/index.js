import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import config from '../../../config';
import Layout from '../../../components/quiz/layout';



const SketchCanvas = dynamic(
  () => {
    return import('../../../components/quiz/painter/sketchCanvas');
  },
  { ssr: false }
);



export default function Painter({ staticPath }) {
  return (
    <Layout staticPath={staticPath}>
      <div className="container_in">
        <div className="painter">
          <h2>xxx 얼굴 그리기 대회</h2>
          <SketchCanvas staticPath={staticPath} />
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