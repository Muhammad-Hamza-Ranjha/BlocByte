import crypto from 'node:crypto';

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem('blocbytes-theme');
      const theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = 'light';
    }
  })();
`;

const hash = crypto.createHash('sha256').update(themeScript).digest('base64');

console.log(`'sha256-${hash}'`);
