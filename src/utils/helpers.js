export function formatQuestion(string) {
    const questionMark = '?'
    return string.charAt(0).toUpperCase() + string.slice(1).concat(questionMark);
  }

