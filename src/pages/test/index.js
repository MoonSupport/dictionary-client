import React, { useMemo } from "react";
import { chunk, random, sampleSize} from "lodash";
import { useStaticQuery } from "gatsby";
import Layout from "../../components/Layout"
import Test from "../../components/Test"


export default function FrontEndTestPage() {
    const {
      allMarkdownRemark: { nodes: allSamples },
    } = useStaticQuery(graphql`
      query samples {
        allMarkdownRemark(filter: { frontmatter: {
          label : {
            regex: ""
          }
        } }) {
          nodes {
            frontmatter {
              title
              label
              slug
            }
            html
          }
        }
      }
    `);

function trimWordFromBraket(title) {
  if (!title) {
    return;
  }
  let front = title;
  let back = "";
  if (typeof title === "string") {
    if (title.includes("(")) {
      front = title.split("(")[0];
      back = title.split("(")[1].replace(")", "");
    }
  }
  return [front, back];
}

const samples = useMemo(()=>sampleSize(allSamples,50),[])

const questionss = useMemo(()=>chunk(samples, 5),[]);

const [questionMap, answers] = useMemo(() => {
  const questionMap = [];
  const answers = [];

  if(samples.length < 50) {
    alert('문제가 부족합니다.')
    window.close()
  }

  questionss.map((questions) => {
    const answer = random(0, 4);
    const question = questions[answer].html;
    const [front, back] = trimWordFromBraket(
      questions[answer].frontmatter.title
    );
    
    const frontRegex = new RegExp(front, "gi");
    let formattedQuestion = question
      .replace(frontRegex, "[ㅁㅁㅁ]")
      .replace(questions[answer].frontmatter.mean, "[ㅁㅁㅁ]");
    if (back) {
      const backRegex = new RegExp(back, "gi");
      formattedQuestion.replace(backRegex, "[ㅁㅁㅁ]");
    }
    questionMap.push({title:questions[answer].frontmatter.title, question: formattedQuestion});
    answers.push(answer);
    return null
  });
  return [questionMap, answers];
}, []);

  return (
    <Layout>
      <Test questionMap={questionMap} questionss={questionss} answers={answers}  />
    </Layout>
  )
}
