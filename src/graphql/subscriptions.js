/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateContributor = /* GraphQL */ `
  subscription OnCreateContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onCreateContributor(filter: $filter) {
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
export const onUpdateContributor = /* GraphQL */ `
  subscription OnUpdateContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onUpdateContributor(filter: $filter) {
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
export const onDeleteContributor = /* GraphQL */ `
  subscription OnDeleteContributor(
    $filter: ModelSubscriptionContributorFilterInput
  ) {
    onDeleteContributor(filter: $filter) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateCourseTag = /* GraphQL */ `
  subscription OnCreateCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
  ) {
    onCreateCourseTag(filter: $filter) {
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
export const onUpdateCourseTag = /* GraphQL */ `
  subscription OnUpdateCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
  ) {
    onUpdateCourseTag(filter: $filter) {
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
export const onDeleteCourseTag = /* GraphQL */ `
  subscription OnDeleteCourseTag(
    $filter: ModelSubscriptionCourseTagFilterInput
  ) {
    onDeleteCourseTag(filter: $filter) {
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
export const onCreateContributorCourse = /* GraphQL */ `
  subscription OnCreateContributorCourse(
    $filter: ModelSubscriptionContributorCourseFilterInput
  ) {
    onCreateContributorCourse(filter: $filter) {
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
export const onUpdateContributorCourse = /* GraphQL */ `
  subscription OnUpdateContributorCourse(
    $filter: ModelSubscriptionContributorCourseFilterInput
  ) {
    onUpdateContributorCourse(filter: $filter) {
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
export const onDeleteContributorCourse = /* GraphQL */ `
  subscription OnDeleteContributorCourse(
    $filter: ModelSubscriptionContributorCourseFilterInput
  ) {
    onDeleteContributorCourse(filter: $filter) {
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
