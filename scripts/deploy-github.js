const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/hoangcoding/hoangcoding.github.io.git',
  },
  (err) => {
    console.log(err);
    console.log('Deploy Complete!')
  }
)