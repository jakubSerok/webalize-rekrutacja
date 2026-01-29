module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // bug fix
        'docs', // documentation
        'style', // formatting, missing semi colons etc
        'refactor', // refactoring existing code
        'test', // adding tests
        'chore', // maintenance tasks
        'perf', // performance improvements
        'ci', // CI configuration
        'build', // build system changes
        'revert', // revert changes
      ],
    ],
    'subject-max-length': [2, 'always', 50],
    'body-max-line-length': [2, 'always', 72],
  },
};
