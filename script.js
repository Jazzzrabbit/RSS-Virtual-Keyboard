const body = document.querySelector('body');
const keys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const keyCodes = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const keysRu = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const spec = "`1234567890-=[];'\\/,.".split('');

const keyList = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'];
const keyCodeRu = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.'];
const exceptions = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'Shift', 'ArrowUp', 'Control', 'Meta', 'Space', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const bigButtons = ['MetaLeft', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Backspace', 'Tab', 'Enter', 'Delete', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'Shift', 'Alt', 'Meta', 'Control'];

const main = document.createElement('main');
const container = document.createElement('div');
const textarea = document.createElement('div');
const keyboard = document.createElement('div');
const keyboardWrapper = document.createElement('div');
const key = document.createElement('div');
const title = document.createElement('h1');
const info = document.createElement('p');

let capsOn = false;
let shiftOn = false;
let altOn = false;
let ctrlOn = false;

function setLangEn() {
  window.sessionStorage.setItem('lang', 'en');
}

function setLangRu() {
  window.sessionStorage.setItem('lang', 'ru');
}

function getLang() {
  return sessionStorage.getItem('lang');
}

title.classList.add('title');
key.classList.add('key');
textarea.classList.add('textarea__wrapper');
keyboardWrapper.classList.add('keyboard__wrapper');
keyboard.classList.add('keyboard');
container.classList.add('container');
main.classList.add('main');
info.classList.add('info');

body.appendChild(main);
main.appendChild(container);
container.appendChild(title);
container.appendChild(textarea);
container.appendChild(keyboard);
container.appendChild(info);
keyboard.appendChild(keyboardWrapper);

document.querySelector('.title').innerHTML = 'Virtual Keyboard';
document.querySelector('.textarea__wrapper').innerHTML = '<textarea class="textarea" name="text" id="textarea" rows="5" cols="50"></textarea>';
document.querySelector('.info').innerHTML = 'Клавиатура создана в операционной системе Linux Manjaro. Для переключения раскладки нажмите левые Ctrl + Alt.';

function renderEn() {
  let html = '';
  for (let i = 0; i < keyCodes.length; i += 1) {
    if (bigButtons.includes(keyCodes[i])) {
      html += `<div class="key big-button" id="${keys[i]}">`;
      html += keyCodes[i];
      html += '</div>';
      document.querySelector('.keyboard__wrapper').innerHTML = html;
      keyboard.appendChild(keyboardWrapper);
    } else {
      html += `<div class="key" id="${keys[i]}">`;
      html += keyCodes[i];
      html += '</div>';
      document.querySelector('.keyboard__wrapper').innerHTML = html;
      keyboard.appendChild(keyboardWrapper);
    }
  }
}

function renderRu() {
  let html = '';
  for (let i = 0; i < keysRu.length; i += 1) {
    if (bigButtons.includes(keysRu[i])) {
      html += `<div class="key big-button" id="${keys[i]}">`;
      html += keysRu[i];
      html += '</div>';
      document.querySelector('.keyboard__wrapper').innerHTML = html;
      keyboard.appendChild(keyboardWrapper);
    } else {
      html += `<div class="key" id="${keys[i]}">`;
      html += keysRu[i];
      html += '</div>';
      document.querySelector('.keyboard__wrapper').innerHTML = html;
      keyboard.appendChild(keyboardWrapper);
    }
  }
}

function initEn() {
  const buttons = document.querySelectorAll('.key');
  for (let i = 0; i < buttons.length; i += 1) {
    if (buttons[i].id === 'Backspace') {
      document.getElementById('Backspace').classList.add('backspace');
    }
    if (buttons[i].id === 'Tab') {
      document.getElementById('Tab').classList.add('tab');
    }
    if (buttons[i].id === 'Enter') {
      document.getElementById('Enter').classList.add('enter');
    }
    if (buttons[i].id === 'CapsLock') {
      document.getElementById('CapsLock').classList.add('caps');
    }
    if (buttons[i].id === 'ShiftLeft') {
      document.getElementById('ShiftLeft').classList.add('shift-left');
      document.getElementById('ShiftLeft').innerHTML = 'Shift';
    }
    if (buttons[i].id === 'ShiftRight') {
      document.getElementById('ShiftRight').classList.add('shift-right');
      document.getElementById('ShiftLeft').innerHTML = 'Shift';
    }
    if (buttons[i].id === 'Space') {
      document.getElementById('Space').classList.add('space');
    }
    if (buttons[i].id === 'ControlLeft') document.getElementById('ControlLeft').innerHTML = 'Ctrl';
    if (buttons[i].id === 'ControlRight') document.getElementById('ControlRight').innerHTML = 'Ctrl';
    if (buttons[i].id === 'ArrowUp') document.getElementById('ArrowUp').innerHTML = '▲';
    if (buttons[i].id === 'ArrowDown') document.getElementById('ArrowDown').innerHTML = '▼';
    if (buttons[i].id === 'ArrowLeft') document.getElementById('ArrowLeft').innerHTML = '◄';
    if (buttons[i].id === 'ArrowRight') document.getElementById('ArrowRight').innerHTML = '►';
    if (buttons[i].id === 'MetaLeft') document.getElementById('MetaLeft').innerHTML = 'Win';
    if (buttons[i].id === 'Delete') document.getElementById('Delete').innerHTML = 'Del';
  }
}

function initRu() {
  const buttons = document.querySelectorAll('.key');
  for (let i = 0; i < buttons.length; i += 1) {
    if (buttons[i].id === 'Backspace') {
      document.getElementById('Backspace').classList.add('backspace');
    }
    if (buttons[i].id === 'Tab') {
      document.getElementById('Tab').classList.add('tab');
    }
    if (buttons[i].id === 'Enter') {
      document.getElementById('Enter').classList.add('enter');
    }
    if (buttons[i].id === 'CapsLock') {
      document.getElementById('CapsLock').classList.add('caps');
    }
    if (buttons[i].id === 'ShiftLeft') {
      document.getElementById('ShiftLeft').classList.add('shift-left');
      document.getElementById('ShiftLeft').innerHTML = 'Shift';
    }
    if (buttons[i].id === 'ShiftRight') {
      document.getElementById('ShiftRight').classList.add('shift-right');
      document.getElementById('ShiftLeft').innerHTML = 'Shift';
    }
    if (buttons[i].id === 'Space') {
      document.getElementById('Space').classList.add('space');
    }
    if (buttons[i].id === 'ControlLeft') document.getElementById('ControlLeft').innerHTML = 'Ctrl';
    if (buttons[i].id === 'ControlRight') document.getElementById('ControlRight').innerHTML = 'Ctrl';
    if (buttons[i].id === 'ArrowUp') document.getElementById('ArrowUp').innerHTML = '▲';
    if (buttons[i].id === 'ArrowDown') document.getElementById('ArrowDown').innerHTML = '▼';
    if (buttons[i].id === 'ArrowLeft') document.getElementById('ArrowLeft').innerHTML = '◄';
    if (buttons[i].id === 'ArrowRight') document.getElementById('ArrowRight').innerHTML = '►';
    if (buttons[i].id === 'MetaLeft') document.getElementById('MetaLeft').innerHTML = 'Win';
    if (buttons[i].id === 'Delete') document.getElementById('Delete').innerHTML = 'Del';
  }
}

function init() {
  for (let i = 0; i < keys.length; i += 1) {
    document.getElementById(keys[i]).addEventListener('click', () => {
      document.getElementById(keys[i]).classList.add('active');
      setTimeout(() => {
        document.getElementById(keys[i]).classList.remove('active');
      }, 200);
    });
  }
}

const ta = document.getElementById('textarea');

function backspaceText() {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  if (ta.selectionEnd === start && start === 0) return;
  if (end === start) {
    ta.value = ta.value.slice(0, start - 1) + ta.value.slice(start);
    ta.focus();
    ta.selectionStart = start - 1;
    ta.selectionEnd = start - 1;
  } else {
    ta.value = ta.value.slice(0, start) + ta.value.slice(end);
    ta.focus();
    ta.selectionStart = start;
    ta.selectionEnd = start;
  }
}

function tabText() {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  if (start === end) {
    ta.value = `${ta.value.slice(0, start)}\t${ta.value.slice(start)}`;
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  } else {
    ta.value = `${ta.value.slice(0, start)}\t${ta.value.slice(end)}`;
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  }
}

function spaceText() {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  if (start === end) {
    ta.value = `${ta.value.slice(0, start)} ${ta.value.slice(start)}`;
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  } else {
    ta.value = `${ta.value.slice(0, start)} ${ta.value.slice(end)}`;
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  }
}

function delText() {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  if (start === end) {
    ta.value = ta.value.slice(0, start) + ta.value.slice(start + 1);
    ta.focus();
    ta.selectionStart = start;
    ta.selectionEnd = start;
  } else {
    ta.value = ta.value.slice(0, start) + ta.value.slice(end);
    ta.focus();
    ta.selectionStart = start;
    ta.selectionEnd = start;
  }
}

function enterText() {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  if (start === end) {
    ta.value = `${ta.value.slice(0, start)}\n${ta.value.slice(start)}`;
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  } else {
    ta.value = `${ta.value.slice(0, start)}\n${ta.value.slice(end)}`;
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  }
}

function output(x) {
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  if (start === end) {
    ta.value = ta.value.slice(0, start) + x + ta.value.slice(start);
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  } else {
    ta.value = ta.value.slice(0, start) + x + ta.value.slice(end);
    ta.focus();
    ta.selectionStart = start + 1;
    ta.selectionEnd = start + 1;
  } return ta.value;
}

function specSymbolsRender() {
  const inputs = ["`1234567890-=[]\\;'/,./"].toString().split('');
  const outputs = ['~!@#$%^&*()_+{}|:"?<>?'].toString().split('');
  const inputsRu = ['1234567890-=\\/.'].toString().split('');
  const outputsRu = ['!"№;%:?*()_+||,'].toString().split('');
  const buttons = document.getElementsByClassName('key');
  const arr = [];

  if (getLang() === 'en') {
    [...buttons].forEach((button) => {
      if (inputs.includes(button.innerText) || outputs.includes(button.innerText)) arr.push(button);
    });

    for (let i = 0; i < arr.length; i += 1) {
      if (!shiftOn) arr[i].innerHTML = outputs[i];
      else arr[i].innerHTML = inputs[i];
    }
  } else if (getLang() === 'ru') {
    [...buttons].forEach((button) => {
      if (inputsRu.includes(button.innerText) || outputsRu.includes(button.innerText)) {
        arr.push(button);
      }
    });

    for (let i = 0; i < arr.length; i += 1) {
      if (!shiftOn) arr[i].innerHTML = outputsRu[i];
      else arr[i].innerHTML = inputsRu[i];
    }
  }
}

function printTextEn(x) {
  if (shiftOn) {
    if (x === '`') ta.value = output('~');
    if (x === '1') ta.value = output('!');
    if (x === '2') ta.value = output('@');
    if (x === '3') ta.value = output('#');
    if (x === '4') ta.value = output('$');
    if (x === '5') ta.value = output('%');
    if (x === '6') ta.value = output('^');
    if (x === '7') ta.value = output('&');
    if (x === '8') ta.value = output('*');
    if (x === '9') ta.value = output('(');
    if (x === '0') ta.value = output(')');
    if (x === '-') ta.value = output('_');
    if (x === '=') ta.value = output('+');
    if (x === '[') ta.value = output('{');
    if (x === ']') ta.value = output('}');
    if (x === ';') ta.value = output(':');
    if (x === "'") ta.value = output('"');
    if (x === '\\') ta.value = output('|');
    if (x === ',') ta.value = output('<');
    if (x === '.') ta.value = output('>');
    if (x === '/') ta.value = output('?');
    if (!spec.includes(x)) ta.value = output(x.toUpperCase());
    specSymbolsRender();
  } else if (capsOn) ta.value = output(x.toUpperCase());
  else ta.value = output(x);
  shiftOn = false;
}

function printTextRu(x) {
  if (shiftOn) {
    if (x === '1') ta.value = output('!');
    if (x === '2') ta.value = output('"');
    if (x === '3') ta.value = output('№');
    if (x === '4') ta.value = output(';');
    if (x === '5') ta.value = output('%');
    if (x === '6') ta.value = output(':');
    if (x === '7') ta.value = output('?');
    if (x === '8') ta.value = output('*');
    if (x === '9') ta.value = output('(');
    if (x === '0') ta.value = output(')');
    if (x === '-') ta.value = output('_');
    if (x === '=') ta.value = output('+');
    if (x === '.') ta.value = output(',');
    if (x === '/') ta.value = output('|');
    if (x === '\\') ta.value = output('|');
    if (!spec.includes(x)) ta.value = output(x.toUpperCase());
    specSymbolsRender();
  } else if (capsOn) ta.value = output(x.toUpperCase());
  else ta.value = output(x);
  shiftOn = false;
}

window.addEventListener('keydown', (event) => {
  if (keys.includes(event.code)) {
    document.getElementById(event.code).classList.add('active');
    if (event.key.length === 1) {
      if (getLang() === 'en') {
        event.preventDefault();
        printTextEn(event.key);
      } else {
        event.preventDefault();
        printTextRu(event.key);
      }
    }
  }

  if (keys.includes(event.code)) {
    setTimeout(() => {
      document.getElementById(event.code).classList.remove('active');
    }, 200);
  }
});

function shiftToggle() {
  if (!shiftOn) shiftOn = true;
  else shiftOn = false;
}

function altToggle() {
  if (!altOn) altOn = true;
  else altOn = false;
}

function ctrlToggle() {
  if (!ctrlOn) ctrlOn = true;
  else ctrlOn = false;
}

function capsToggle() {
  if (!capsOn) capsOn = true;
  else capsOn = false;
}

function specSymbolInit() {
  document.addEventListener('keydown', (event) => {
    if (event.target.id === 'textarea') event.preventDefault();
    if (event.key === 'Backspace') backspaceText();
    if (event.key === 'Tab') {
      event.preventDefault();
      tabText();
    }
    if (event.code === 'ShiftLeft') {
      specSymbolsRender();
      shiftToggle();
    }
    if (event.code === 'ShiftRight') {
      specSymbolsRender();
      shiftToggle();
    }
    if (event.code === 'AltLeft') altToggle();
    if (event.code === 'ControlLeft') ctrlToggle();
    if (event.key === 'Delete') delText();
    if (event.key === 'CapsLock') capsToggle();
    if (event.key === 'Enter') enterText();
    if (event.key === 'ArrowUp') output('▲');
    if (event.key === 'ArrowDown') output('▼');
    if (event.key === 'ArrowLeft') output('◄');
    if (event.key === 'ArrowRight') output('►');
  });

  document.addEventListener('click', (e) => {
    if (e.target.id === 'Tab') tabText();
    if (e.target.id === 'Delete') delText();
    if (e.target.id === 'Enter') enterText();
    if (e.target.id === 'ArrowUp') output('▲');
    if (e.target.id === 'ArrowDown') output('▼');
    if (e.target.id === 'ArrowLeft') output('◄');
    if (e.target.id === 'ArrowRight') output('►');
    if (e.target.id === 'CapsLock') capsToggle();
    if (e.target.id === 'ShiftLeft') {
      specSymbolsRender();
      shiftToggle();
    }
    if (e.target.id === 'ControlLeft') ctrlToggle();
    if (e.target.id === 'AltLeft') altToggle();
    if (e.target.id === 'Backspace') backspaceText();
    if (e.target.id === 'Space') spaceText();
    if (e.target.id === 'ShiftRight') {
      specSymbolsRender();
      shiftToggle();
    }
  });
}

function typeEn() {
  for (let i = 0; i < keyCodes.length; i += 1) {
    document.getElementById(keys[i]).addEventListener('click', () => {
      if (!exceptions.includes(keyCodes[i]) && keys[i] !== undefined) {
        printTextEn(keyCodes[i].toLowerCase());
      }
    });
  }
}

function typeRu() {
  for (let i = 0; i < keyList.length; i += 1) {
    document.getElementById(keyList[i]).addEventListener('click', () => {
      if (!exceptions.includes(keyCodeRu[i]) && keyCodeRu[i] !== undefined) {
        printTextRu(keyCodeRu[i].toLowerCase());
      }
    });
  }
}

function switchToRu() {
  renderRu();
  initRu();
  typeRu();
  init();
  ctrlToggle();
  altToggle();
  setLangRu();
  shiftOn = false;
}

function switchToEn() {
  renderEn();
  initEn();
  typeEn();
  init();
  ctrlToggle();
  altToggle();
  setLangEn();
  shiftOn = false;
}

window.addEventListener('click', (e) => {
  if (e.target.id === 'ControlLeft' && altOn && getLang() === 'en') {
    switchToRu();
    return;
  }
  if (e.target.id === 'AltLeft' && ctrlOn && getLang() === 'en') {
    switchToRu();
    return;
  }
  if (e.target.id === 'ControlLeft' && altOn && getLang() === 'ru') {
    switchToEn();
    return;
  }
  if (e.target.id === 'AltLeft' && ctrlOn && getLang() === 'ru') {
    switchToEn();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'ControlLeft' && altOn && getLang() === 'en') {
    switchToRu();
    return;
  }
  if (e.code === 'AltLeft' && ctrlOn && getLang() === 'en') {
    switchToRu();
    return;
  }
  if (e.code === 'ControlLeft' && altOn && getLang() === 'ru') {
    switchToEn();
    return;
  }
  if (e.code === 'AltLeft' && ctrlOn && getLang() === 'ru') {
    switchToEn();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  if (lang === 'en') {
    renderEn();
    initEn();
    typeEn();
    init();
    specSymbolInit();
  } else if (lang === 'ru') {
    renderRu();
    initRu();
    typeRu();
    init();
    specSymbolInit();
  } else {
    renderEn();
    initEn();
    typeEn();
    init();
    specSymbolInit();
    setLangEn();
  }
});
