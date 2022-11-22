const solution = (s) =>
  JSON.parse(s.replace(/[{}]/g, replacer))
    .sort(sortLength)
    .reduce(pushSetArray, []);

const replaceValue = {
  "{": "[",
  "}": "]",
};

const replacer = (target) => replaceValue[target];

const sortLength = (a, b) => a.length - b.length;

const pushSetArray = (prev, curr) => [...new Set([...prev, ...curr])];

// execution
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
