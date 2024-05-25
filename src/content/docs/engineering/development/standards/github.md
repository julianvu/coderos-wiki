---
title: GitHub
---

GitHub is a web-based platform that many software developers use to host Git repositories. GitHub additionally offers collaboration features that are not available with plain old Git. If Git were thought of as a filing cabinet, then GitHub is like Google Drive--it's a central hub for developers to store and manage their Git repositories online.

## GitHub vs. Git - What's the Difference?

While Git is a version control system that tracks changes to your code locally, GitHub takes it a step further by providing an online platform to store your Git repositories remotely. This means you can access your code from anywhere with an internet connection, and easily share it with others.

## GitHub Pull Requests

One of the key features of GitHub is the ability to create "pull requests," or PRs for short. These PRs are requests to merge a branch into the main branch, and allows other developers on the team to review the code before it gets merged in.

In a PR, developers can read over the code, see what's changing, and propose additional changes or fixes.

Here are the general guidelines in making pull requests:

### Length

In general, PRs should be short enough that they can be reviewed in a reasonable amount of time--ideally 5-10 minutes.

#### Large Features

Large efforts and projects that can't be reviewed by an individual in 5-10 minutes should get a dedicated feature branch (`feature/new-feature`). Branching off of this feature branch, new PRs can then be reviewed piecemeal, without blocking the main branch. Once the feature branch has been reviewed and properly tested, it can be merged into the main branch.

### Title

The pull request title should contain the ticket number and a brief title (e.g. `CODEROS-T-XXXX - Amazing New Feature`)

### Description

A description is optional, but it can be helpful to provide context for the changes in a PR. Provide a description at your leisure, but do not provide more than a brief note or bulleted list of changes.

### Review

#### Requesting a Review

Review **all** of your own PR code *before* requesting a review. Once you have reviewed your code, you can post a link to the PR in the relevant channel.

#### Approval

In general, a PR should be reviewed by all engineers in the team, and approved by the lead engineer, before it gets merged.

#### Comments

Any comments which aren't resolved will be considered blocking issues, and should be resolved by the PR submitter before an engineer approves the PR. For convenience, if possible, it is helpful to reply to the comment with a link to the commit which resolves the comment.

If you leave a comment that is blocking, strive to provide suggestions or alternative code to help it get resolved quickly.

Non-blocking comments should be resolved immediately. It can be also helpful to specify that the comment is non-blocking as well, such as prefixing `(noblock)` to the comment text.