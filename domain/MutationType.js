const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const courses = require("../Course.json");

const grades = require("../Grade.json");

const students = require("../Student.json");

const coursesType = require("./CourseType");

const gradesType = require("./GradeType");

const studentsType = require("./StudentType");

const rootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addCourse: {
      type: coursesType,
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
      type: gradesType,
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
      type: studentsType,
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
        students.push(student);
        return student;
      },
    },

    deleteStudent: {
      type: studentsType,
      description: "delete a Student",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, { id }) => {
        students.pop(id);
      },
    },

    deleteCourse: {
      type: coursesType,
      description: "delete a Course",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, { id }) => {
        courses.pop(id);
      },
    },

    deleteGrade: {
      type: gradesType,
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
