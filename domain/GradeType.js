const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require("graphql");

const courseT = require("./CourseType");
const studentT = require("./StudentType");

const courses = require("../Course.json");
const students = require("../Student.json");

const gradeType = new GraphQLObjectType({
  name: "grade",
  description: "school grades",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLInt) },
    studentID: { type: GraphQLNonNull(GraphQLInt) },
    courseID: { type: GraphQLNonNull(GraphQLInt) },
    course: {
      type: courseT,
      resolve: (grade) => {
        return courses.find((course) => course.id === grade.courseID);
      },
    },
    student: {
      type: studentT,
      resolve: (grade) => {
        return students.find((student) => student.id === grade.studentID);
      },
    },
  }),
});
module.exports = gradeType;
