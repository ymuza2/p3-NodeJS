const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require("graphql");

const coursesType = require("./CourseType");
const studentType = require("./StudentType");

const gradeType = new GraphQLObjectType({
  name: "grade",
  description: "school grades",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLInt) },
    studentID: { type: GraphQLNonNull(GraphQLInt) },
    courseID: { type: GraphQLNonNull(GraphQLInt) },
    course: {
      type: coursesType,
      resolve: (grade) => {
        return courses.find((course) => course.id === grade.courseID);
      },
    },
    student: {
      type: studentType,
      resolve: (grade) => {
        return students.find((student) => student.id === grade.studentID);
      },
    },
  }),
});
module.exports = gradeType;
