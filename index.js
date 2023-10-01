module.exports = {
  ...require("@gliech/semantic-release-config-base"),
  ...{
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "@semantic-release/git",
      "@semantic-release/github"
    ]
  }
}