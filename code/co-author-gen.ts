// run it in the browser: https://tsplay.dev/N9pL8w

// configurable
const users: string[] = ["insyri", "oh", "antinodes-io", "drumman22"];
const commitMessage: string = "Minor bug fixes";
// now click run
// remember to exclude the "" from the log

const converted: string[] = [];
const toGitHubNoReplyEmail = (user: string): string =>
  `<${user}@users.noreply.github.com>`;

for (const user of users)
  converted.push(`Co-authored-by: ${toGitHubNoReplyEmail(user)}`);

console.log(`${commitMessage}\n\n${converted.join("\n")}`);
