const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const coursetype = require("./CourseType");
const courses = require("../Course.json");

const studentType = new GraphQLObjectType({
  name: "student",
  description: "students of the school",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    lastname: { type: GraphQLNonNull(GraphQLString) },
    course: {
      type: coursetype,
      resolve: (student) => {
        return courses.find((course) => course.id === student.courseID);
      },
    },
  }),
});
module.exports = studentType;
