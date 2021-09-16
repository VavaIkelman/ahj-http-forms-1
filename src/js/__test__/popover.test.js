/* eslint-disable no-undef */
import Popover from '../Popover';

test('init', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="button" data-popover-title="IT-афоризм" data-popover-content="Старый баг лучше новых двух">Жмакни меня!</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector('.button'));
  popButton.init();
  const title = popButton.popContainer.querySelector('.pop_title');
  const text = popButton.popContainer.querySelector('.pop_text');
  expect(title.innerText).toBe('IT-афоризм');
  expect(text.innerText).toBe('Старый баг лучше новых двух');
});

test('show popup', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="button" data-popover-title="IT-афоризм" data-popover-content="Старый баг лучше новых двух">Жмакни меня!</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector('.button'));
  popButton.init();
  const button = document.querySelector('button.button');
  button.click();

  const title = document.querySelector('.pop_title');
  const text = document.querySelector('.pop_text');
  expect(title.innerText).toBe('IT-афоризм');
  expect(text.innerText).toBe('Старый баг лучше новых двух');
});

test('close popup', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="button" data-popover-title="IT-афоризм" data-popover-content="Старый баг лучше новых двух">Жмакни меня!</button>';
  document.body.appendChild(HTML);
  const popButton = new Popover(document.querySelector('.button'));
  popButton.init();
  const button = document.querySelector('button.button');
  button.click();
  expect(document.contains(popButton.popContainer)).toBeTruthy();
  button.click();
  expect(document.contains(popButton.popContainer)).toBeFalsy();
});
