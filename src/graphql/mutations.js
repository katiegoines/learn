/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      courses {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      courses {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      courses {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContributor = /* GraphQL */ `
  mutation CreateContributor(
    $input: CreateContributorInput!
    $condition: ModelContributorConditionInput
  ) {
    createContributor(input: $input, condition: $condition) {
      id
      jobTitle
      socialNetwork {
        platform
        url
      }
      courses {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      bio
      profilePic
      username
      lastName
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContributor = /* GraphQL */ `
  mutation UpdateContributor(
    $input: UpdateContributorInput!
    $condition: ModelContributorConditionInput
  ) {
    updateContributor(input: $input, condition: $condition) {
      id
      jobTitle
      socialNetwork {
        platform
        url
      }
      courses {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      bio
      profilePic
      username
      lastName
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContributor = /* GraphQL */ `
  mutation DeleteContributor(
    $input: DeleteContributorInput!
    $condition: ModelContributorConditionInput
  ) {
    deleteContributor(input: $input, condition: $condition) {
      id
      jobTitle
      socialNetwork {
        platform
        url
      }
      courses {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      bio
      profilePic
      username
      lastName
      firstName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      content
      youtubeEmbedId
      chapter
      courseLesson {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lessonNumber
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonCourseLessonId
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      title
      content
      youtubeEmbedId
      chapter
      courseLesson {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lessonNumber
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonCourseLessonId
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      content
      youtubeEmbedId
      chapter
      courseLesson {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lessonNumber
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonCourseLessonId
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      timeHours
      timeMinutes
      learningObjective
      description
      requirements
      image
      contributors {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      courseTags {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      skillLevel
      dateCreated
      isFeatured
      imageAltText
      trailerEmbedId
      courseUrlTitle
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      timeHours
      timeMinutes
      learningObjective
      description
      requirements
      image
      contributors {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      courseTags {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      skillLevel
      dateCreated
      isFeatured
      imageAltText
      trailerEmbedId
      courseUrlTitle
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      timeHours
      timeMinutes
      learningObjective
      description
      requirements
      image
      contributors {
        items {
          id
          contributorID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      courseTags {
        items {
          id
          tagID
          courseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      skillLevel
      dateCreated
      isFeatured
      imageAltText
      trailerEmbedId
      courseUrlTitle
      published
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCourseTag = /* GraphQL */ `
  mutation CreateCourseTag(
    $input: CreateCourseTagInput!
    $condition: ModelCourseTagConditionInput
  ) {
    createCourseTag(input: $input, condition: $condition) {
      id
      tagID
      courseID
      tag {
        id
        name
        courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCourseTag = /* GraphQL */ `
  mutation UpdateCourseTag(
    $input: UpdateCourseTagInput!
    $condition: ModelCourseTagConditionInput
  ) {
    updateCourseTag(input: $input, condition: $condition) {
      id
      tagID
      courseID
      tag {
        id
        name
        courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCourseTag = /* GraphQL */ `
  mutation DeleteCourseTag(
    $input: DeleteCourseTagInput!
    $condition: ModelCourseTagConditionInput
  ) {
    deleteCourseTag(input: $input, condition: $condition) {
      id
      tagID
      courseID
      tag {
        id
        name
        courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContributorCourse = /* GraphQL */ `
  mutation CreateContributorCourse(
    $input: CreateContributorCourseInput!
    $condition: ModelContributorCourseConditionInput
  ) {
    createContributorCourse(input: $input, condition: $condition) {
      id
      contributorID
      courseID
      contributor {
        id
        jobTitle
        socialNetwork {
          platform
          url
        }
        courses {
          nextToken
          startedAt
        }
        bio
        profilePic
        username
        lastName
        firstName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContributorCourse = /* GraphQL */ `
  mutation UpdateContributorCourse(
    $input: UpdateContributorCourseInput!
    $condition: ModelContributorCourseConditionInput
  ) {
    updateContributorCourse(input: $input, condition: $condition) {
      id
      contributorID
      courseID
      contributor {
        id
        jobTitle
        socialNetwork {
          platform
          url
        }
        courses {
          nextToken
          startedAt
        }
        bio
        profilePic
        username
        lastName
        firstName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContributorCourse = /* GraphQL */ `
  mutation DeleteContributorCourse(
    $input: DeleteContributorCourseInput!
    $condition: ModelContributorCourseConditionInput
  ) {
    deleteContributorCourse(input: $input, condition: $condition) {
      id
      contributorID
      courseID
      contributor {
        id
        jobTitle
        socialNetwork {
          platform
          url
        }
        courses {
          nextToken
          startedAt
        }
        bio
        profilePic
        username
        lastName
        firstName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        title
        timeHours
        timeMinutes
        learningObjective
        description
        requirements
        image
        contributors {
          nextToken
          startedAt
        }
        courseTags {
          nextToken
          startedAt
        }
        skillLevel
        dateCreated
        isFeatured
        imageAltText
        trailerEmbedId
        courseUrlTitle
        published
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
