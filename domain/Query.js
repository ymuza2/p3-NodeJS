const { GraphQLObjectType, GraphQLList } = require("graphql");


const courses = require("../Course.json");
const grades = require("../Grade.json");
const students = require('../Student.json');

const studentT = require('./StudentType');
const courseT = require('./CourseType');
const gradeT = require('./GradeType');

const rootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    students: {
      type: new GraphQLList(studentT),
      description: "List of All Students",
      resolve: () => students,
    },
    courses: {
      type: new GraphQLList(courseT),
      description: "List all courses",
      resolve: () => courses,
    },
    grades: {
      type: new GraphQLList(gradeT),
      description: "List all grades",
      resolve: () => grades,
    },
  }),
});

module.exports = rootQueryType;
