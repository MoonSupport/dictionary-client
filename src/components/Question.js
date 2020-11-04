import React from "react";

import { Box } from "@material-ui/core";

const Question = ({activeStep, chooses ,setChooses, questionMap, questionss}) => {
  const handleOnClick = (e) => {
    const answerNumber = e.target?.innerHTML?.split(".")[0].replace('<!-- -->', '');
    const answerTitle = e.target?.innerHTML?.split(".")[1]
    if (!answerNumber || isNaN(answerNumber)) return;
    setChooses((chooses) => {
      chooses[activeStep] = {
        number: Number.parseInt(answerNumber, 10),
        title: answerTitle
      }
      return [...chooses];
    });
  };

  return (
    <>
      <div>Qustion</div>
      <div>
        <Problem problem={questionMap[activeStep].question} />
        <Viewer
          choose={chooses[activeStep] && chooses[activeStep].number}
          questions={questionss[activeStep]}
          handleOnClick={handleOnClick}
        />        
      </div>
    </>
  );
};

export const Problem = ({ problem }) => {
  return <div dangerouslySetInnerHTML={{ __html: problem }} />;
};

const Viewer = ({ questions, handleOnClick, choose }) => {
  return (
    <Box>
      {questions.map((question, index) => {
        return (
            <div
              key={index}
              style={{
                border: choose == index ? '2px solid #3f51b5' : '2px solid #282828',
                borderRadius:'4px',
                cursor: 'pointer',
                color : choose == index ? '#3f51b5' : '#282828',
                width: '100%',
                height: 30,
                lineHeight:2,
                paddingLeft: 10,
                marginBottom: 10
              }}
              onClick={handleOnClick}
            >
              {index}.{" " + question.frontmatter.title}
            </div>
        );
      })}
    </Box>
  );
};

export default Question;
