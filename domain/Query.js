const { GraphQLObjectType, GraphQLList } = require("graphql");

const courses = require("../Course.json");

const grades = require("../Grade.json");

const students = require("../Student.json");

const coursesType = require("./CourseType");

const gradesType = require("./GradeType");

const studentsType = require("./StudentType");

const rootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    students: {
      type: new GraphQLList(studentsType),
      description: "List of All Students",
      resolve: () => students,
    },
    courses: {
      type: new GraphQLList(coursesType),
      description: "List all courses",
      resolve: () => courses,
    },
    grades: {
      type: new GraphQLList(gradesType),
      description: "List all grades",
      resolve: () => grades,
    },
  }),
});

module.exports = rootQueryType;
