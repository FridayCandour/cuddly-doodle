import axios from "axios";
// import crypto from "crypto";
/**
 *  *  EVERY THING FROM HERE ARE EXPERIMENTS BASED ON THE NEEDS OF THE PROJECT
 * @TODOS
 * *** need a time difference logic for time calculations
 *
 * *** a custom made uuid
 *
 * *** need a data validator
 */

// export function uuidSuper(num = 10) {
//   crypto.getRandomValues = (arr) => crypto.randomBytes(arr.length);
//   const btoa = (text) => {
//     return Buffer.from(text, "binary").toString("base64");
//   };
//   function generateUID(length) {
//     length = Math.round(length) || 10;
//     return btoa(
//       Array.from(crypto.getRandomValues(new Uint8Array(length)))
//         .map((b) => String.fromCharCode(b))
//         .join("")
//     )
//       .replace(/[+/]/g, "")
//       .substring(0, length);
//   }

//   function dec2hex(dec) {
//     return dec.toString(16).padStart(2, "0");
//   }
//   function generateId(len) {
//     len = Math.round(len);
//     return Array.from(
//       crypto.getRandomValues(new Uint8Array(len || 10)),
//       dec2hex
//     ).join("");
//   }

//   return generateUID(num / 2) + generateId(num / 2);
// }

// console.log(uuidSuper(18));

export class schema {
  constructor(schema) {
    if (!(typeof schema === "object" && !Array.isArray(schema))) {
      throw new Error("Given data scheme is ivalid  " + schema);
    }
    this.data = 0;
    this.dataLength = 0;
    for (const i in schema) {
      this.dataLength += 1;
    }
    this.schema = schema;
  }
  async validateData(data, del) {
    if (!(typeof data === "object" && !Array.isArray(data))) {
      throw new Error("Given data is invalid " + data);
    }
    this.data = 0;
    for (const [prop, value] of Object.entries(this.schema)) {
      const {
        err,
        type,
        maxLength,
        minLength,
        mustInclude,
        mustNotBeLesserThan,
        mustNotBeGreaterThan,
      } = value;

      if (Object.hasOwnProperty.call(data, prop)) {
        if (
          mustNotBeGreaterThan &&
          typeof data[prop] === "number" &&
          data[prop] > mustNotBeGreaterThan
        ) {
          if (err) {
            throw new Error(err);
          }
          throw new Error(
            `Given ${prop} must not be greater than ${mustNotBeGreaterThan}`
          );
        }

        if (
          mustNotBeLesserThan &&
          typeof data[prop] === "number" &&
          data[prop] < mustNotBeLesserThan
        ) {
          if (err) {
            throw new Error(err);
          }
          throw new Error(
            `Given ${prop} must not be lesser than ${mustNotBeLesserThan}`
          );
        }
        if (type && typeof data[prop] !== type) {
          if (err) {
            throw new Error(err);
          }
          throw new Error(`Given ${prop} type is ivalid ${data[prop]}`);
        }
        if (
          maxLength &&
          typeof data[prop] === "string" &&
          data[prop].length > maxLength
        ) {
          if (err) {
            throw new Error(err);
          }
          throw new Error(
            `Given ${prop} length is greater than the one required `
          );
        }
        if (
          minLength &&
          typeof data[prop] === "string" &&
          data[prop].length > minLength
        ) {
          if (err) {
            throw new Error(err);
          }
          throw new Error(
            `Given ${prop} length is lesser than the one required `
          );
        }
        if (
          mustInclude &&
          !Array.isArray(mustInclude) &&
          typeof data[prop] === "string" &&
          !data[prop].includes(mustInclude)
        ) {
          if (err) {
            throw new Error(err);
          }
          throw new Error(`Given ${prop} does not includes ${mustInclude}`);
        }
        if (
          mustInclude &&
          Array.isArray(mustInclude) &&
          typeof data[prop] === "string"
        ) {
          let count = 0;
          for (let i = 0; i < mustInclude.length; i++) {
            if (data[prop].includes(mustInclude[i])) {
              count++;
            }
          }
          if (count > 0) {
            continue;
          }
          if (err) {
            throw new Error(err);
          }
          throw new Error(
            `Given ${prop} does not includes ${[...mustInclude]}`
          );
        }
        this.data += 1;
        if (del) {
          data[prop] = null;
        }
      }
    }
    if (!(this.dataLength === this.data)) {
      throw new Error("invalid or incomplete data");
    }
  }
}

// const userData = new schema({
//   name: {
//     type: "string",
//     length: 10,
//     mustInclude: "f",
//   },
//   email: {
//     type: "string",
//     mustInclude: "@",
//   },
//   age: {
//     type: "number",
//     mustNotBeGreaterThan: 20,
//     err: "invalid age range",
//   },
// });

// userData.validateData({
//   name: "friday",
//   age: 20,
//   email: "friady@gmail",
// });

// 2. time experiment to get the exact time difference from difference Date() samples
// requirements
// enough time on pc :)

class dayTime {
  constructor(dayObject) {
    if (typeof dayObject === "undefined") {
      const month = Date().split(" ")[1];
      const day = Date().split(" ")[2];
      const year = Date().split(" ")[3];
      const time = Date().split(" ")[4];
      this.year = year;
      this.month = month;
      1;
      this.day = day;
      this.time = time;
      // to account for leap year
      if ((Date().split(" ")[3] * 1) % 4 === 0) {
        mArray[1].feb = 29;
      }
    } else if (
      typeof dayObject !== "string" ||
      dayObject.length < 55 ||
      dayObject.length > 65
    ) {
      throw new Error(
        "the given day must be a string of format that Date() returns"
      );
    }

    const month = dayObject.split(" ")[1];
    const day = dayObject.split(" ")[2];
    const year = dayObject.split(" ")[3];
    const time = dayObject.split(" ")[4];
    this.year = year * 1;
    this.month = month;
    this.day = day * 1;
    this.hour = time.split(":")[0] * 1;
    this.minute = time.split(":")[1] * 1;
    this.second = time.split(":")[2] * 1;
    this.time = time;
    // to account for leap year
    if ((dayObject.split(" ")[3] * 1) % 4 === 0) {
      this.isLeapYear = true;
    }
  }
}

/** ****** HOW TO USE TIME RESOLVER ******
 *
 * TIME RESOLVER ACCEPTS ONLY Date()  FORMAT
 *
 * A - YOUR NEW TIME OR LATEST TIME STAMP : OPTIONAL
 *
 * B - THE TIME YOU WANT TO DIFFERENTIATE
 *
 * timeResolver(A).constractTime(B)
 * it returns something like
 * 
 *  {
 * 
    year: number,
    *
    month: number,
    *
    day: number,
    *
    hour: number,
    *
    minute: number,
    *
    second: number
    *
}
 */

export function timeResolver(_1stTime = Date()) {
  return {
    constractTime(_2ndTime) {
      _1stTime = new dayTime(_1stTime);
      _2ndTime = new dayTime(_2ndTime);
      // resolve year
      let year = _1stTime.year - _2ndTime.year + "";
      if (year.includes("-")) {
        year = year.slice(1, year.length);
      }
      year = year * 1;

      // resolve month
      let daysInMonth1,
        daysInMonth2,
        day = 0,
        month = 0;
      const mArray = [
        { jan: 31 },
        { feb: 28 },
        { mar: 31 },
        { apr: 30 },
        { may: 31 },
        { jun: 30 },
        { jul: 31 },
        { aug: 31 },
        { sep: 30 },
        { oct: 30 },
        { nov: 31 },
        { dec: 31 },
      ];

      function getDaysForwards(ind, time) {
        let days = 0,
          pastDays = time.day,
          m = mArray.slice(0, ind + 1);
        for (let i = 0; i < m.length; i++) {
          if (i === m.length - 1) {
            days += pastDays;
          } else {
            for (const [k, v] of Object.entries(m[i])) {
              days += v;
            }
          }
        }
        return time.isLeapYear === true ? days + 1 : days;
      }

      function getDaysBackwards(ind, time) {
        let days = 0,
          pastDays = time.day,
          m = mArray.slice(ind, mArray.length);
        for (let i = 0; i < m.length; i++) {
          if (i === m.length - 1) {
            days += pastDays;
          } else {
            for (const [k, v] of Object.entries(m[i])) {
              days += v;
            }
          }
        }
        return time.isLeapYear === true ? days + 1 : days;
      }
      if (year < 1) {
        for (let i = 0; i < mArray.length; i++) {
          const mo = mArray[i];
          for (const m in mo) {
            if (_1stTime.month.toLowerCase() === m) {
              daysInMonth1 = getDaysForwards(i, _1stTime);
            }

            if (_2ndTime.month.toLowerCase() === m) {
              daysInMonth2 = getDaysForwards(i, _2ndTime);
            }
          }
        }
        month = ((daysInMonth1 - daysInMonth2) / 30 + "").split(".")[0];
        day = (daysInMonth1 - daysInMonth2) % 30;
      } else if (year === 1) {
        for (let i = 0; i < mArray.length; i++) {
          const mo = mArray[i];
          for (const m in mo) {
            if (_1stTime.month.toLowerCase() === m) {
              daysInMonth1 = getDaysBackwards(i, _1stTime);
            }

            if (_2ndTime.month.toLowerCase() === m) {
              daysInMonth2 = getDaysForwards(i, _2ndTime);
            }
          }
        }
        year = 0;
        month = ((daysInMonth1 + daysInMonth2) / 30 + "").split(".")[0];
        day = (daysInMonth1 + daysInMonth2) % 30;
      } else if (year > 1) {
        for (let i = 0; i < mArray.length; i++) {
          const mo = mArray[i];
          for (const m in mo) {
            if (_1stTime.month.toLowerCase() === m) {
              daysInMonth1 = getDaysBackwards(i, _1stTime);
            }

            if (_2ndTime.month.toLowerCase() === m) {
              daysInMonth2 = getDaysForwards(i, _2ndTime);
            }
          }
        }
        year = year - 1;
        month = ((daysInMonth1 + daysInMonth2) / 30 + "").split(".")[0];
        day = (daysInMonth1 + daysInMonth2) % 30;
      }
      month += "";
      if (month.includes("-")) {
        month = month.slice(1, month.length) * 1;
      } else {
        month = month * 1;
      }
      if (month > 11) {
        year += (month / 12 + "").split(".")[0] * 1;
        month %= month;
      }
      // resolve day
      day += "";
      if (day.includes("-")) {
        day = day.slice(1, day.length) * 1;
      } else {
        day = day * 1;
      }
      if (day === 1 && month === 0) {
        day = 0;
      }
      // resolve hour
      let hour = _1stTime.hour - _2ndTime.hour + "";
      if (hour.includes("-")) {
        hour = hour.slice(1, hour.length) * 1;
      } else {
        hour = hour * 1;
      }

      // resolve minute
      let minute = _1stTime.minute - _2ndTime.minute + "";
      if (minute.includes("-")) {
        minute = minute.slice(1, minute.length) * 1;
      } else {
        minute *= 1;
      }

      if (minute > 59) {
        hour += (minute / 59 + "").split(".")[0] * 1;
        minute = minute % 59;
      }
      // resolve seconds
      _2ndTime.second = 59 - _2ndTime.second;
      let second = _1stTime.second + _2ndTime.second + "";
      if (second.includes("-")) {
        second = second.slice(1, second.length) * 1;
      } else {
        second *= 1;
      }
      if (second > 59) {
        minute += (second / 59 + "").split(".")[0] * 1;
        second = second % 59;
      }
      if (hour > 23) {
        day += (hour / 24 + "").split(".")[0] * 1;
        hour = hour % 24;
      }
      return {
        year,
        month,
        day,
        hour,
        minute,
        second,
      };
    },
  };
}

// this actually worked oh nice :)
// i have  a problem with the minute, sometimes it just show something else

/**
 * an axois base fetcher
 * @param url string
 * @param method string
 * @param head object
 * @param data object
 * @returns any
 */

export const fetcher = async (url, method, head, data) => {
  const asis = await axios({
    method: method,
    url: url,
    headers: head,
    data: data,
  }).catch(function (error) {
    const obj = {};
    if (error.response) {
      obj.data = error.response.data;
      obj.status = error.response.status;
      obj.headers = error.response.headers;
    } else if (error.request) {
      obj.request = error.request;
      obj.error = error.message;
    }
    obj.error = error.message;
    return obj;
  });
  return asis;
};
