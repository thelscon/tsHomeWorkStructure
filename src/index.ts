class Lecturer {
  _name: string;
  _surname: string;
  _position: string;
  _company: string;
  _experience: string;
  _courses: string;
  _contacts: string;

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get position(): string {
    return this._position;
  }

  get company(): string {
    return this._company;
  }

  get experience(): string {
    return this._experience;
  }

  get courses(): string {
    return this._courses;
  }

  get contacts(): string {
    return this._contacts;
  }

  constructor(
    name: string,
    surname: string,
    position: string,
    company: string,
    experience: string,
    courses: string,
    contacts: string
  ) {
    this._name = name;
    this._surname = surname;
    this._position = position;
    this._company = company;
    this._experience = experience;
    this._courses = courses;
    this._contacts = contacts;
  }
}
type developerLevel = 'junior' | 'middle' | 'senior';
type statusGroup = 'not learn' | 'learn' | 'finish learn';

enum AreaName {
  FrontEnd = 'Front-End',
  BaclEnd = 'Back-end',
  Java = 'Java',
  CSharp = 'C#',
  Python = 'Python',
  Design = 'Design & UI/UX',
}

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: Area[] = [];
  _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addLecturer(value: Lecturer): void {
    this._lecturers.push(value);
  }

  removeLecturer(searchNameLecturer: string, searchSurnameLecturer: string): void {
    const removePosition: number = this._lecturers.findIndex(
      lecturer => lecturer.name === searchNameLecturer && lecturer.surname === searchSurnameLecturer
    );
    if (removePosition >= 0) {
      this._lecturers.splice(removePosition, 1);
    }
  }

  addArea(value: Area): void {
    this._areas.push(value);
  }

  removeArea(value: string): void {
    const removePosition: number = this._areas.findIndex(area => area.name === value);
    if (removePosition >= 0) {
      this._lecturers.splice(removePosition, 1);
    }
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: Level[] = [];
  _name: AreaName;

  get name(): string {
    return this._name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  constructor(name: AreaName) {
    this._name = name;
  }

  addLevel(value: Level): void {
    this._levels.push(value);
  }

  removeLevel(removeLevel: Level): void {
    const removePosition = this._levels.findIndex(value => value.name === removeLevel.name);
    if (removePosition >= 0) {
      this._levels.splice(removePosition, 1);
    }
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups: Group[] = [];
  _name: developerLevel;
  _description: string;

  get name(): developerLevel {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): Group[] {
    return this._groups;
  }

  constructor(name: developerLevel, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(removeGroup: Group): void {
    const removePosition = this._groups.findIndex(value => value.area.name === removeGroup.area.name);
    this._groups.splice(removePosition, 1);
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: Area;
  _levelName: Level;
  _status: statusGroup = 'not learn';
  _students: Students = new Students(); // Modify the array so that it has a valid toSorted method*

  get area(): Area {
    return this._area;
  }

  get levelName(): developerLevel {
    return this._levelName.name;
  }

  constructor(directionName: Area, levelName: Level) {
    this._area = directionName;
    this._levelName = levelName;
  }

  setStatus(status: 'not learn' | 'learn' | 'finish learn'): void {
    this._status = status;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(removeStudent: Student): void {
    const removePosition = this._students.findIndex(value => value.fullName === removeStudent.fullName);
    this._students.splice(removePosition, 1);
  }

  showPerformance(): unknown[] {
    const sortedStudents = this._students.toSorted(
      (a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Students extends Array {
  toSorted = function (func: (a: any, b: any) => number): unknown[] {
    return Array.from(this).sort(func);
  };
}
class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;

  _grades: [string, number][] = []; // workName: mark
  _visits: [string, boolean][] = []; // lesson: present

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  setVisit(lesson: number, present: boolean): void {
    if (lesson >= 1 && lesson <= this._grades.length) {
      this._visits.push([this._grades[lesson - 1][0], present]);
    }
  }

  setGrade(currentGrade: string, mark: number): void {
    this._grades.push([currentGrade, mark]);
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((acc, currentGrade) => acc + currentGrade[1], 0) / gradeValues.length;
    const attendancePercentage = (this._visits.filter(present => present[1]).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
