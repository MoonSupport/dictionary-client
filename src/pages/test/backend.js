import React, { useState, useEffect } from "react";
import { chunk, random, sampleSize } from "lodash";
import { useStaticQuery } from "gatsby";
import Layout from "../../components/Layout"
import Test from "../../components/Test"


export default function BackEndTestPage() {
    const [questionMap, setQuestionMap] = useState()
    const [questionss, setQuestionss] = useState()
    const [answers, setAnswers] = useState()


    const {
        allMarkdownRemark: { nodes: allSamples },
    } = useStaticQuery(graphql`
      query backendsamples {
        allMarkdownRemark(filter: { frontmatter: {
          label : {
            in: ["Backend","Database","Devops" ,"Common"]
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

    useEffect(() => {
        const samples = sampleSize(allSamples, 50)
        const tempQuestionss = chunk(samples, 5)

        const tempAnswers = [];

        if (samples.length < 50) {
            alert('문제가 부족합니다.')
            window.close()
        }
        const tempQuestionMap = []
        tempQuestionss.map((questions) => {
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
            tempQuestionMap.push({ title: questions[answer].frontmatter.title, question: formattedQuestion });
            tempAnswers.push(answer);

            setQuestionMap(tempQuestionMap)
            setQuestionss(tempQuestionss)
            setAnswers(tempAnswers)
            return null
        });
        return [tempQuestionMap, tempQuestionss, tempAnswers];
    }, []);

    if (!questionMap || !questionss || !answers) {
        return (
            <div>
                Loading
            </div>
        )
    }

    return (
        <Layout>
            <Test questionMap={questionMap} questionss={questionss} answers={answers} />
        </Layout>
    )
}
