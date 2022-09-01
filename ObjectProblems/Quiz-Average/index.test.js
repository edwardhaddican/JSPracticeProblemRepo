const averageQuizScore = require("./index.js");

describe("averageQuizScore", () => {
  it("should return a number", () => {
    let quizzes = [
      { quizNumber: 1, quizScore: 8, maxScore: 10 },
      { quizNumber: 2, quizScore: 4, maxScore: 5 },
    ];

    let result = averageQuizScore(quizzes);

    expect(typeof result).toBe("number");
  });
  it("should return the correct average of the quizzes", () => {
    let quizzes = [
      { quizNumber: 1, quizScore: 8, maxScore: 9 },
      { quizNumber: 2, quizScore: 4, maxScore: 5 },
      { quizNumber: 3, quizScore: 6, maxScore: 7 },
      { quizNumber: 4, quizScore: 12, maxScore: 10 },
      { quizNumber: 5, quizScore: 12, maxScore: 13 },
    ];

    let result = averageQuizScore(quizzes);
    expect(result).toBe(93);
  });
});
