module.exports = function check(str, bracketsConfig) {

  let reg = ''; 

  for (let i = 0; i < bracketsConfig.length; i++) {

// generate regular expression
    let element = bracketsConfig[i].map((el) => {
      let out;
      switch (el) {
        case '(':
          out = '\\(';
          break;
        case ')':
          out = '\\)';
          break;
        case '[':
          out = '\\[';
          break;
        case ']':
          out = '\\]';
          break;
        case '{':
          out = '\\{';
          break;
        case '}':
          out = '\\}';
          break;
        case '|':
          out = '\\|';
          break;

        default: out = el;
          break;
      }

      return out;
    });

    reg = reg + element[0] + '()*' + element[1] + '|';

  }

  reg = reg.slice(0, -1);
  reg = new RegExp(reg);


  while (str.search(reg) !== -1) {
    str = str.replace(reg, '');
  }

  return str === '';
}