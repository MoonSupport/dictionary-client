import React, { useState, useMemo } from "react";
import { chunk, random, sampleSize} from "lodash";
import { useStaticQuery } from "gatsby";

const Question = ({activeStep}) => {
  const [chooses, setChooses] = useState([]);

  const {
    allMarkdownRemark: { nodes: allSamples },
  } = useStaticQuery(graphql`
    query samples {
      allMarkdownRemark(filter: { frontmatter: {} }) {
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

  const samples = useMemo(()=>sampleSize(allSamples,50),[])

  const questionss = useMemo(()=>chunk(samples, 5),[]);

  const [questionMap, answers] = useMemo(() => {
    const questionMap = [];
    const answers = [];
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
      questionMap.push(formattedQuestion);
      answers.push(answer);
      return
    });
    return [questionMap, answers];
  }, []);

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

  const handleOnClick = (e) => {
    const answer = e.target?.innerHTML?.split(".")[0].replace('<!-- -->', '');
    if (!answer) return;

    setChooses((chooses) => {
      chooses[activeStep] = answer;
      return [...chooses];
    });
  };

  return (
    <>
      <div>Qustion</div>
      <div>
        <Problem problem={questionMap[activeStep]} />
        <Viewer
          chooses={chooses[activeStep]}
          questions={questionss[activeStep]}
          handleOnClick={handleOnClick}
        />
        {activeStep === 9 && <div> 결과 확인하기</div>}
        
      </div>
    </>
  );
};

const Problem = ({ problem }) => {
  return <div dangerouslySetInnerHTML={{ __html: problem }} />;
};

const Viewer = ({ questions, handleOnClick, chooses }) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <>
            <div
              style={chooses == index ? { color: "green" } : { color: "black" }}
              onClick={handleOnClick}
            >
              {index}.{" " + question.frontmatter.title}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Question;
