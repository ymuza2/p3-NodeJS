const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const coursesType = require("./CourseType");

const studentType = new GraphQLObjectType({
  name: "student",
  description: "students of the school",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    lastname: { type: GraphQLNonNull(GraphQLString) },
    course: {
      type: coursesType,
      resolve: (student) => {
        return courses.find((course) => course.id === student.courseID);
      },
    },
  }),
});
module.exports = studentType;
