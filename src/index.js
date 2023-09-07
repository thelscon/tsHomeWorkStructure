var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lecturer = /** @class */ (function () {
    function Lecturer(name, surname, position, company, experience, courses, contacts) {
        this._name = name;
        this._surname = surname;
        this._position = position;
        this._company = company;
        this._experience = experience;
        this._courses = courses;
        this._contacts = contacts;
    }
    Object.defineProperty(Lecturer.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "company", {
        get: function () {
            return this._company;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "experience", {
        get: function () {
            return this._experience;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "courses", {
        get: function () {
            return this._courses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "contacts", {
        get: function () {
            return this._contacts;
        },
        enumerable: false,
        configurable: true
    });
    return Lecturer;
}());
var AreaName;
(function (AreaName) {
    AreaName["FrontEnd"] = "Front-End";
    AreaName["BaclEnd"] = "Back-end";
    AreaName["Java"] = "Java";
    AreaName["CSharp"] = "C#";
    AreaName["Python"] = "Python";
    AreaName["Design"] = "Design & UI/UX";
})(AreaName || (AreaName = {}));
var School = /** @class */ (function () {
    function School() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addLecturer = function (value) {
        this._lecturers.push(value);
    };
    School.prototype.removeLecturer = function (searchNameLecturer, searchSurnameLecturer) {
        var removePosition = this._lecturers.findIndex(function (lecturer) { return lecturer.name === searchNameLecturer && lecturer.surname === searchSurnameLecturer; });
        if (removePosition >= 0) {
            this._lecturers.splice(removePosition, 1);
        }
    };
    School.prototype.addArea = function (value) {
        this._areas.push(value);
    };
    School.prototype.removeArea = function (value) {
        var removePosition = this._areas.findIndex(function (area) { return area.name === value; });
        if (removePosition >= 0) {
            this._lecturers.splice(removePosition, 1);
        }
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (value) {
        this._levels.push(value);
    };
    Area.prototype.removeLevel = function (removeLevel) {
        var removePosition = this._levels.findIndex(function (value) { return value.name === removeLevel.name; });
        if (removePosition >= 0) {
            this._levels.splice(removePosition, 1);
        }
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        // implement getters for fields and 'add/remove group' methods
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (removeGroup) {
        var removePosition = this._groups.findIndex(function (value) { return value.area.name === removeGroup.area.name; });
        this._groups.splice(removePosition, 1);
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._status = 'not learn';
        this._students = new Students(); // Modify the array so that it has a valid toSorted method*
        this._area = directionName;
        this._levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "levelName", {
        get: function () {
            return this._levelName.name;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.setStatus = function (status) {
        this._status = status;
    };
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (removeStudent) {
        var removePosition = this._students.findIndex(function (value) { return value.fullName === removeStudent.fullName; });
        this._students.splice(removePosition, 1);
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toSorted = function (func) {
            return Array.from(this).sort(func);
        };
        return _this;
    }
    return Students;
}(Array));
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = []; // workName: mark
        this._visits = []; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setVisit = function (lesson, present) {
        if (lesson >= 1 && lesson <= this._grades.length) {
            this._visits.push([this._grades[lesson - 1][0], present]);
        }
    };
    Student.prototype.setGrade = function (currentGrade, mark) {
        this._grades.push([currentGrade, mark]);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (acc, currentGrade) { return acc + currentGrade[1]; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present[1]; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
