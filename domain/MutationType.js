const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const courses = require("../Course.json");
const grades = require("../Grade.json");
const students = require("../Student.json");

const studentT = require("./StudentType");
const courseT = require("./CourseType");
const gradeT = require("./GradeType");

const rootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addCourse: {
      type: courseT,
      description: "Add a Course",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const course = {
          id: courses.length + 1,
          name: args.name,
          description: args.description,
        };
        courses.push(course);
        return course;
      },
    },
    addGrade: {
      type: gradeT,
      description: "Add a Grade",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLInt) },
        studentID: { type: GraphQLNonNull(GraphQLInt) },
        courseID: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const grade = {
          id: grades.length + 1,
          name: args.name,
          studentID: args.studentID,
          courseID: args.courseID,
        };
        grades.push(grade);
        return grade;
      },
    },

    addStudent: {
      type: studentT,
      description: "Add a Student",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        lastname: { type: GraphQLNonNull(GraphQLString) },
        courseID: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const student = {
          id: students.length + 1,
          name: args.name,
          lastname: args.lastname,
          courseID: args.courseID,
        };
        studentT.push(student);
        return student;
      },
    },

    deleteStudent: {
      type: studentT,
      description: "delete a Student",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, { id }) => {
        students.pop(id);
      },
    },

    deleteCourse: {
      type: courseT,
      description: "delete a Course",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, { id }) => {
        courses.pop(id);
      },
    },

    deleteGrade: {
      type: gradeT,
      description: "delete a Grade",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, { id }) => {
        grades.pop(id);
      },
    },
  }),
});

module.exports = rootMutationType;
