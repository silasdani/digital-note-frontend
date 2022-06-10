class ContestantSerializer {
  static serialize(contestant) {
    const result = {
      first_name: contestant.firstName,
      last_name: contestant.lastName,
      email: contestant.email,
      student_class: contestant.studentClass,
      permissions: contestant.permissions,
      access_key: contestant.accessKey,
    }

    return result
  }
}

export default ContestantSerializer