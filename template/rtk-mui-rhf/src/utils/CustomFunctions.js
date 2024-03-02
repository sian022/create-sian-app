import CryptoJS from "crypto-js";

export const decryptString = (data, saltkey) => {
  if (!data) return null;

  const bytes = CryptoJS.AES.decrypt(data, saltkey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const base64ToBlob = (base64) => {
  const binaryString = atob(base64.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(binaryString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: "image/jpeg" });
};

export const convertToTitleCase = (str) => {
  return str.replace(/(\w)([A-Z])/g, "$1 $2").replace(/\w\S*/g, (txt) => {
    if (txt.toLowerCase() === "id") {
      return "ID";
    } else {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  });
};

export const titleCaseToCamelCase = (titleCaseString) => {
  return titleCaseString
    .toLowerCase()
    .replace(/\s+(.)/g, (_, match) => match.toUpperCase());
};

export const shallowEqualObject = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};

export const shallowEqualArray = (arrA, arrB) => {
  if (arrA === arrB) {
    return true;
  }

  if (
    !Array.isArray(arrA) ||
    !Array.isArray(arrB) ||
    arrA === null ||
    arrB === null
  ) {
    return false;
  }

  const lengthA = arrA.length;
  const lengthB = arrB.length;

  if (lengthA !== lengthB) {
    return false;
  }

  for (let i = 0; i < lengthA; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
};

export const formatOrdinalPrefix = (number) => {
  const lastDigit = number % 10;
  const twoDigits = number % 100;

  if (twoDigits >= 11 && twoDigits <= 13) {
    return `${number}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
};

export const dashFormat = (inputValue) => {
  // Use regex to add a dash after every three digits from the left
  const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, "-");
  return formattedValue;
};

export const formatPhoneNumber = (inputNumber) => {
  let numberString = inputNumber.toString();

  if (numberString.length >= 10) {
    let formattedNumber =
      numberString.slice(0, 3) +
      "-" +
      numberString.slice(3, 7) +
      "-" +
      numberString.slice(7);

    return formattedNumber;
  } else {
    return inputNumber;
  }
};

//Error Handling
export const handleCatchErrorMessage = (error) => {
  if (error?.message) {
    return error?.message;
  } else if (error?.status === 400) {
    return "Something went wrong with your request.";
  } else if (error?.status === 401) {
    return "Authentication required.";
  } else if (error?.status === 403) {
    return "You don't have permission for this.";
  } else if (error?.status === 404) {
    return "The requested resource couldn't be found.";
  } else if (error?.status === 500) {
    return "Something unexpected happened on our end.";
  } else {
    return "An unexpected error occurred";
  }
};
