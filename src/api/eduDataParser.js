// @flow
import type { UniversityDetail } from '../type/university';

export const eduDataParser = (data: { string: number }): UniversityDetail => {
  const parsedResult = {
    completion: {},
    cost: {
      inState: {},
      outState: {}
    },
    student: {
      size: {},
      gradStudents: {},
      menShare: {},
      womenShare: {},
      nonResidentAlien: {},
      black: {},
      asian: {},
      white: {},
      avgIncome: {}
    },
    admission: {
      satScore: {},
      rate: {}
    },
    aid: {
      loanPrincipal: {},
      numberOfStudentsOnLoan: {}
    }
  };
  Object.keys(data).forEach(resultKey => {
    let year = '';
    let value = 0;
    switch (true) {
      case /^\d+.completion.+$/.test(resultKey): // Assign completion rate
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.completion[year] = value;
        break;
      case /^\d+.cost.tuition.in/.test(resultKey): // Assign in state tuition cost
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.cost.inState[year] = value;
        break;
      case /^\d+.cost.tuition.out/.test(resultKey): // Assign out of state tuition cost
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.cost.outState[year] = value;
        break;
      case /^\d+.student.size$/.test(resultKey): // Assign student-size
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.size[year] = value;
        break;
      case /^\d+.student.grad_students$/.test(resultKey): // Assign student-gradStudents
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.gradStudents[year] = value;
        break;
      case /^\d+.student.demographics.men$/.test(resultKey): // Assign student-menShare
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.menShare[year] = value;
        break;
      case /^\d+.student.demographics.women/.test(resultKey): // Assign student-womenShare
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.womenShare[year] = value;
        break;
      case /^\d+.student.demographics.race.+alien$/.test(resultKey): // Assign student-non-redident-alien
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.nonResidentAlien[year] = value;
        break;
      case /^\d+.student.demographics.race.+black.*$/.test(resultKey): // Assign student-black
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        if (!parsedResult.student.black[year]) {
          // no black value exist
          parsedResult.student.black[year] = 0 + value;
        } else {
          parsedResult.student.black[year] += value;
        }
        break;
      case /^\d+.student.demographics.race.+asian$/.test(resultKey): // Assign student-asian
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.asian[year] = value;
        break;
      case /^\d+.student.demographics.race.+white.*$/.test(resultKey): // Assign student-white
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        if (!parsedResult.student.white[year]) {
          // no black value exist
          parsedResult.student.white[year] = 0 + value;
        } else {
          parsedResult.student.white[year] += value;
        }
        break;
      case /^\d+.student.+income.+$/.test(resultKey): // Assign student-avgIncome
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.student.avgIncome[year] = value;
        break;
      case /^\d+.admissions.sat.+$/.test(resultKey): // Assign admission-satScore
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.admission.satScore[year] = value;
        break;
      case /^\d+.admissions.+rate.+$/.test(resultKey): // Assign admission-overallRate
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.admission.rate[year] = value;
        break;
      case /^\d+.aid.+principal$/.test(resultKey): // Assign aid-loanPrinciple
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.aid.loanPrincipal[year] = value;
        break;
      case /^\d+.aid.+students.+$/.test(resultKey): // Assign aid-numberOfStudentWithLoan
        year = /^\d+/.exec(resultKey)[0];
        value = data[resultKey];
        parsedResult.aid.numberOfStudentsOnLoan[year] = value;
        break;
      default:
        break;
    }
  });
  return parsedResult;
};
