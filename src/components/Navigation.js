import React, { useState, useEffect } from 'react';

import { Button, Typography } from '@material-ui/core';

export default function Navigation({ activeStep, setActiveStep, chooses, answers, questionMap }) {
  const [isEmptyAnswer, setIsEmptyAnswer] = useState(false)
  const handlePreviousClick = () => {
    setIsEmptyAnswer(false)
    setActiveStep((activeStep) => {
      setActiveStep(--activeStep)
    })
  }
  const handleNextClick = () => {
    if (!chooses[activeStep]) {
      setIsEmptyAnswer(true)
      return
    }
    setIsEmptyAnswer(false)
    setActiveStep((activeStep) => {
      setActiveStep(++activeStep)
    })
  }

  const handleSubmit = () => {
    const wrong = []
    for (let i = 0; i < chooses.length; i++) {
      if (answers[i] !== chooses[i].number) {
        wrong.push({
          question: questionMap[i].title,
          choose: chooses[i].title,
        })
      }

    }
    window.location.href = `/result?wrong=${encodeURIComponent(JSON.stringify(wrong))}`
  }

  return (
    <>
      {isEmptyAnswer && <Typography color="secondary">정답을 선택해주세요!</Typography>}
      <Button
        onClick={handlePreviousClick}
        disabled={activeStep === 0}
      >
        이전 문제
        </Button>
      {activeStep === 9 ? (
        <Button onClick={handleSubmit}>
          제출
        </Button>
      ) : (
          <Button
            onClick={handleNextClick}
            disabled={activeStep === 9}>
            다음 문제
          </Button>
        )}
    </>
  );
}