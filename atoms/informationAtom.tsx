import { atom } from 'jotai';

const informationAtom = atom({
  name: 'Cha Haneum', // 자동 추론
  email: 'chahanm@proton.me',
  github: 'chebread',
  blog: '@haneum',
});

const linksAtom = atom({
  github: 'https://github.com/chebread',
  blog: 'https://velog.io/@haneum',
});

export { informationAtom, linksAtom };
